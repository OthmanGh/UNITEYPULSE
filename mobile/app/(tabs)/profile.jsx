import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logo } from '../../constants/images';
import { Avatar, Caption, Title, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView className="bg-extraDark">
        <View>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
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
    marginTop: 10,
  },

  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },

  menuItmeText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

{
  /* <View style={styles.container}>
          <View style={styles.profileHeader}>
            <Image style={styles.profileImg} source={{ uri: 'https://via.placeholder.com/150' }} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.heading}>Personal Information</Text>
            <Text>
              <Text style={styles.bold}>Name:</Text> John Doe
            </Text>
            <Text>
              <Text style={styles.bold}>Employee ID:</Text> EMP12345
            </Text>
            <Text>
              <Text style={styles.bold}>Department:</Text> Marketing
            </Text>
            <Text>
              <Text style={styles.bold}>Job Title:</Text> Marketing Specialist
            </Text>
            <Text>
              <Text style={styles.bold}>Email:</Text> john.doe@example.com
            </Text>
            <Text>
              <Text style={styles.bold}>Phone Number:</Text> +123-456-7890
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.heading}>Company Information</Text>
            <Text>
              <Text style={styles.bold}>Company Name:</Text> UNITEY PULSE
            </Text>
            <Text>
              <Text style={styles.bold}>Office Location:</Text> New York, NY
            </Text>
            <Text>
              <Text style={styles.bold}>Office Address:</Text> 123 Main Street, Suite 101
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.heading}>Job Details</Text>
            <Text>
              <Text style={styles.bold}>Employment Status:</Text> Full-time
            </Text>
            <Text>
              <Text style={styles.bold}>Date of Joining:</Text> January 1, 2020
            </Text>
            <Text>
              <Text style={styles.bold}>Supervisor:</Text> Jane Smith (Marketing Manager)
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.heading}>Leave Management</Text>
            <Text>
              <Text style={styles.bold}>Annual Leave Balance:</Text> 10 days
            </Text>
            <Text>
              <Text style={styles.bold}>Sick Leave Balance:</Text> 5 days
            </Text>
            <Text>
              <Text style={styles.bold}>Total Leave Balance:</Text> 15 days
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.heading}>Flexible Work Arrangements</Text>
            <Text>
              <Text style={styles.bold}>Current Work Arrangement:</Text> Office-based
            </Text>
            <Text>
              <Text style={styles.bold}>Request Flexible Work Arrangement:</Text>
            </Text>
            <Text>
              <Text style={styles.checkboxLabel}>Remote Work</Text>
              <Text style={styles.checkbox}>✔</Text>
            </Text>
            <Text>
              <Text style={styles.checkboxLabel}>Flexible Hours</Text>
              <Text style={styles.checkbox}>✔</Text>
            </Text>
            <Text>
              <Text style={styles.checkboxLabel}>Job Sharing</Text>
              <Text style={styles.checkbox}>✖</Text>
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.heading}>Emergency Contact</Text>
            <Text>
              <Text style={styles.bold}>Name:</Text> Jane Doe
            </Text>
            <Text>
              <Text style={styles.bold}>Relationship:</Text> Spouse
            </Text>
            <Text>
              <Text style={styles.bold}>Phone Number:</Text> +123-456-7890
            </Text>
          </View>
          <TouchableOpacity style={styles.editProfileBtn}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View> */
}
