import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Chats = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView className="bg-extraDark  min-h-screen p-6">
        <Text className="text-3xl text-primary mb-4">Chat</Text>

        <View className="flex flex-row items-center justify-between bg-half-transparent rounded-md">
          <TextInput className="flex-1 bg-dark h-13  text-primary pl-2" placeholder="Search" placeholderTextColor="gray" />

          <TouchableOpacity className="w-[15%] flex items-center">
            <FontAwesome name="search" color="gray" size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
