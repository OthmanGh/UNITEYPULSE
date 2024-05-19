import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Chats = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Chats</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
