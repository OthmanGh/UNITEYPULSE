import { useState } from 'react';
import { API_BASE_URI } from '../utils';

const useDeleteCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = JSON.parse(localStorage.getItem('authUser')).token;

  const deleteCustomer = async (customerId) => {
    setLoading(true);
    try {
      const url = `${API_BASE_URI}/customers/${customerId}`;

      await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteCustomer, loading, error };
};

export default useDeleteCustomer;
