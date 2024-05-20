import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';

const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2 mt-10">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-500 focus:border-primary">
        <Feather name="search" color="gray" size={18} />
        <TextInput placeholder="Search" className="ml-2 flex-1 text-primary" placeholderTextColor="gray" />

        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-500">
          <MaterialIcons name="event" size={18} color="gray" />
          <Text className="text-gray-600">Events</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
