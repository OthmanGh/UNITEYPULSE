import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const featuresIcons = [
  {
    name: 'Manage',
    id: 1,
    icon: 'manage-accounts',
  },

  {
    name: 'Analytics',
    id: 2,
    icon: 'analytics',
  },

  {
    name: 'Tasks',
    id: 4,
    icon: 'tasks',
  },

  {
    name: 'Communitcate',
    id: 5,
    icon: 'google-circles-communities',
  },

  {
    name: 'Documents',
    id: 3,
    icon: 'document',
  },

  {
    name: 'Finance',
    id: 6,
    icon: 'finance',
  },
];

const IconComponents = {
  'manage-accounts': MaterialIcons,
  analytics: MaterialIcons,
  document: Ionicons,
  'google-circles-communities': MaterialCommunityIcons,
  finance: MaterialCommunityIcons,
  tasks: FontAwesome5,
};

const FeaturesIcons = () => {
  return (
    <View style={{ marginTop: 20 }} className="flex  items-center justify-between">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="felx flex-row gap-6"
      >
        {featuresIcons.map((event, index) => {
          const IconComponent = IconComponents[event.icon];
          return (
            <View key={index} className="flex flex-row items-center justify-between">
              <View className="flex flex-col gap-2 items-center justify-between">
                <TouchableOpacity className="bg-half-transparent rounded-full p-3" onPress={() => console.log('Event clicked')}>
                  <IconComponent name={event.icon} size={30} color="#64CCC5" />
                </TouchableOpacity>
                <Text className="mt-20  text-slate-200 text-[10px]">{event.name}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturesIcons;
