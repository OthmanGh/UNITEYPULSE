import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const fetchStoredUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('authUser');
        if (storedUser) {
          setAuthUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error retrieving user from AsyncStorage:', error);
      }
    };

    fetchStoredUser();
  }, []);

  const storeUser = async (user) => {
    try {
      await AsyncStorage.setItem('authUser', JSON.stringify(user));
      setAuthUser(user);
    } catch (error) {
      console.error('Error storing user in AsyncStorage:', error);
    }
  };

  const clearUser = async () => {
    try {
      await AsyncStorage.removeItem('authUser');
      setAuthUser(null);
    } catch (error) {
      console.error('Error clearing user from AsyncStorage:', error);
    }
  };

  return <AuthContext.Provider value={{ authUser, setAuthUser, storeUser, clearUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
