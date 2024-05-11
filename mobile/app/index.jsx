import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { logo } from '../constants/images';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-extraDark h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image source={logo} className="w-[130px] h-[100px]" resizeMode="contain" />

          <View className="relative mt-5">
            <Text className="text-2xl text-white p-2 font-bold text-center inline-block">
              Discover Endless Possibilities with <Text className=" text-primary mx-auto inline-block">Unity Paulse</Text>
            </Text>
          </View>

          <Text className="text-[12px]  font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovations: embark on a journey of limitless exploration with UnityPaulse
          </Text>

          <CustomButton title="Continue with Email" handlePress={() => router.push('/login')} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#042d3e" style="light" />
    </SafeAreaView>
  );
}
