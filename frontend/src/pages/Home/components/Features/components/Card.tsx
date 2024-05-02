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

export default Card;
