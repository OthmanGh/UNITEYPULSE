import { useState } from 'react';
import { API_BASE_URI } from '../utils';

const useCreateCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createCustomer = async (customerData) => {
    setLoading(true);
    try {
      const token = JSON.parse(localStorage.getItem('authUser')).token;
      const url = `${API_BASE_URI}/customers`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(customerData),
      });

      const data = await response.json();

      if (response.ok) {
        return data.data.customer;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { createCustomer, loading, error };
};

export default useCreateCustomer;
