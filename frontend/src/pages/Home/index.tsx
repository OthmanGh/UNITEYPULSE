import { Link, Element } from 'react-scroll';
import Features from './components/Features';
import { Aboutus, Getintouch, Hero, Navbar } from './components/index';
import styles from './home.module.css';
import { ArrowScrollTop } from '../../constants/icons';

function Home() {
  return (
    <div className={styles.main}>
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col gap-40">
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="features">
          <Features />
        </Element>
        <Element name="aboutus">
          <Aboutus />
        </Element>
        <Element name="getintouch">
          <Getintouch />
        </Element>
      </main>

      <div className="fixed bottom-4 right-4 z-10">
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-70} duration={500}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <ArrowScrollTop />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
