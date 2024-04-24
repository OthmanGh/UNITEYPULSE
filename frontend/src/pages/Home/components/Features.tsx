import React from 'react';
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
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="mx-4 min-h-[100vh] px-8">
      <h2 className="text-center text-white text-lg mb-10 xs:text-xl sm:text-2xl md:text-3xl font-bold">{features.title}</h2>
      <p className="text-center text-lightSkyBlue text-xs leading-5 xs:text-base xs:leading-7 ss:text-lg ss:leading-9 sm:leading-1.2 ss:mb-10 md:leading-1.1 md:max-w-[1000px] md:mx-auto">
        {features.paragraph}
      </p>
      <Slider {...settings} className="slider-container flex justify-between items-center p-10">
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
      className={`flex flex-col text-center gap-2 mx-auto xs:w-[95%] text-secondary ${styles.card} rounded-xl h-[400px] justify-between px-5 py-6 hover:scale-95 ${shortStyles.transition}`}
    >
      <Icon className="mx-auto text-4xl xs:text-5xl sm:text-5xl md:text-6xl text-secondary" />
      <h3 className="text-md  xs:text-lg sm:text-xl md:text-2xl font-bold">{title}</h3>
      <p className="text-[0.6rem] max-w-[80%] mx-auto font-semibold xs:text-[12px] sm:text-[14px]">{text}</p>
      <Button
        onClick={handleSubmit}
        classes={`text-white bg-primary w-[100px] text-[11px] xs:w-[150px] text-[18px] sm:text-lg sm:w-[170px] py-3 rounded-lg mb-10 mx-auto font-bold ${shortStyles.transition} hover:bg-blue-700 text-xs xs:text-md md:w-[200px]  md:text-xl`}
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
