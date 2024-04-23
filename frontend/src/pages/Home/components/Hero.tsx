import styles from './Hero.module.css';
// import { heroTitle } from '../../../constants';
import shortStyles from '../../../components/index';
import Button from '../../../components/Button';

const Hero = () => {
  const handleSubmit = () => {};

  return (
    <section className={`${styles.hero__section} sm:justify-center sm:mx-auto sm:p-10 min-h-[100vh]`}>
      <div className="flex flex-col items-start justify-between gap-7 ">
        <h1 className={`text-white font-bold ${shortStyles.titleMobile} sm:max-w-[280px] sm:text-2xl sm:text-start sm:leading-tight sm:mt-6 md:text-3xl`}>
          Unlock Your Business Potential with <span className="text-primary ">UNITEY PULSE</span> Elevate Performance, Drive Success
        </h1>

        <Button
          onClick={handleSubmit}
          classes={`text-white bg-primary w-4/12 py-3 rounded-lg mb-10 mx-auto font-bold ${shortStyles.transition} hover:bg-blue-700 sm:w-6/12 md:w-4/12 sm:text-xl sm:mx-0`}
          text="Get Started"
        />
      </div>
      <img
        className="rounded-2xl"
        src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFydGh8ZW58MHx8MHx8fDA%3D"
        alt="earth"
      />
    </section>
  );
};

export default Hero;
