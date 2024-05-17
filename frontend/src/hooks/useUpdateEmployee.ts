import { useState } from 'react';

const useUpdateEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem('authUser')).token;

  const updateEmployee = async (employeeId, employeeData) => {
    setLoading(true);

    setError(null);

    try {
      const url = `http://127.0.0.1:8000/api/employees/${employeeId}`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(employeeData),
      });

      const data = await res.json();

      if (data.status === 'success') {
        return data.data.employee;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateEmployee, loading, error };
};

export default useUpdateEmployee;
