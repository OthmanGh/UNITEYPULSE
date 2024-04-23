import styles from './Features.module.css';
import shortStyles from '../../../components/index';
import { features, featuresCard } from '../../../constants';
import Button from '../../../components/Button';

type CardProps = {
  title: string;
  text: string;
  Icon: React.ComponentType;
  buttonText: string;
};

const Features = () => {
  return (
    <section className="mx-4 min-h-[100vh]">
      <h2 className="text-center text-4xl text-skyBlue mb-4">{features.title}</h2>

      <p className="text-center text-lightSkyBlue">{features.paragraph}</p>

      <div className="flex items-center justify-around">
        {featuresCard.map((card, index) => (
          <Card key={index} title={card.title} text={card.text} buttonText={card.buttonText} Icon={card.Icon} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, text, Icon, buttonText }: CardProps) => {
  const handleSubmit = () => {};
  return (
    <div
      className={`flex flex-col text-center w-[420px] text-secondary  ${styles.card} rounded-xl mt-10 h-[500px] justify-between px-5 py-12  ${shortStyles.hoverScale} ${shortStyles.transition}`}
    >
      <Icon className="text-6xl mx-auto text-secondary" />
      <h3 className="text-2xl  font-bold">{title}</h3>

      <p>{text}</p>
      <Button
        onClick={handleSubmit}
        classes={`text-white bg-primary w-5/12 py-3.5 rounded-lg mb-10 mx-auto font-bold ${shortStyles.transition} hover:bg-blue-700`}
        text={buttonText}
      />
    </div>
  );
};

export default Features;
