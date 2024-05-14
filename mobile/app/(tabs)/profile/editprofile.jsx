import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import CustomButton from '../../components/CustomButton';
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* <BottomSheet snapPoints={[330, 0]} initialSnap={1} enabledGestureInteraction={true} /> */}

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity>
            <View style={{ height: 120, width: 120, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D',
                }}
                style={{ height: 100, width: 100, borderRadius: 15 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <Text style={{ marginTop: 10, marginBottom: 25, fontSize: 20, fontWeight: 'bold', color: '#CDCDE0' }}>Othman Ghandour</Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#9999" size={20} style={{ marginRight: 10 }} />
          <TextInput placeholder="First Name" placeholderTextColor="#9999" style={styles.textInput} autoCorrect={false} />
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#9999" size={20} style={{ marginRight: 10 }} />
          <TextInput placeholder="Last Name" placeholderTextColor="#9999" style={styles.textInput} autoCorrect={false} />
        </View>

        <View style={styles.action}>
          <Feather name="phone" color="#9999" size={20} style={{ marginRight: 10 }} />

          <TextInput placeholder="Phone" placeholderTextColor="#9999" style={styles.textInput} keyboardType="number-pad" autoCorrect={false} />
        </View>

        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#9999" size={20} style={{ marginRight: 10 }} />
          <TextInput placeholder="Email" placeholderTextColor="#9999" style={styles.textInput} autoCorrect={false} keyboardType="email-address" />
        </View>

        <View style={styles.action}>
          <FontAwesome name="globe" color="#9999" size={20} style={{ marginRight: 10 }} />
          <TextInput placeholder="Country" placeholderTextColor="#9999" style={styles.textInput} autoCorrect={false} />
        </View>

        <View style={styles.action}>
          <Ionicons name="location" color="#9999" size={20} style={{ marginRight: 10 }} />
          <TextInput placeholder="City" placeholderTextColor="#9999" style={styles.textInput} autoCorrect={false} />
        </View>

        <CustomButton title="Submit" handlePress={() => {}} containerStyles="w-full mt-10 h-0 p-0" />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041d29',
  },

  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: 350,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomColor: '#A6F6F1',
    borderRadius: 10,
    paddingLeft: 10,
  },

  textInput: {
    flex: 1,
    paddingVertical: 8,
    color: '#CDCDE0',
  },

  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panelHeader: {
    alignItems: 'center',
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },

  panelTitle: {
    fontSize: 27,
    height: 35,
  },

  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },

  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
