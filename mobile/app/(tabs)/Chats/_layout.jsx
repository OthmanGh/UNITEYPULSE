import React, { useEffect, useState } from 'react';
import { Stack, SplashScreen } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();

const ChatLayout = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const getAuthUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('authUser');
        if (jsonValue != null) {
          setAuthUser(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error("Error reading 'authUser' from AsyncStorage", e);
      }
    };

    getAuthUser();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="chat"
        options={({ route }) => ({
          headerShown: true,
          title: authUser.name || 'Chat',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#042d3e',
          },
          headerTintColor: 'white',
        })}
      />
    </Stack>
  );
};

export default ChatLayout;
