import React, { useEffect, useCallback, useState } from 'react';
import { View } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { API_BASE_URI } from '../../../constants/data';
import io from 'socket.io-client';
import notificationSound from '../../../assets/sounds/notification.mp3';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const { userId } = route.params;
  const [authUser, setAuthUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [sound, setSound] = useState(null);

  console.log(route.params);
  console.log(authUser);

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(notificationSound);
    setSound(sound);
  }

  useEffect(() => {
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

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
    if (authUser && userId) {
      const newSocket = io(API_BASE_URI, {
        query: { userId: authUser._id },
      });
      setSocket(newSocket);

      return () => newSocket.close();
    }
  }, [authUser, userId]);

  useEffect(() => {
    if (socket) {
      socket.on('newMessage', async (newMessage) => {
        const formattedMessage = {
          _id: newMessage._id,
          text: newMessage.message,
          createdAt: new Date(newMessage.createdAt),
          user: {
            _id: newMessage.senderId,
            name: newMessage.senderName,
          },
        };
        setMessages((previousMessages) => GiftedChat.append(previousMessages, [formattedMessage]));

        if (sound) {
          await sound.replayAsync();
        }
      });
    }
  }, [socket, sound]);

  useEffect(() => {
    if (!authUser || !userId) return;

    const getMessages = async () => {
      try {
        const res = await fetch(`${API_BASE_URI}/api/messages/${userId}`, {
          headers: {
            Authorization: `Bearer ${authUser.token}`,
            'Content-Type': 'application/json',
          },
        });
        const fetchedMessages = await res.json();

        const formattedMessages = fetchedMessages.map((msg) => ({
          _id: msg._id,
          text: msg.message,
          createdAt: new Date(msg.createdAt),
          user: {
            _id: msg.senderId,
            name: msg.senderName,
          },
        }));

        setMessages(formattedMessages.reverse());
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };

    getMessages();
  }, [authUser, userId]);

  const sendMessage = async (messageText) => {
    if (!authUser || !userId) return;

    const newMessage = {
      _id: Math.random().toString(36).substring(7),
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: authUser._id,
        name: authUser.name,
      },
    };

    setMessages((previousMessages) => GiftedChat.append(previousMessages, [newMessage]));

    if (socket) {
      socket.emit('sendMessage', {
        message: messageText,
        receiverId: userId,
        senderId: authUser._id,
      });
    }

    try {
      const res = await fetch(`${API_BASE_URI}/api/messages/send/${userId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authUser.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
        }),
      });

      const savedMessage = await res.json();

      if (savedMessage.error) {
        throw new Error(savedMessage.error);
      }

      setMessages((previousMessages) =>
        previousMessages.map((msg) => {
          if (msg._id === newMessage._id) {
            return { ...msg, _id: savedMessage._id };
          }
          return msg;
        })
      );
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#64CCC5',
          marginBottom: 10,
          padding: 5,
          maxWidth: '80%',
        },
        left: {
          backgroundColor: 'white',
          marginBottom: 10,
          padding: 7,
          maxWidth: '90%',
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        },
      }}
      containerToNextStyle={{
        right: {
          marginBottom: 2,
        },
        left: {
          marginBottom: 2,
        },
      }}
    />
  );

  const renderSend = (props) => (
    <Send {...props}>
      <View>
        <MaterialCommunityIcons
          name="send-circle"
          size={32}
          color="#64CCC5"
          style={{
            marginBottom: 5,
            marginRight: 5,
          }}
        />
      </View>
    </Send>
  );

  const scrollToBottom = () => <FontAwesome name="angle-double-down" size={22} color="#333" />;

  const onSend = useCallback(
    (messages = []) => {
      const newMessage = messages[0];
      sendMessage(newMessage.text);
    },
    [authUser, userId]
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: authUser ? authUser._id : 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottom}
    />
  );
};

export default Chat;
