import Overlay from '../../../components/Overlay';
import styles from './Aboutus.module.css';
import { aboutusText } from '../../../constants';

const Aboutus = () => {
  return (
    <section className={`${styles.aboutus__section} h-[60vh] mb-1000px relative`}>
      <div className=" h-full  text-center text-white flex justify-center items-center max-w-[80%] m-auto">
        <p className="z-20 text-sm leading-6 font-semibold ss:text-md sm:text-lg md:text-xl md:leading-8">{aboutusText}</p>
      </div>
      <Overlay />
    </section>
  );
};

export default Aboutus;
