import { useState } from 'react';
import useGetCustomers from '../../../hooks/useGetCustomers';

import styles from '../../../components';
import Header from '../components/Header';

const Customers = () => {
  const { customers, loading } = useGetCustomers();
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const headers = ['customerId', 'name', 'location', 'budget', 'status', 'week'];

  return (
    <section className={styles.dashboardSection}>
      <Header category="pages" title="customers" />
    </section>
  );
};

export default Customers;
