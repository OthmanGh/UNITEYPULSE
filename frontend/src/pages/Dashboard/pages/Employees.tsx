import Header from '../components/Header';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useGetEmployees from '../../../hooks/useGetEmployees';
import styles from '../../../components';

const Employees = () => {
  const { employees, loading } = useGetEmployees();

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
      name: 'employeeId',
      label: 'Employee ID',
    },
  ];

  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: 'vertical',
    separator: true,
    tableBodyMaxHeight: 'calc(100vh - 320px)',
  };

  const getMuiTheme = () => {
    return createTheme({
      typography: {
        fontFamily: 'Poppins',
      },

      palette: {
        background: {
          paper: '#0f4659',
          default: '#1a1c20',
        },
        text: {
          primary: '#F7F7F7',
        },
        mode: 'dark',
      },

      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              textAlign: 'center',
            },
            body: {
              color: '#e2e8f0',
              textAlign: 'center',
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
    id: index + 1,
    profilePicture: <img src={employee.profile.pic} alt="pic" className="w-12 rounded-full p-3 bg-slate-300" />,
    name: employee.profile.name,
    destination: employee.destination,
    country: employee.country,
    hireDate: new Date(employee.hireDate).toLocaleDateString(),
    employeeId: employee.employeeId,
  }));

  return (
    <section className={styles.dashboardSection}>
      <Header category="app" title="Employees" />
      <div className="max-w-full overflow-x-auto dark:bg-white rounded-md">
        <div className="max-w-full rounded-lg p-4 bg-text-secondary">
          {' '}
          {/* Change max-w-4xl to max-w-full */}
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable title={'Employees List'} data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};

export default Employees;
