import { GoDotFill } from 'react-icons/go';
import { SparklineAreaData, stackedChartData } from '../../../constants';
import SparkLine from '../components/Charts/SparkLine';
import Stacked from '../components/Charts/Stacked';
import styles from '../../../components';
import formatEarnings from '../../../utils/companyData';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';
import { FiBarChart } from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { useCompany } from '../../../contexts/CompanyContext';

const General = () => {
  const { company } = useCompany();

  console.log(company);

  const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: company?.customers,
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: false,
    },
    {
      icon: <BsBoxSeam />,
      amount: company?.products,
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: true,
    },
    {
      icon: <FiBarChart />,
      amount: company?.sales,
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',

      pcColor: true,
    },
    {
      icon: <HiOutlineRefresh />,
      amount: company?.refunds,
      percentage: '-12%',
      title: 'Refunds',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: false,
    },
  ];

  return (
    <section className={styles.dashboardSection}>
      <div className="grid gap-4 px-4 mt-10 sm:mt-4">
        <div className="rounded-xl p-10 text-dark  dark:text-gray-200 dark:bg-secondary-dark-bg   bg-earning-img bg-no-repeat bg-cover">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-black-400 text-xl mb-4">Earnings</p>
              <p className="text-4xl text-gray-50 font-semibold">{formatEarnings(company?.incomes, company?.expenses, company?.currency)}</p>
            </div>
          </div>
        </div>

        <div className="grid xs:grid-cols-2 gap-4 sm:grid-cols-4 mt-5">
          {earningData.map((item) => (
            <div className=" bg-slate-50 w-full dark:text-gray-200 dark:bg-secondary-dark-bg  p-4 pt-9 rounded-2xl text-center sm:text-start" key={item.title}>
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>

              <p className="mt-3">
                <span className="text-lg font-semibold text-dark">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor ? 'green-500' : 'red-500'} ml-2`}> {item.percentage}</span>
              </p>

              <p className="text-sm text-gray-500 font-semibold mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap mt-5">
        <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg m-6 p-4 rounded-2xl w-full bg-slate-50">
          <div className="flex  justify-between items-center md:w-[780px] mx-auto">
            <p className="font-semibold text-sm xs:text-xl text-gray-500">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1 text-red-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span className="text-sm xs:text-xl text-red-500">Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-500 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span className="text-sm xs:text-xl">Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-10 flex-wrap justify-center ">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-lg sm:text-3xl font-semibold text-dark">{company?.budget}</span>
                  <span className="p-0.5 sm:p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">19%</span>
                </p>

                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-lg sm:text-3xl font-semibold text-dark">{company?.expenses}</span>
                </p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5 hidden sm:block">
                <SparkLine id="line-sparkline" height="400px" width="100px" data={SparklineAreaData} colors={['blue', 'blue']} />
              </div>
            </div>

            <div className="mt-10">
              <Stacked width="320px" height="4000px" data={stackedChartData} id="bar-stacked" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default General;
