import Header from '../../components/Header';
import styles from '../../../../components';
import SidebarChat from './components/SidebarChat';
import MessageContainer from './components/MessageContainer';

const Chat = () => {
  return (
    <section className={`${styles.dashboardSection}`}>
      <Header category="App" title="Live Chatting" />
      <div className="flex flex-col sm:flex-row w-full bg-dark p-6 rounded-lg gap-2 h-[80vh]">
        <SidebarChat />
        <MessageContainer />
      </div>
    </section>
  );
};

export default Chat;
