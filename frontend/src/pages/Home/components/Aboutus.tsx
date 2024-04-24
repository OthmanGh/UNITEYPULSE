import Overlay from '../../../components/Overlay';
import styles from './Aboutus.module.css';
import { aboutusText } from '../../../constants';

const Aboutus = () => {
  return (
    <section className={`${styles.aboutus__section} h-[70vh] mb-1000px relative`}>
      <div className=" h-full  text-center text-white flex flex-col justify-center items-center max-w-[80%] m-auto">
        <h2 className="text-center text-white text-lg mb-10 xs:text-xl sm:text-2xl md:text-3xl font-bold z-20">{aboutusText.title}</h2>

        <p className="z-20 text-sm leading-6 font-semibold ss:text-md sm:text-lg md:text-xl md:leading-8">{aboutusText.text}</p>
      </div>
      <Overlay />
    </section>
  );
};

export default Aboutus;
