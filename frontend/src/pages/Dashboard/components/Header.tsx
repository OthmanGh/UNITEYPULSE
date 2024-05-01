import React from 'react';

type HeaderProps = {
  title: string;
  category: string;
};

const Header = ({ title, category }: HeaderProps) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="font-extrabold text-secondary text-3xl mt-2">{title}</p>
    </div>
  );
};

export default Header;
