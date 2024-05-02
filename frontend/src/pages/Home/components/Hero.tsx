import shortStyles from '../../../components/index';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigator = useNavigate();

  const handleSubmit = () => {
    navigator('/auth');
  };

  return (
    <section id="home" className="flex items-center justify-center gap-10 flex-col xs:w-full pt-10 bg-dark h-[100vh] relative">
      <div className="h-5/6 flex flex-col gap-4 text-center">
        <p className={`text-white`}>
          Unlock Your Business Potential with <span className="text-primary">UNITY PULSE</span>
        </p>
        <img
          className="sm:rounded-xl"
          src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFydGh8ZW58MHx8MHx8fDA%3D"
          alt="earth"
        />
      </div>
      <Button
        onClick={handleSubmit}
        classes={`bg-primary w-[150px] mx-auto py-2  rounded-lg text-white text-semibold hover:bg-secondary ${shortStyles.transition} sm:mx-0 sm:w-[200px] sm:py-4 sm:font-bold`}
        text="Get Started"
      />
    </section>
  );
};

export default Hero;
