import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logo } from '../../../constants/images';
import { Avatar, Caption, Title, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';

const Profile = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handlePress = (itemName) => {
    setSelectedItem(itemName);
    setTimeout(() => {
      setSelectedItem('');
    }, 150);
  };

  return (
    <SafeAreaView>
      <ScrollView className="bg-extraDark  min-h-full">
        <View>
          <View
            style={
              ([styles.userInfoSection],
              {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '90%',
                marginBottom: 20,
              })
            }
          >
            <View style={{ flexDirection: 'row', marginTop: 15, padding: 10 }}>
              <Avatar.Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2V8ZW58MHx8MHx8fDA%3D',
                }}
                size={80}
              />

              <View style={{ marginLeft: 20 }}>
                <Title style={([styles.title], { marginTop: 10, marginBottom: 5 })} className="text-primary-light">
                  Othman Ghandour
                </Title>
                <Caption style={styles.caption} className="text-primary-light">
                  @othman_id
                </Caption>
              </View>
            </View>

            <View>
              <TouchableOpacity onPress={() => router.push('/profile/editprofile')}>
                <Icon name="account-edit" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" size={20} color="white" />
              <Text className="text-gray-50 ml-4">Lebanon, Beirut</Text>
            </View>

            <View style={styles.row}>
              <Icon name="phone" size={20} color="white" />
              <Text className="text-gray-50 ml-4">+90 552 650 20 61</Text>
            </View>

            <View style={styles.row}>
              <Icon name="email" size={20} color="white" />
              <Text className="text-gray-50 ml-6">othman@gmail.com</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: 'lightgray',
                borderRightWidth: 1,
              },
            ]}
          >
            <Title className="text-primary">7800$</Title>
            <Caption className="text-gray-100">Salary</Caption>
          </View>

          <View style={styles.infoBox}>
            <Title className="text-primary">A</Title>
            <Caption className="text-gray-100">Performance</Caption>
          </View>
        </View>

        <View>
          <TouchableRipple onPress={() => handlePress('Favorites')}>
            <View style={[styles.menuItem, selectedItem === 'Favorites' && styles.selectedMenuItem]}>
              <Icon name="heart" color="lightgray" size={25} />
              <Text
                style={[
                  styles.menuItemText,
                  {
                    color: 'lightgray',
                  },
                ]}
              >
                Your Favorites
              </Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => handlePress('Payment')}>
            <View style={[styles.menuItem, selectedItem === 'Payment' && styles.selectedMenuItem]}>
              <Icon name="credit-card" color="lightgray" size={25} />
              <Text
                style={[
                  styles.menuItemText,
                  {
                    color: 'lightgray',
                  },
                ]}
              >
                Payment
              </Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => handlePress('Share')}>
            <View style={[styles.menuItem, selectedItem === 'Share' && styles.selectedMenuItem]}>
              <Icon name="share-outline" color="lightgray" size={25} />
              <Text
                style={[
                  styles.menuItemText,
                  {
                    color: 'lightgray',
                  },
                ]}
              >
                Share
              </Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => handlePress('Support')}>
            <View style={[styles.menuItem, selectedItem === 'Support' && styles.selectedMenuItem]}>
              <Icon name="account-check-outline" color="lightgray" size={25} />
              <Text
                style={[
                  styles.menuItemText,
                  {
                    color: 'lightgray',
                  },
                ]}
              >
                Support
              </Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => handlePress('Settings')}>
            <View style={[styles.menuItem, selectedItem === 'Settings' && styles.selectedMenuItem]}>
              <Icon name="account-settings" color="lightgray" size={25} />
              <Text
                style={[
                  styles.menuItemText,
                  {
                    color: 'lightgray',
                  },
                ]}
              >
                Settings
              </Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  infoBoxWrapper: {
    borderBottomColor: '#dddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },

  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuWrapper: {
    marginTop: 20,
    backgroundColor: 'red',
  },

  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },

  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },

  selectedMenuItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
