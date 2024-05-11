import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logo } from '../../constants/images';

const Login = () => {
  return (
    <SafeAreaView className="bg-extraDark h-full">
      <ScrollView>
        <View className="w-full justify-center h-full my-6 px-4">
          <Image source={logo} className="w-full h-[150px]" resizeMode="contain" />
          <Text className="text-2xl text-gray-50 text-semibold mt-0 font-psemibold text-center">login in to unity paulse</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
