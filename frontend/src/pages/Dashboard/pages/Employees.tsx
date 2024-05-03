import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../../components';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const columns = [
    {
      name: 'id',
      label: 'S.No',
    },

    {
      name: 'image',
      label: 'Profile',
      options: {
        customBodyRender: (value) => <img src={value} alt="pic" className="w-12 rounded-full p-3 bg-slate-300" />,
      },
      filter: false,
    },

    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'age',
      label: 'Age',
    },

    {
      name: 'gender',
      label: 'Gender',
      options: {
        customBodyRender: (value) => (
          <p className={`capitalize px-3 py-1 inline-block rounded-full ${value === 'male' ? 'bg-blue-500' : 'bg-pink-500'}`}>{value}</p>
        ),
      },
    },

    {
      name: 'domain',
      label: 'Domain',
      options: {
        customBodyRender: (value) => (
          <a href={'https://' + value} className="bg-rose-600 px-3 rounded-m">
            Open
          </a>
        ),
      },
    },
  ];

  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: 'standard',
    separator: true,
  };

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        let local = data?.users?.map((user, index) => ({
          id: index + 1,
          name: user?.firstName + ' ' + user?.lastName,
          age: user?.age,
          gender: user?.gender,
        }));
        setEmployees(local);
      });
  }, []);

  const getMuiTheme = () => {
    return createTheme({
      typography: {
        fontFamily: 'Poppins',
      },
      palette: {
        background: {
          paper: 'text-secondary',
          default: 'text-secondary',
        },
        text: {
          primary: '#ffff',
        },
        mode: 'dark',
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: '10px 4px',
            },
            body: {
              padding: '7px 15px',
              color: '#e2e8f0',
            },
            footer: {},
          },
        },
        MUIDataTable: {
          root: {
            '& .MuiTableBody-root .MuiTableRow-root:not(:last-child)': {
              borderBottom: '1px solid white', // Change rows separator color to white
            },
          },
        },
      },
    });
  };

  return (
    <section className={styles.dashboardSection}>
      <Header category="app" title="Employees" />
      <div className="max-w-full overflow-x-auto dark:bg-white bg-dark rounded-md h-[100vh]">
        <div className="max-w-4xl rounded-lg p-4 bg-text-secondary">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable title={'Employees List'} data={employees} columns={columns} options={options} />
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};

export default Employees;
