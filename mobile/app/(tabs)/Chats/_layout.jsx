import React from 'react';
import { Stack, SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const ChatLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="chat"
        options={({ route }) => ({
          headerShown: true,
          title: route.params?.username || 'Chat',
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
