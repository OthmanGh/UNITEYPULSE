import React from 'react';
import { Stack } from 'expo-router';

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="editprofile"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#042d3e',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
