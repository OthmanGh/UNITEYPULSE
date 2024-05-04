import SearchInput from './SearchInput';
import Converstions from './Converstions';

const SidebarChat = () => {
  return (
    <aside className="backdrop-blur-lg flex flex-col gap-5 w-[45%]">
      <SearchInput />
      <div className="divider px-3"></div>
      <Converstions />
    </aside>
  );
};

export default SidebarChat;
