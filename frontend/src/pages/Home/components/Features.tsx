import styles from './Features.module.css';
import shortStyles from '../../../components/index';
import { features, featuresCard } from '../../../constants';
import Button from '../../../components/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { LeftArrow, RightArrow } from '../../../constants/icons';

type CardProps = {
  title: string;
  text: string;
  Icon: React.ComponentType;
  buttonText: string;
};

const Features = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section className="mx-4 min-h-[100vh] px-8">
      <h2 className="text-center text-4xl text-skyBlue mb-4">{features.title}</h2>
      <p className="text-center text-lightSkyBlue">{features.paragraph}</p>
      <Slider {...settings} className="slider-container flex justify-center items-center p-10 ">
        {featuresCard.map((card, index) => (
          <Card key={index} title={card.title} text={card.text} buttonText={card.buttonText} Icon={card.Icon} />
        ))}
      </Slider>
    </section>
  );
};

const Card = ({ title, text, Icon, buttonText }: CardProps) => {
  const handleSubmit = () => {};
  return (
    <div
      className={`flex flex-col text-center w-[400px] text-secondary  ${styles.card} rounded-xl  h-[400px] justify-between px-5 py-6 hover:scale-95 ${shortStyles.transition}`}
    >
      <Icon className="text-6xl mx-auto text-secondary" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{text}</p>
      <Button
        onClick={handleSubmit}
        classes={`text-white bg-primary w-5/12 py-3.5 rounded-lg mb-10 mx-auto font-bold ${shortStyles.transition} hover:bg-blue-700`}
        text={buttonText}
      />
    </div>
  );
};

const CustomNextArrow = (props: any) => (
  <div onClick={props.onClick}>
    <RightArrow
      className={`text-3xl bg-skyBlue hover:cursor-pointer text-secondary rounded-2xl absolute z-10 right-[-20px] hover:scale-110 ${shortStyles.transition}`}
    />
  </div>
);

const CustomPrevArrow = (props: any) => (
  <div onClick={props.onClick}>
    <LeftArrow
      className={`text-3xl bg-skyBlue hover:cursor-pointer text-secondary rounded-2xl absolute z-10 left-[-20px] hover:scale-110 ${shortStyles.transition}`}
    />
  </div>
);

export default Features;
