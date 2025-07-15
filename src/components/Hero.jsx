import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import CardSection from './HeroCardSection';
import MobileHero from './MobileHero';
import { heroImg1, heroImg2 } from '../utils/imagesURL';
import { HiOutlineMapPin, HiChevronDown } from 'react-icons/hi2';
import { FiSearch } from 'react-icons/fi';

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const nowMobile = window.innerWidth < 768;
      if (nowMobile !== isMobile && !isTransitioning) {
        setIsTransitioning(true);
        gsap.to(heroRef.current, {
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            setIsMobile(nowMobile);
            setIsTransitioning(false);
          },
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, isTransitioning]);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }
  }, [isMobile]);

  if (isMobile) {
    return <MobileHero />;
  }

  return (
    <main ref={heroRef} className='bg-[#ff5200] h-120vh'>
      <img className='absolute h-127 top-25' src={heroImg1} />
      <img className='absolute h-127 top-25 right-0' src={heroImg2} />
      
      <div className='text-center pt-50 text-white font-bold text-5xl'>
        <h1>
          Order food & groceries. Discover<br />best restaurants. Swiggy it!
        </h1>
      </div>

      <div className="flex items-center bg-white rounded-xl px-5 py-4 shadow-md w-[300px] absolute left-90 mt-10">
        <HiOutlineMapPin className="text-orange-600 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Enter your delivery location"
          className="flex-1 outline-none text-gray-500 text-base placeholder-gray-400 font-bold "
        />
        <HiChevronDown className="text-black w-5 h-5 ml-2" />
      </div>

      <div className="flex items-center bg-white rounded-2xl px-4 py-4 w-[500px] max-w-xl shadow-sm ml-170 mt-10">
        <input
          type="text"
          placeholder="Search for restaurant, item or more"
          className="flex-1 outline-none text-gray-500 placeholder-gray-400 bg-transparent font-bold"
        />
        <FiSearch className="text-gray-500 w-5 h-5" />
      </div>

      <CardSection />

      <div className="bg-[#ff5200] py-1 px-4 pb-5">
        <div className="bg-white flex items-center justify-between w-full max-w-screen-xl mx-auto h-3"></div>
      </div>
    </main>
  );
}

export default Hero;
