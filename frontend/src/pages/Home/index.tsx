import { Navbar } from './components/index';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default Home;
