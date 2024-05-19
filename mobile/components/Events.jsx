import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventCard = ({ events }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <View style={styles.container}>
      {events.map((event, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.type}>{event.type}</Text>
          <Text style={styles.date}>{formatDate(event.date)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    overflow: 'scroll',
    display: 'block',
  },
  card: {
    backgroundColor: '#176B87',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    borderLeftColor: 'white',
    borderLeftWidth: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  type: {
    fontSize: 10,
    color: 'white',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: 'lightblue',
  },
});

export default EventCard;
