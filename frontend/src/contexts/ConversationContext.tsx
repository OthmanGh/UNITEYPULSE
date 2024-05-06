import { createContext, useContext, useState } from 'react';

const ConversationContext = createContext(null);

export const useConversation = () => useContext(ConversationContext);

export const ConversationProvider = ({ children }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const [messages, setMessages] = useState([]);

  return (
    <ConversationContext.Provider value={{ selectedConversation, setSelectedConversation, messages, setMessages }}>{children}</ConversationContext.Provider>
  );
};
