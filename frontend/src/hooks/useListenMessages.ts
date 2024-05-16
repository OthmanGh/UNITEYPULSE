import React, { useEffect } from 'react';
import { useSocketContext } from '../contexts/SocketContext';
import useConversation from '../store/useConversations';
import sound from '../assets/notification.mp3';
const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true;
      const notificationSound = new Audio(sound);
      notificationSound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off('newMessage');
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
