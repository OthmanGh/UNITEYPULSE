import { Hero, Navbar } from './components/index';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default Home;
