import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Home</Text>
          <TextInput placeholder="Type something..." />
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
