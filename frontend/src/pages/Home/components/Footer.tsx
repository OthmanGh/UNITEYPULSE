import Logo from '../../../assets/logo_1.png';

const Footer = () => {
  return (
    <section className="bg-extraDark text-primary">
      <div className="p-4 sm:p-20 flex justify-between">
        <div className="hidden sm:flex flex-col items-start">
          <img src={Logo} className="w-[150px] h-[150px] self-start" alt="Company Logo" />
          <p className="text-primary">Empowering Business Excellence</p>
        </div>

        <div className="text-sm text-center mx-auto sm:mx-0 sm:text-lg sm:text-start p-10">
          <h2 className="mb-4">Contact Us</h2>
          <ul className="flex flex-col gap-4 text-gray-200 ">
            <li>Unity Paulse</li>
            <li>123 Main Street, City, Country</li>
            <li>Phone: +123456789</li>
            <li>Email: info@company.com</li>
          </ul>
        </div>
      </div>

      <p className="hidden sm:block text-center text-md mb-4">A Financial Time Company, dedicated to transforming businesses.</p>
      <p className="text-center text-[10px] w-[80%] mx-auto sm:text-sm text-gray-200 pb-4">
        UnityPaulse © 2024 | Privacy Policy | Terms of Service | Contact Us
      </p>
    </section>
  );
};

export default Footer;
