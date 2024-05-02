type textProps = {
  title: string;
  para: string;
};

const Text = ({ title, para }: textProps) => {
  return (
    <>
      <h2 className="text-lg sm:text-3xl font-semibold z-10 hover:text-primary transition-all duration-300">{title}</h2>
      <p className="sm:text-xl max-w-[80%] px-2 z-10 text-gray-300 hover:text-primary transition-all duration-300 ">{para}</p>
    </>
  );
};

export default Text;
