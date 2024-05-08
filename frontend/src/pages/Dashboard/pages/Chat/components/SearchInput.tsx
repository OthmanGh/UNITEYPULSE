import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useGetConversations from '../../../../../hooks/useGetConversations';
import useConversation from '../../../../../store/useConversations';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    const conversation = conversations.find((c) => c.name.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      console.log('no such user found');
    }
  };

  return (
    <form className="flex items-start justify-between gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-ml bg-secondary bg-opacity-50 placeholder:text-gray-300 text-white w-[100%] focus:bg-secondary border-none outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className="btn btn-rectangle bg-secondary bg-opacity-55 border-none text-gray-300 text-lg hover:bg-secondary h-[40px]">
        <IoSearchSharp />
      </button>
    </form>
  );
};

export default SearchInput;
