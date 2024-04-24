import Features from './components/Features';
import { Aboutus, Hero, Navbar } from './components/index';
import styles from './home.module.css';
function Home() {
  return (
    <div className={styles.main}>
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col gap-40">
        <Hero />
        <Features />
        <Aboutus />
      </main>
    </div>
  );
}

export default Home;
