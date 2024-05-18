import { useState } from 'react';
import { API_BASE_URI } from '../utils';

const useUpdateCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCustomer = async (customerId, customerData) => {
    setLoading(true);
    try {
      const token = JSON.parse(localStorage.getItem('authUser')).token;
      const url = `${API_BASE_URI}/customers/${customerId}`;

      const response = await fetch(url, {
        method: 'PATCH',
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

  return { updateCustomer, loading, error };
};

export default useUpdateCustomer;
