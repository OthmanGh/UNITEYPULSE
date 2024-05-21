import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { events } from '../../../constants/data';
import CustomCarousel from '../../../components/AppCarousel';
import { API_BASE_URI } from '../../../constants/data';
import FeaturesIcons from '../../../components/FeaturesIcons';
import SearchBar from '../../../components/SearchBar';
import CalendarEvents from '../../../components/CalendarEvents';

const Home = () => {
  const [authUser, setAuthUser] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getAuthUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('authUser');
        if (jsonValue != null) {
          setAuthUser(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error("Error reading 'authUser' from AsyncStorage", e);
      }
    };

    getAuthUser();
  }, []);

  useEffect(() => {
    if (!authUser) return;
    const getEvent = async () => {
      try {
        const res = await fetch(`${API_BASE_URI}/events`, {
          headers: {
            Authorization: `Bearer ${authUser.token}`,
            'Content-Type': 'application/json',
          },
        });
        const eventsData = await res.json();
        setCalendarEvents(eventsData.data);
      } catch (e) {
        console.error('Error fetching events data', e);
      }
    };

    getEvent();
  }, [authUser]);

  const filteredEvents = calendarEvents.filter((event) => event.title.toLowerCase().includes(searchQuery.toLowerCase()));

  console.log(authUser);

  return (
    <SafeAreaView className="bg-extraDark h-full">
      <ScrollView>
        <StatusBar barStyle="light-content" />

        <View>
          <SearchBar setSearchQuery={setSearchQuery} />
        </View>

        <View className="flex flex-row mb-2">
          <FeaturesIcons />
        </View>

        <View className="mt-4">
          <CustomCarousel data={events} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        ></ScrollView>

        <ScrollView showsHorizontalScrollIndicator={false} className="h-[230px] overflow-auto">
          {filteredEvents.length > 0 ? (
            <CalendarEvents events={filteredEvents} />
          ) : (
            <Text style={{ textAlign: 'center', marginTop: 10, color: 'gray' }}>No matched events found.</Text>
          )}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
