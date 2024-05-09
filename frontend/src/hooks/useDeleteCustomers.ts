import { useState } from 'react';

const useDeleteCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteCustomer = async (customerId, token) => {
    setLoading(true);
    try {
      const url = `http://127.0.0.1:8000/api/customers/${customerId}`;

      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (data.status !== 'success') {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteCustomer, loading, error };
};

export default useDeleteCustomer;
