import { createContext, useContext, useState } from 'react';

const ConversationContext = createContext({});

export const useConversation = () => useContext(ConversationContext);

export const ConversationProvider = ({ children }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);

  const value = {
    selectedConversation,
    setSelectedConversation,
    messages,
    setMessages,
  };

  return <ConversationContext.Provider value={value}>{children}</ConversationContext.Provider>;
};
