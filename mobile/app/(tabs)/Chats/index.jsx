import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, View, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Container, Card, UserInfo, UserImg, UserImgWrapper, TextSection, UserInfoText, PostTime, UserName, MessageText } from '../../styles/MessageStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URI } from '../../../constants/data';
import { convertToReadableDate } from '../../../constants/data';

const Chats = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [authUser, setAuthUser] = useState(null);
  const [usersForSidebar, setUsersForSideBar] = useState([]);

  console.log(authUser);

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
    const getUsers = async () => {
      try {
        const res = await fetch(`${API_BASE_URI}/api/users`, {
          headers: {
            Authorization: `Bearer ${authUser.token}`,
            'Content-Type': 'application/json',
          },
        });
        const usersForSidebar = await res.json();
        setUsersForSideBar(usersForSidebar);
      } catch (e) {
        console.error('Error fetching users data', e);
      }
    };

    getUsers();
  }, [authUser]);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newMessages = usersForSidebar.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
      setFilteredMessages(newMessages);
    } else {
      setFilteredMessages(usersForSidebar);
    }
  };

  const renderItem = ({ item }) => (
    <Card
      className="flex flex-col mb-3 bg-half-transparent items-center justify-center px-6 rounded-xl h-[100px]"
      onPress={() => router.push(`/chats/chat?userId=${item._id}`)}
    >
      <View className="flex flex-row gap-3 items-center ">
        <UserImg className="w-12 h-12 rounded-full mt-2" source={{ uri: item.profilePicture }} />
        <TextSection className="flex flex-col justify-center gap-[3px] self-center mt-10">
          <View className="flex flex-row justify-between w-[88%] ">
            <UserName className="text-primary-light">{item.name}</UserName>
            <PostTime className="text-slate-200 self-center text-[10px]">{convertToReadableDate(item.createdAt)}</PostTime>
          </View>
          <MessageText className="text-primary text-[12px]">{item.email}</MessageText>
        </TextSection>
      </View>
    </Card>
  );

  return (
    <View className="bg-extraDark p-4 mt-7">
      <StatusBar barStyle="light-content" backgroundColor="#042d3e" />
      <TextInput
        className="w-full p-3 rounded-lg placeholder:text-slate-200 border-slate-200 border-[1px] mt-8 mb-8"
        placeholder="Search Users"
        placeholderTextColor={'rgb(226 232 240)'}
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList data={filteredMessages} className="flex flex-col" keyExtractor={(item) => item._id.toString()} renderItem={renderItem} />
    </View>
  );
};

export default Chats;
