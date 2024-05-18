import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { MdOutlineDeleteSweep as DeleteIcon } from 'react-icons/md';
import { BiSolidEditAlt as EditIcon } from 'react-icons/bi';
import { AddIcon, CloseIcon } from '../../../utils/icons';
import useGetEmployees from '../../../hooks/useGetEmployees';
import useCreateEmployee from '../../../hooks/useCreateEmployees';
import useUpdateEmployee from '../../../hooks/useUpdateEmployee';
import useDeleteEmployee from '../../../hooks/useDeleteEmployee';
import ConfirmDeletePopup from '../../../components/ConfirmDeletePopup';

interface EmployeeData {
  employeeId: string;
  name: string;
  destination: string;
  country: string;
  hireDate: string;
  profilePicture: string;
}

const data: string[] = ['employeeId', 'name', 'destination', 'country', 'hireDate', 'profilePicture'];

const Employees: React.FC = () => {
  const { employees: initialEmployees, loading } = useGetEmployees();
  const [showAddEditPopup, setShowAddEditPopup] = useState<boolean>(false);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState<string | null>(null);
  const { createEmployee, loading: createLoading, error: createError } = useCreateEmployee();
  const [employees, setEmployees] = useState<EmployeeData[]>(initialEmployees);
  const { deleteEmployee } = useDeleteEmployee();
  const { updateEmployee } = useUpdateEmployee();
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    employeeId: '',
    name: '',
    destination: '',
    country: '',
    hireDate: '',
    profilePicture: '',
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingEmployeeId, setEditingEmployeeId] = useState<string | null>(null);

  useEffect(() => {
    if (!loading) {
      setEmployees(initialEmployees);
    }
  }, [initialEmployees, loading]);

  const handleDelete = (employeeId: string) => {
    setDeleteEmployeeId(employeeId);
    setShowDeletePopup(true);
  };

  const confirmDelete = async () => {
    if (deleteEmployeeId) {
      try {
        await deleteEmployee(deleteEmployeeId);
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.employeeId !== deleteEmployeeId));
      } catch (error) {
        console.error('Failed to delete employee', error);
      }
      setDeleteEmployeeId(null);
    }
    setShowDeletePopup(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditing && editingEmployeeId) {
      try {
        await updateEmployee(editingEmployeeId, employeeData);
        setEmployees((prevEmployees) =>
          prevEmployees.map((employee) => (employee.employeeId === editingEmployeeId ? { ...employeeData, employeeId: editingEmployeeId } : employee))
        );
      } catch (error) {
        console.error('Failed to update employee', error);
      }
    } else {
      try {
        const newEmployee = await createEmployee(employeeData);
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
      } catch (error) {
        console.error('Failed to create employee', error);
      }
    }

    resetEmployeeData();
  };

  const handleEdit = (employee: EmployeeData) => {
    setEmployeeData(employee);
    setIsEditing(true);
    setEditingEmployeeId(employee.employeeId);
    setShowAddEditPopup(true);
  };

  const resetEmployeeData = () => {
    setEmployeeData({
      employeeId: '',
      name: '',
      destination: '',
      country: '',
      hireDate: '',
      profilePicture: '',
    });
    setShowAddEditPopup(false);
    setIsEditing(false);
    setEditingEmployeeId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const filteredEmployees = employees.map((employee, index) => {
    const filteredData: any = {};
    for (const key of data) {
      if (employee.hasOwnProperty(key)) {
        filteredData[key] = employee[key];
      }
    }

    return (
      <tr
        key={index}
        className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'} hover:bg-secondary hover:bg-opacity-20 transition-all duration-500 text-dark w-full`}
      >
        <td className="px-4 text-[15px] py-2">{filteredData.employeeId}</td>
        <td className="px-4 text-[15px] py-2">{filteredData.name}</td>
        <td className="px-4 text-[15px] py-2">{filteredData.destination}</td>
        <td className="px-4 text-[15px] py-2">{filteredData.country}</td>
        <td className="px-4 text-[15px] py-2">{new Date(filteredData.hireDate).toLocaleDateString()}</td>
        <td className="px-4 text-[15px] py-2">
          <img src={filteredData.profilePicture} alt="pic" className="w-12 rounded-full mx-auto" />
        </td>
        <td className="px-4 text-[15px] py-2">
          <button className="py-2 px-4" onClick={() => handleEdit(employee)}>
            <EditIcon className="text-dark text-2xl hover:text-blue-500 transition-all duration-500" />
          </button>
        </td>
        <td className="px-4 py-2">
          <button className="text-dark hover:text-red-500 transition-all duration-500 py-2 px-4 rounded" onClick={() => handleDelete(filteredData.employeeId)}>
            <DeleteIcon className="text-2xl" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <section className="py-8 px-4">
      <div className="flex flex-col xs:flex-row items-center justify-between">
        <Header category="app" title="Employees" />
        <button
          className="flex items-center gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400"
          onClick={() => setShowAddEditPopup(true)}
        >
          <AddIcon className="text-xl" />
          Add Employee
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="text-center bg-secondary">
              {['Employee ID', 'Name', 'Destination', 'Country', 'Hire Date', 'Profile Picture', 'Edit', 'Delete'].map((header, index) => (
                <th key={index} className="text-gray-50 capitalize border-r-2 border-black px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{filteredEmployees}</tbody>
        </table>
      </div>

      {showAddEditPopup && (
        <AddEmployeePopup
          setShowPopup={setShowAddEditPopup}
          setEmployeeData={setEmployeeData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          employeeData={employeeData}
          isEditing={isEditing}
        />
      )}

      {showDeletePopup && <ConfirmDeletePopup onDeleteConfirm={confirmDelete} onCancel={() => setShowDeletePopup(false)} />}
    </section>
  );
};

export default Employees;

interface AddEmployeePopupProps {
  setShowPopup: (show: boolean) => void;
  setEmployeeData: (data: any) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  employeeData: EmployeeData;
  isEditing: boolean;
}

const AddEmployeePopup: React.FC<AddEmployeePopupProps> = ({ setShowPopup, setEmployeeData, handleSubmit, handleInputChange, employeeData, isEditing }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-8 rounded-lg relative">
        <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Employee' : 'Add Employee'}</h2>
        <button className="absolute top-6 right-6 text-xl text-secondary hover:text-dark transition-all duration-500" onClick={() => setShowPopup(false)}>
          <CloseIcon />
        </button>
        <form className="grid grid-cols-1 items-center justify-center xs:grid-cols-2 gap-10 sm:grid-cols-3" onSubmit={handleSubmit}>
          <InputField
            type="text"
            id="employeeId"
            name="employeeId"
            label="Employee ID"
            value={employeeData.employeeId}
            onChange={handleInputChange}
            disabled={isEditing}
          />
          <InputField type="text" id="name" name="name" label="Name" value={employeeData.name} onChange={handleInputChange} />
          <InputField type="text" id="destination" name="destination" label="Destination" value={employeeData.destination} onChange={handleInputChange} />
          <InputField type="text" id="country" name="country" label="Country" value={employeeData.country} onChange={handleInputChange} />
          <InputField type="date" id="hireDate" name="hireDate" label="Hire Date" value={employeeData.hireDate} onChange={handleInputChange} />
          <InputField
            type="text"
            id="profilePicture"
            name="profilePicture"
            label="Profile Picture URL"
            value={employeeData.profilePicture}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="xs:col-span-2 sm:col-span-3 bg-secondary text-gray-100 py-2 px-4 rounded mt-4 hover:bg-dark transition-all duration-400"
          >
            {isEditing ? 'Update Employee' : 'Add Employee'}
          </button>
        </form>
      </div>
    </div>
  );
};

interface InputFieldProps {
  type: string;
  placeholder?: string;
  name: string;
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, name, value, onChange, label, id, disabled = false }) => {
  return (
    <fieldset className="flex flex-col justify-center items-start">
      <label htmlFor={id} className="mb-2 text-[15px] text-slate-500">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`rounded-md px-4 py-4 h-15 text-secondary outline-none ${disabled ? 'bg-gray-500 text-slate-800 cursor-not-allowed' : 'bg-slate-100'}`}
        disabled={disabled}
      />
    </fieldset>
  );
};
