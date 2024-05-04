import { IoSearchSharp } from 'react-icons/io5';

const SearchInput = () => {
  return (
    <form className="flex items-start justify-between gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-ml bg-secondary bg-opacity-50 placeholder:text-gray-300 text-white w-[100%] focus:bg-secondary"
      />

      <button type="submit" className="btn btn-rectangle bg-secondary bg-opacity-55 border-none text-white text-lg hover:bg-secondary h-[40px]">
        <IoSearchSharp />
      </button>
    </form>
  );
};

export default SearchInput;
