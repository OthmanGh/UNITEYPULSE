import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2 mt-10">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-slate-200 focus:border-primary">
        <Feather name="search" color="rgb(226 232 240)" size={18} />
        <TextInput placeholder="Search" className="ml-2 flex-1 text-primary" placeholderTextColor="rgb(226 232 240)" onChangeText={handleSearch} />

        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-slate-200">
          <MaterialIcons name="event" size={18} color="rgb(226 232 240)" />
          <Text className="text-gray-200">Events</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
