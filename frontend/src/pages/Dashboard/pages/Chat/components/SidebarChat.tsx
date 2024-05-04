import SearchInput from './SearchInput';
import Converstions from './Converstions';

const SidebarChat = () => {
  return (
    <aside className="backdrop-blur-lg flex flex-col gap-5 bg-transparent w-[30%]  sm:pr-4  sm:border-r-[2px] sm:border-gray-300 sm:border-opacity-50">
      <SearchInput />
      <div className="divider bg-gray-300 bg-opacity-50 h-[1px] m-0"></div>
      <Converstions />
    </aside>
  );
};

export default SidebarChat;
