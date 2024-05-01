import { GoDotFill } from 'react-icons/go';
import Button from '../components/Button';
import { SparklineAreaData, earningData, ecomPieChartData, stackedChartData } from '../../../constants';
import SparkLine from '../components/Charts/SparkLine';
import Stacked from '../components/Charts/Stacked';

const General = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-earning-img bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-black-400">Earnings</p>
              <p className="text-2xl text-secondary font-semibold">$83,634.29</p>
            </div>
          </div>

          <div className="mt-6">
            <Button color="white" bgColor="blue" text="Download" borderRadius="10px" size="md" />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-10 items-center">
          {earningData.map((item) => (
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-52 p-4 pt-9 rounded-2xl" key={item.title}>
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>

              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor ? 'green-500' : 'red-500'} ml-2`}> {item.percentage}</span>
              </p>

              <p className="text-sm text-gray-400 font-semibold mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap ">
        <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg m-6 p-4 rounded-2xl w-full bg-main-bg">
          <div className="flex  justify-between items-center md:w-[780px] mx-auto">
            <p className="font-semibold text-sm xs:text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span className="text-sm xs:text-xl">Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span className="text-sm xs:text-xl">Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex  gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-lg sm:text-3xl font-semibold">$33,593</span>
                  <span className="p-0.5 sm:p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">19%</span>
                </p>

                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-lg sm:text-3xl font-semibold">$105,593</span>
                </p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5 hidden sm:block">
                <SparkLine id="line-sparkline" height="180px" width="250px" data={SparklineAreaData} colors={['blue', 'blue']} />
              </div>

              <div className="sm:mt-10 hidden sm:block">
                <Button color="white" bgColor="blue" text="Download Report" borderRadius="10px" />
              </div>
            </div>

            <div className="mt-10">
              <Stacked width="320px" height="4000px" data={stackedChartData} id="bar-stacked" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
