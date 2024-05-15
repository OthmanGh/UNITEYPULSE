import shortStyles from '../../../components/index';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import Video from './../../../assets/video.mp4';
import LogoTitle from './Navbar/components/LogoTitle';
import Overlay from '../../../components/Overlay';

const Hero = () => {
  const navigator = useNavigate();

  const handleSubmit = () => {
    navigator('/auth');
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center gap-10 flex-col xs:w-full pt-10 bg-extraDark bg-opacity-70 h-[100vh] overflow-hidden"
    >
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 min-w-full min-h-full object-cover z-1">
        <source src={Video} type="video/mp4" />
      </video>

      <div className="h-5/6 flex flex-col items-center justify-center  text-center relative z-10 mt-[-15vh] gap-10">
        <LogoTitle />

        <Button
          onClick={handleSubmit}
          classes={`text-lg text-primary-light font-semibold border-[2px]
          rounded-lg border-primary-light text-lg px-4 py-2  xs:px-6 xs:py-3 sm:px-14 sm:py-4 hover:text-primary hover:border-primary ${shortStyles.transition}`}
          text="Explore"
        />
      </div>
    </section>
  );
};

export default Hero;
