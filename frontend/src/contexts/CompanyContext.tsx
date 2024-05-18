import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useAuthContext } from './AuthContext';

const CompanyContext = createContext(null);

export const CompanyProvider = ({ children }) => {
  const [company, setCompany] = useState(null);
  const { authUser } = useAuthContext();

  useEffect(() => {
    const getCompanyInfos = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/company/${authUser._id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authUser.token}`,
          },
        });
        setCompany(response.data.data.company);
      } catch (error) {
        console.log(error);
      }
    };

    getCompanyInfos();
  }, []);

  return <CompanyContext.Provider value={{ company, setCompany }}>{children}</CompanyContext.Provider>;
};

export const useCompany = () => {
  return useContext(CompanyContext);
};
