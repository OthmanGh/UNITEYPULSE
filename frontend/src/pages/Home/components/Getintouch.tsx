import React from 'react';
import { getInTouch } from '../../../constants';

const Getintouch = () => {
  return (
    <section className={`min-h-[100vh]`}>
      <h2 className="text-center text-white text-lg mb-10 xs:text-xl sm:text-2xl md:text-3xl font-bold z-20">{getInTouch.title}</h2>
      <div>
        <p>{getInTouch.textQ}</p>
        <p>{getInTouch.textT}</p>
      </div>
    </section>
  );
};

export default Getintouch;
