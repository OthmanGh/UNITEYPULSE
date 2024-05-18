import { useEffect, useState } from 'react';
import { API_BASE_URI } from '../utils';

const useGetEmployees = () => {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const token = JSON.parse(localStorage.getItem('authUser')).token;
  useEffect(() => {
    const getEmployees = async () => {
      setLoading(true);
      try {
        const url = `${API_BASE_URI}/employees`;
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        console.log(data.data);

        if (data.status === 'success') {
          setEmployees(data.data.employees);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getEmployees();
  }, []);

  return { employees, loading };
};

export default useGetEmployees;
