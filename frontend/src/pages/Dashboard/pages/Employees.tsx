import React from 'react';
import Header from '../components/Header';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../../components';
import useGetEmployees from '../../../hooks/useGetEmployees';

const Employees = () => {
  const { employees, loading } = useGetEmployees();

  console.log(employees);

  const columns = [
    {
      name: 'id',
      label: 'S.No',
    },
    {
      name: 'profilePicture',
      label: 'Profile',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => <img src={value} alt="pic" className="w-12 rounded-full p-3 bg-slate-300" />,
      },
      filter: false,
    },
    {
      name: 'name',
      label: 'Name',
      options: {
        customBodyRender: (value) => value,
      },
    },
    {
      name: 'destination',
      label: 'Destination',
    },
    {
      name: 'country',
      label: 'Country',
    },
    {
      name: 'hireDate',
      label: 'Hire Date',
      options: {
        customBodyRender: (value) => new Date(value).toLocaleDateString(),
      },
    },
    {
      name: 'reportsTo',
      label: 'Reports To',
    },
    {
      name: 'employeeId',
      label: 'Employee ID',
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
              borderBottom: '1px solid white',
            },
          },
        },
      },
    });
  };

  const data = employees.map((employee, index) => ({
    ...employee,
    id: index + 1,
    profilePicture: <img src={employee.profile.pic} alt="pic" className="w-12 rounded-full p-3 bg-slate-300" />,
  }));

  return (
    <section className={styles.dashboardSection}>
      <Header category="app" title="Employees" />
      <div className="max-w-full overflow-x-auto dark:bg-white bg-dark rounded-md h-[100vh]">
        <div className="max-w-4xl rounded-lg p-4 bg-text-secondary">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable title={'Employees List'} data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};

export default Employees;
