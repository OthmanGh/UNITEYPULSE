const Header = ({ text }: { text: string }) => {
  return <h2 className="text-lg xs:text-2xl sm:text-3xl font-semibold text-gray-300">{text}</h2>;
};

export default Header;
