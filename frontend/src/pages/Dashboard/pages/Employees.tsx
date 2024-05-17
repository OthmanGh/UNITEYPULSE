/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useGetEmployees from '../../../hooks/useGetEmployees';
import useCreateEmployee from '../../../hooks/useCreateEmployees';
import useUpdateEmployee from '../../../hooks/useUpdateEmployee';
import useDeleteEmployee from '../../../hooks/useDeleteEmployee';
import styles from '../../../components';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const Employees = () => {
  const { employees, loading: employeesLoading } = useGetEmployees();
  const { createEmployee, loading: createEmployeeLoading, error: createEmployeeError } = useCreateEmployee();
  const { deleteEmployee, loading: deleteEmployeeLoading, error: deleteEmployeeError } = useDeleteEmployee();
  const { updateEmployee, loading: updateEmployeeLoading, error: updateEmployeeError } = useUpdateEmployee();

  const [employeeData, setEmployeeData] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ employeeId: '', name: '', destination: '', country: '', hireDate: '', profilePicture: '' });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setEmployeeData(employees);
  }, [employees]);

  const handleOpen = () => {
    setForm({ employeeId: '', name: '', destination: '', country: '', hireDate: '', profilePicture: '' });
    setIsEdit(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = (employee) => {
    setForm(employee);
    setIsEdit(true);
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async () => {
    if (isEdit) {
      try {
        await updateEmployee(form.employeeId, form);
        setEmployeeData((prevData) => prevData.map((emp) => (emp.employeeId === form.employeeId ? form : emp)));
        setOpen(false);
      } catch (error) {
        console.error('Error updating employee:', error.message);
      }
    } else {
      try {
        const newEmployee = await createEmployee(form);
        setEmployeeData((prevData) => [...prevData, { ...newEmployee }]);
        setOpen(false);
      } catch (error) {
        console.error('Error creating employee:', error.message);
      }
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      await deleteEmployee(employeeId);
      setEmployeeData((prevData) => prevData.filter((emp) => emp.employeeId !== employeeId));
    } catch (error) {
      console.error('Error deleting employee:', error.message);
    }
  };

  const columns = [
    { name: 'employeeId', label: 'Employee ID' },
    {
      name: 'profilePicture',
      label: 'Profile',
      options: { customBodyRender: (value) => <img src={value} alt="pic" className="w-12 rounded-full" /> },
      filter: false,
    },
    { name: 'name', label: 'Name' },
    { name: 'destination', label: 'Destination' },
    { name: 'country', label: 'Country' },
    {
      name: 'hireDate',
      label: 'Hire Date',
      options: { customBodyRender: (value) => new Date(value).toLocaleDateString() },
    },
    {
      name: 'actions',
      label: 'Actions',
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="flex justify-center space-x-2">
            <Button onClick={() => handleEditOpen(employeeData[tableMeta.rowIndex])} variant="contained" color="secondary">
              Edit
            </Button>
            <Button onClick={() => handleDelete(employeeData[tableMeta.rowIndex].employeeId)} variant="contained" color="error">
              Delete
            </Button>
          </div>
        ),
        filter: false,
        sort: false,
      },
    },
  ];

  const options = {
    selectableRows: 'none',
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: 'standard',
    tableBodyMaxHeight: 'calc(100vh - 320px)',
    textLabels: {
      body: {
        noMatch: employeesLoading ? 'Loading...' : 'No records found',
      },
    },
  };

  const getMuiTheme = () =>
    createTheme({
      typography: { fontFamily: 'Poppins' },
      palette: {
        background: { paper: '#0f4659', default: '#1a1c20' },
        text: { primary: '#F7F7F7' },
        mode: 'dark',
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: { textAlign: 'center' },
            body: { color: '#e2e8f0', textAlign: 'center' },
          },
        },

        MuiTableHead: {
          styleOverrides: {
            root: {
              backgroundColor: '#1a1c20',
            },
          },
        },

        MuiButton: {
          styleOverrides: {
            root: {
              color: '#fff',
              '&:hover': {
                backgroundColor: '#333',
              },
            },
          },
        },

        MuiTableBody: {
          styleOverrides: {
            root: {
              '& .MuiTableRow-root:not(:last-child)': {
                borderBottom: '2px solid #ffffff',
              },
            },
          },
        },
      },
    });

  const data = employeeData.map((employee, index) => ({
    ...employee,
    profilePicture: <img src={employee?.profile?.picture} alt="pic" className="w-12 rounded-full p-3 bg-slate-300" />,
    hireDate: new Date(employee?.hireDate).toLocaleDateString(),
  }));

  return (
    <section className={styles.dashboardSection}>
      <Header category="app" title="Employees" />
      <div className="max-w-full overflow-x-auto rounded-md bg-slate-100 p-4">
        <div className="mb-4 flex justify-end">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Employee
          </Button>
        </div>

        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable title={'Employees List'} data={data} columns={columns} options={options} />
        </ThemeProvider>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEdit ? 'Edit Employee' : 'Add Employee'}</DialogTitle>

        <DialogContent>
          <TextField margin="dense" name="name" label="Name" value={form.name} onChange={handleChange} fullWidth />
          <TextField margin="dense" name="destination" label="Destination" value={form.destination} onChange={handleChange} fullWidth />
          <TextField margin="dense" name="country" label="Country" value={form.country} onChange={handleChange} fullWidth />
          <TextField margin="dense" name="hireDate" label="Hire Date" value={form.hireDate} onChange={handleChange} fullWidth />
          <TextField margin="dense" name="profilePicture" label="Profile Picture URL" value={form.profilePicture} onChange={handleChange} fullWidth />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>{isEdit ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Employees;
