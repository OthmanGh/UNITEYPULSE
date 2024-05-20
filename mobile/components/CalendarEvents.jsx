import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { convertToReadableDate } from '../constants/data';

const CalendarEvents = ({ events }) =>
  events.map((event, index) => (
    <View key={index} className="bg-half-transparent p-4 mb-4 border-l-2  border-l-primary flex flex-col rounded ">
      <View className="flex flex-row items-center justify-between mb-2">
        <Text className="text-primary text-[16px]">{event.title}</Text>
        <Text className="text-primary-light text-[12px]"> {convertToReadableDate(event.date)}</Text>
      </View>

      <Text className="text-slate-300 mb-2 text-[12px]">{event.description}</Text>
      <Text className="text-primary-light text-[13px]">{event.type}</Text>
    </View>
  ));

export default CalendarEvents;
