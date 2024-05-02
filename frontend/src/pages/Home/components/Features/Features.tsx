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
    <section className="bg-gray-100 h-[100vh] py-20">
      <h2 className="text-center text-3xl font-extrabold text-half-transparent mb-10">{features.title}</h2>
      <Slider {...settings} className="mx-auto max-w-screen-xl p-4">
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
    <div className="bg-white p-6 rounded-lg shadow-md font-poppins max-w-[400px] mx-auto">
      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center mb-4 text-[16px]">{text}</p>
      <Button onClick={handleSubmit} classes="bg-primary text-white mx-auto block px-2 py-3 rounded-sm" text={buttonText} />
    </div>
  );
};

const CustomNextArrow = (props: any) => (
  <div onClick={props.onClick} className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-dark rounded-full p-[4px]">
    <RightArrow className="w-6 h-6 text-primary z-10" />
  </div>
);

const CustomPrevArrow = (props: any) => (
  <div onClick={props.onClick} className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-dark rounded-full p-[4px]">
    <LeftArrow className="w-6 h-6 text-primary z-10" />
  </div>
);

export default Features;
