import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useGetEmployees from '../../../hooks/useGetEmployees';
import styles from '../../../components';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const Employees = () => {
  const { employees, loading } = useGetEmployees();
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

  const handleSubmit = () => {
    if (isEdit) {
      setEmployeeData((prevData) => prevData.map((emp) => (emp.employeeId === form.employeeId ? form : emp)));
    } else {
      setEmployeeData((prevData) => [...prevData, { ...form, employeeId: employeeData.length + 1 }]);
    }
    setOpen(false);
  };

  const handleDelete = (employeeId) => {
    setEmployeeData((prevData) => prevData.filter((emp) => emp.employeeId !== employeeId));
  };

  const columns = [
    { name: 'employeeId', label: 'Employee ID' },
    {
      name: 'profilePicture',
      label: 'Profile',
      options: { customBodyRender: (value) => <img src={value} alt="pic" className="w-12 rounded-full p-3 bg-slate-300" /> },
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
          <div>
            <Button onClick={() => handleEditOpen(employeeData[tableMeta.rowIndex])}>Edit</Button>
            <Button onClick={() => handleDelete(employeeData[tableMeta.rowIndex].employeeId)}>Delete</Button>
          </div>
        ),
        filter: false,
        sort: false,
      },
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

        MUIDataTable: {
          root: {
            '& .MuiTableBody-root .MuiTableRow-root:not(:last-child)': { borderBottom: '1px solid white' },
          },
        },
      },
    });

  const data = employeeData.map((employee, index) => ({
    ...employee,
    profilePicture: <img src={employee?.profilePicture} alt="pic" className="w-12 rounded-full p-3 bg-slate-300" />,
    hireDate: new Date(employee?.hireDate).toLocaleDateString(),
  }));

  return (
    <section className={styles.dashboardSection}>
      <Header category="app" title="Employees" />

      <div className="max-w-full overflow-x-auto dark:bg-white rounded-md">
        <div className="max-w-full rounded-lg p-4 bg-text-secondary">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Employee
          </Button>
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable title={'Employees List'} data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
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
