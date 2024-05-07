import { useEffect } from 'react';
import { useSocketContext } from '../contexts/SocketContext';
import { useConversation } from '../contexts/ConversationContext';
import notificationSound from '../assets/notification.mp3';

const useListenMessages = () => {
  const { socket } = useSocketContext();

  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      newMessage.shake = true;

      const sound = new Audio(notificationSound);

      sound.play();

      setMessages(...messages, newMessage);
    });

    return () => socket.off('newMessage');
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
