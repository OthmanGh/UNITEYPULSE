import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, View, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Container, Card, UserInfo, UserImg, UserImgWrapper, TextSection, UserInfoText, PostTime, UserName, MessageText } from '../../styles/MessageStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URI } from '../../../constants/data';

const Chats = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [authUser, setAuthUser] = useState(null);
  const [usersForSidebar, setUsersForSideBar] = useState([]);

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
    <Card className="bg-half-transparent p-4 rounded-xl mt-6 h-[100px]" onPress={() => router.push(`/chats/chat?userId=${item._id}`)}>
      <UserInfo>
        <UserImgWrapper>
          <UserImg source={{ uri: item.profilePicture }} />
        </UserImgWrapper>
        <TextSection>
          <UserInfoText>
            <UserName className="text-primary-light">{item.name}</UserName>
            <PostTime>{item.createdAt}</PostTime>
          </UserInfoText>
          <MessageText className="text-primary">{item.email}</MessageText>
        </TextSection>
      </UserInfo>
    </Card>
  );

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <TextInput
        className="w-full p-3 rounded-lg placeholder:text-slate-200 border-slate-200 border-[1px] mt-4"
        placeholder="Search by name"
        placeholderTextColor={'rgb(226 232 240)'}
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList data={filteredMessages} className="flex flex-col" keyExtractor={(item) => item._id.toString()} renderItem={renderItem} />
    </Container>
  );
};

export default Chats;
