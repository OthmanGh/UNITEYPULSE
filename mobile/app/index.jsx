import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { logo, onBoardingImage } from '../constants/images';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView className="bg-extraDark h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-[100vh] px-4">
          <Image source={logo} className="w-full h-[150px]" resizeMode="contain" />

          <View className="relative">
            <Text className="text-2xl text-white p-2 font-bold text-center inline-block">
              Discover Endless Possibilities with <Text className=" text-primary mx-auto inline-block">Unity Pulse</Text>
            </Text>
          </View>

          <Text className="text-[12px]  font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovations: embark on a journey of limitless exploration with UnityPulse
          </Text>

          <CustomButton title="Continue with Email" handlePress={() => router.push('/login')} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#042d3e" style="light" />
    </SafeAreaView>
  );
}
