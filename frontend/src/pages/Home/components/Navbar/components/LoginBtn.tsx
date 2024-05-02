const LoginBtn = ({ handleToggle }: { handleToggle: () => void }) => (
  <button
    className={`hidden sm:flex border-[1px] border-transparent px-4 py-2 rounded-xl hover:text-primary hover:border-primary hover:scale-90 transition-all duration-500
    sm:text-xl md:text-2xl
    `}
    onClick={handleToggle}
  >
    Login
  </button>
);

export default LoginBtn;
