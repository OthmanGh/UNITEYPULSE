import React, { useState } from 'react';
import { FlatList, TextInput, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Messages } from '../../../constants/data';
import { Container, Card, UserInfo, UserImg, UserImgWrapper, TextSection, UserInfoText, PostTime, UserName, MessageText } from '../../styles/MessageStyles';

const Chats = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filteredMessages, setFilteredMessages] = useState(Messages);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newMessages = Messages.filter((item) => item.userName.toLowerCase().includes(text.toLowerCase()));
      setFilteredMessages(newMessages);
    } else {
      setFilteredMessages(Messages);
    }
  };

  const renderItem = ({ item }) => (
    <Card onPress={() => router.push({ pathname: '/chats/chat', params: { username: item.userName } })}>
      <UserInfo>
        <UserImgWrapper>
          <UserImg source={{ uri: item.userImg }} />
        </UserImgWrapper>
        <TextSection>
          <UserInfoText>
            <UserName>{item.userName}</UserName>
            <PostTime>{item.postTime}</PostTime>
          </UserInfoText>
          <MessageText>{item.messageText}</MessageText>
        </TextSection>
      </UserInfo>
    </Card>
  );

  return (
    <Container>
      <TextInput style={styles.searchBar} placeholder="Search by username" value={search} onChangeText={handleSearch} />
      <FlatList data={filteredMessages} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
    </Container>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
});

export default Chats;
