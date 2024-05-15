import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import io from 'socket.io-client';
import { API_BASE_URL } from '../utils';
const SocketContext = createContext<any>(null);

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<any>(null);
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io(`${API_BASE_URL}:8000`, {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);

      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
