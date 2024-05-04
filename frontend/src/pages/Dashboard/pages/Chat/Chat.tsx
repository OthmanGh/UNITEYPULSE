import Header from '../../components/Header';
import styles from '../../../../components';
import SidebarChat from './components/SidebarChat';
import MessageContainer from './components/MessageContainer';

const Chat = () => {
  return (
    <section className={styles.dashboardSection}>
      <Header category="App" title="Live Chatting" />

      <div className="grid grid-1 sm:grid-cols-2 w-full">
        <SidebarChat />
        <MessageContainer />
      </div>
    </section>
  );
};

export default Chat;
