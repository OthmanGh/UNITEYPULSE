import { useAuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import { useCompany } from '../../../contexts/CompanyContext';
import { useEffect } from 'react';

const Greet = () => {
  const { authUser } = useAuthContext();
  const { setCompany } = useCompany();
  console.log(authUser);

  useEffect(() => {
    const getCompanyInfos = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/company/${authUser._id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authUser.token}`,
          },
        });
        setCompany(response.data.data.company);
      } catch (error) {
        console.log(error);
      }
    };

    getCompanyInfos();
  }, []);

  return (
    <div className="flex items-center justify-center mt-20 w-[60%] mx-auto text-center">
      <h2 className="text-3xl text-gray-400">
        <span className="text-secondary font-bold">{authUser?.name}</span>, Welcome to Your Essential Business Toolkit for Growth and Success
      </h2>
    </div>
  );
};

export default Greet;
