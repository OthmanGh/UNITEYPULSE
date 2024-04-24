import Features from './components/Features';
import { Aboutus, Getintouch, Hero, Navbar } from './components/index';
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
        <Getintouch />
      </main>
    </div>
  );
}

export default Home;
