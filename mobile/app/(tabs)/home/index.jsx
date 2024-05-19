import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <StatusBar barStyle="light-content" />

        <View className="flex-row items-center space-x-2 px-4 pb-2 mt-4">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Feather name="search" />
            <TextInput placeholder="Search" className="ml-2 flex-1" />

            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
              <MaterialIcons name="event" />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    {
      name: 'Event 1',
      id: 1,
      image:
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
    },

    {
      name: 'Event 2',
      id: 2,
      image:
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
    },

    {
      id: 3,
      name: 'Event 3',
      image:
        'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
    },

    {
      name: 'Event 1',
      id: 1,
      image:
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
    },

    {
      name: 'Event 2',
      id: 2,
      image:
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
    },

    {
      id: 3,
      name: 'Event 3',
      image:
        'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

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
          let isActive = activeEvent && event.id === activeEvent.id;

          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';

          let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity className={`p-1 rounded-full shadow bg-gray-200` + btnClass} onPress={() => setActiveEvent(event)}>
                <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={{ uri: event.image }} />
              </TouchableOpacity>
              <Text className={'text-sm' + textClass}>{event.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
