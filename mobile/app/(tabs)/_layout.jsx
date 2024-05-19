import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { AuthProvider } from '../../Context/AuthContext';
import AntDesign from '@expo/vector-icons/AntDesign';

const TabsLayout = () => {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#A6F6F1',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#042d3e',
            borderTopColor: '#A6F6F1',
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Entypo name="home" size={24} color={color} />
                <Text style={{ color: focused ? '#A6F6F1' : 'white', fontSize: 10 }}>Home</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Ionicons name="person" size={24} color={color} />
                <Text style={{ color: focused ? '#A6F6F1' : 'white', fontSize: 10 }}>Profile</Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="chats"
          options={{
            title: 'Chats',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <AntDesign name="message1" size={24} color={color} />
                <Text style={{ color: focused ? '#A6F6F1' : 'white', fontSize: 10 }}>Chat</Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </AuthProvider>
  );
};

export default TabsLayout;
