import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logo } from '../../constants/images';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { API_BASE_URI } from '../../constants/data';
import { useAuth } from '../../Context/AuthContext';
import { router } from 'expo-router';
import { AsyncStorage } from 'react-native';

const Login = () => {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: 'othman@gmail.com',
    password: 'Othman123',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);

    try {
      const url = `${API_BASE_URI}/auth/login`;

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.status === 'success') {
        await AsyncStorage.setItem('userData', JSON.stringify(data.user));

        router.replace('/home');
      } else {
        Alert.alert('Login Failed', data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-extraDark h-full">
      <ScrollView>
        <View className="w-full justify-center h-[85vh] my-6 px-4">
          <Image source={logo} className="w-full h-[150px]" resizeMode="contain" />
          <Text className="text-2xl text-gray-50 font-semibold mt-0 font-psemibold text-center">Login to Unity Pulse</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles="mt-7" secureTextEntry />

          <CustomButton title="Login" handlePress={submit} containerStyles="mt-14" isLoading={isSubmitting} />

          <View className="justify-center pt-5 flex-row gap-2"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
