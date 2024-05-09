import { useEffect, useState } from 'react';

const useGetCustomers = () => {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);

  const token = JSON.parse(localStorage.getItem('authUser')).token;
  useEffect(() => {
    const getCustomers = async () => {
      setLoading(true);
      try {
        const url = 'http://127.0.0.1:8000/api/customers';

        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        console.log(data.data.customers);

        if (data.status === 'success') {
          setCustomers(data.data.customers);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCustomers();
  }, []);

  return { customers, loading };
};

export default useGetCustomers;
