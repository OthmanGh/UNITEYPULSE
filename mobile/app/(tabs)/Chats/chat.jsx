import { Text, View } from 'react-native';
import React, { useEffect, useCallback, useState } from 'react';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
        },
      },
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
        },
      },
    ]);
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: '#64CCC5',

          left: '#041d29',
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
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
  };

  const scrollToBottom = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
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
