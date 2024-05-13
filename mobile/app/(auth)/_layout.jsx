import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '../../Context/AuthContext';

const AuthLayout = () => {
  return (
    <>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>

        <StatusBar backgroundColor="#042d3e" style="light" />
      </AuthProvider>
    </>
  );
};

export default AuthLayout;
