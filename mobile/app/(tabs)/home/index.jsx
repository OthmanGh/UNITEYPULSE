import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { events } from '../../../constants/data';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CustomCarousel from '../../../components/AppCarousel';
import EventCard from '../../../components/Events';
import { eventsData } from '../../../constants/data';
import { useAuth } from '../../../Context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <SafeAreaView className="bg-extraDark h-full">
      <ScrollView>
        <StatusBar barStyle="light-content" />

        <View className="flex-row items-center space-x-2 px-4 pb-2 mt-10 mb-6">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-500 focus:border-primary">
            <Feather name="search" color="gray" size={18} />
            <TextInput placeholder="Search" className="ml-2 flex-1 text-primary" placeholderTextColor="gray" />

            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-500">
              <MaterialIcons name="event" size={18} color="gray" />
              <Text className="text-gray-600">Events</Text>
            </View>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        >
          <Events />
        </ScrollView>

        <View className="mt-4">
          <CustomCarousel data={events} />
        </View>
      </ScrollView>

      {/* <EventCard events={eventsData} /> */}
    </SafeAreaView>
  );
};

export default Home;

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {events.map((event, index) => {
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity className={`rounded-full shadow mb-2`} onPress={() => setActiveEvent(event)}>
                <Image style={{ width: 60, height: 60, padding: 20, borderRadius: 50 }} source={{ uri: event.image }} />
              </TouchableOpacity>
              <Text className={'text-sm text-slate-300'}>{event.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
