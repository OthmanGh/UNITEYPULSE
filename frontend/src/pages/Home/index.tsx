import Features from './components/Features';
import { Hero, Navbar } from './components/index';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col gap-20">
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default Home;
