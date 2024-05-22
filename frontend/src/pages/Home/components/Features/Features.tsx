import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { features, featuresCard } from '../../../../constants';
import Button from '../../../../components/Button';
import { LeftArrow, RightArrow } from '../../../../utils/icons';

const Features = () => {
  const navigator = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className="bg-gray-200 h-[100vh] py-20">
      <h2 className="text-center text-md xs:text-xl  sm:text-3xl font-extrabold text-gray-700 mb-10">{features.title}</h2>
      <Slider {...settings} className="flex items-center justify-center h-[50vh] mx-20">
        {featuresCard.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Slider>
    </section>
  );
};

type CardProps = {
  title: string;
  text: string;
  Icon: React.ComponentType;
  buttonText: string;
};

const Card = ({ title, text, Icon, buttonText }: CardProps) => {
  const navigator = useNavigate();

  const handleSubmit = () => {
    navigator('/auth');
  };
  return (
    <div id="features" className="bg-extraDark  mx-auto gap-4 rounded-xl py-6 flex flex-col justify-between  transition-all duration-500">
      <Icon className="h-[20px] w-[20px] sm:h-10 sm:w-10  mx-auto text-gray-100" />
      <h3 className=" text-md sm:text-lg font-semibold text-gray-200 mb-2 text-center ">{title}</h3>
      <p className="hidden xs:block text-center text-gray-300 w-[80%] mx-auto leading-6 text-sm">{text}</p>
      <Button
        onClick={handleSubmit}
        classes="text-dark hover:text-primary hover:bg-transparent border-primary border-[2px] text-[12px] hover:primary-light mx-auto px-4 font-semibold py-3 rounded-md hover:bg-primary hover:text-dark transition-all duration-500 mt-6 mb-2 bg-primary"
        text="Start now"
      />
    </div>
  );
};

const CustomNextArrow = (props: any) => (
  <div
    onClick={props.onClick}
    className="absolute right-[-40px] bg-dark hover:bg-primary text-gray-200 transition-all duration-500 hover:text-dark rounded-full p-[2px] cursor-pointer"
  >
    <RightArrow className="w-6 h-6  z-10" />
  </div>
);

const CustomPrevArrow = (props: any) => (
  <div
    onClick={props.onClick}
    className=" absolute left-[-40px] bg-dark rounded-full p-[2px] cursor-pointer hover:bg-primary text-gray-200  transition-all duration-500 hover:text-dark"
  >
    <LeftArrow className="w-6 h-6 z-10" />
  </div>
);

export default Features;
