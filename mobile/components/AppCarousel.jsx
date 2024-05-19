import React, { useRef, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const CustomCarousel = ({ data }) => {
  const scrollViewRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slideWidth = Dimensions.get('window').width;
    const currentIndex = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
    setActiveIndex(currentIndex);
  };

  const handlePress = (index) => {
    if (scrollViewRef.current) {
      const slideWidth = Dimensions.get('window').width;
      scrollViewRef.current.scrollTo({ x: index * slideWidth, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={handleScroll} ref={scrollViewRef}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(index)}>
            <View style={styles.slide}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {data.slice(0, 4).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(index)}>
            <View style={[styles.dot, activeIndex === index && styles.activeDot]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '80%',
    height: 150,
    borderRadius: 10,
    objectFit: 'cover',
    marginBottom: 0,
  },

  title: {
    fontSize: 5,
    fontWeight: 'bold',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#A6F6F1',
  },
});

export default CustomCarousel;
