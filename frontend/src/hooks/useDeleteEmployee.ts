import { useState } from 'react';

const useDeleteEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem('authUser')).token;

  const deleteEmployee = async (employeeId) => {
    setLoading(true);
    setError(null);
    try {
      const url = `http://127.0.0.1:8000/api/employees/${employeeId}`;
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (data.status === 'success') {
        return true;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteEmployee, loading, error };
};

export default useDeleteEmployee;
