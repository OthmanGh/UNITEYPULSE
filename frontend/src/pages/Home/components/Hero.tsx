import { useState } from 'react';
import styles from './Hero.module.css';
import shortStyles from '../../../components/index';
import Button from '../../../components/Button';

const Hero = () => {
  const handleSubmit = () => {};

  return (
    <section id="home" className={`flex sm:flex-row flex-col sm:py-16 sm:px-4 py-10 gap-10 sm:mx-auto md:gap-48 xl:gap-64`}>
      <div className={`sm:text-start flex flex-col gap-6 text-center p-6 text-lg sm:justify-center sm:gap-20 sm:py-10`}>
        <h1
          className={`text-white font-semibold leading-8 sm:leading-10 text-lg ss:text-xl sm:text-2xl sm:max-w-[280px] md:text-3xl md:max-w-[350px] md:leading-10`}
        >
          Unlock Your Business Potential with <br className="sm:block hidden" /> {''} <span className="text-primary">UNITY PULSE</span> Elevate Performance,
          Drive Success
        </h1>

        <Button
          onClick={handleSubmit}
          classes={`bg-primary w-[150px] mx-auto py-2  rounded-lg text-white text-semibold hover:bg-secondary ${shortStyles.transition} sm:mx-0 sm:w-[200px] sm:py-4 sm:font-bold`}
          text="Get Started"
        />
      </div>
      <img
        className="sm:rounded-xl"
        src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFydGh8ZW58MHx8MHx8fDA%3D"
        alt="earth"
      />
    </section>
  );
};

export default Hero;
