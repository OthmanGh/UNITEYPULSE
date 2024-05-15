import Overlay from '../../../components/Overlay';
import styles from './Aboutus.module.css';
import { aboutusText } from '../../../constants';

import Video from '../../../assets/about_video.mp4';

const Aboutus = () => {
  return (
    <section id="aboutus" className={`${styles.aboutus__section} h-[70vh] mb-1000px relative`}>
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 min-w-full h-[70vh] object-cover">
        <source src={Video} type="video/mp4" />
      </video>

      <div className=" h-full text-center text-white flex flex-col justify-center items-center max-w-[80%] m-auto">
        <h2 className="text-center text-gray-200 text-lg mb-10 xs:text-xl sm:text-2xl md:text-3xl font-bold z-20">{aboutusText.title}</h2>

        <p className="text-gray-100 z-10">{aboutusText.text}</p>
      </div>
    </section>
  );
};

export default Aboutus;
