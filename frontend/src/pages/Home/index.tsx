import { Link, Element } from 'react-scroll';
import Features from './components/Features/Features';
import { Aboutus, Getintouch, Hero, Navbar } from './components/index';
import styles from './home.module.css';
import { ArrowScrollTop } from '../../utils/icons';

function Home() {
  return (
    <div className={styles.main}>
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col ">
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
          <button className="rounde-lg font-bold text-3xl">
            <ArrowScrollTop className="text-secondary bg-white rounded-3xl p-0.5" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
