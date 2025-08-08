import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { IoBook } from 'react-icons/io5';

const awardsData = [
  {
    imgSrc: '/path/to/clutch-logo.png',
    year: '2025',
    title: 'Top Android & Chatbot Development Company',
  },
  {
    imgSrc: '/path/to/deloitte-logo.png',
    year: '2024-2023',
    title: 'Fastest Growing Technology Company',
  },
  {
    imgSrc: '/path/to/mobile-app-daily-logo.png',
    year: '2024',
    title: 'Fastest Growing AI Development Companies',
  },
  {
    imgSrc: '/path/to/cio-logo.png',
    year: '2024',
    title: 'Preferred Partner',
  },
  {
    imgSrc: '/path/to/clutch-logo.png',
    year: '2023',
    title: 'Global Leader Award',
  },
  {
    imgSrc: '/path/to/deloitte-logo.png',
    year: '2022',
    title: 'Tech Innovator',
  },
];

const AwardsSectionWithGSAP = () => {
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);
  const totalItems = awardsData.length;
  const cardsToShow = 6; // adjust based on screen/card width

  const fullList = [...awardsData, ...awardsData]; // doubled for seamless loop

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const totalWidth = (100 / cardsToShow) * fullList.length;

    gsap.set(wrapper, {
      xPercent: 0,
    });

    animationRef.current = gsap.to(wrapper, {
      xPercent: -50, // move half-way since list is doubled
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    const pause = () => animationRef.current?.pause();
    const play = () => animationRef.current?.play();

    wrapper.addEventListener('mouseenter', pause);
    wrapper.addEventListener('mouseleave', play);

    return () => {
      wrapper.removeEventListener('mouseenter', pause);
      wrapper.removeEventListener('mouseleave', play);
      animationRef.current?.kill();
    };
  }, []);

  const moveDirection = (dir) => {
    if (!animationRef.current || !wrapperRef.current) return;

    animationRef.current.pause();

    const shift = dir === 'right' ? -100 / cardsToShow : 100 / cardsToShow;

    gsap.to(wrapperRef.current, {
      xPercent: `+=${shift}`,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        animationRef.current.play();
      },
    });
  };

  return (
    <section className="relative bg-black text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-4xl">
            Our Growth Journey As A Mobile App Development Company Has Bagged A Few Reputed Accolades As Well
          </h2>
          <div className="flex gap-3 self-end md:self-center">
            <button
              onClick={() => moveDirection('left')}
              className="w-11 h-11 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => moveDirection('right')}
              className="w-11 h-11 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrolling Cards */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max" ref={wrapperRef}>
            {fullList.map((award, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center text-center flex-shrink-0"
                style={{ width: '280px', marginRight: '24px' }}
              >
                <img src={award.imgSrc} alt={award.title} className="h-24 w-auto object-contain mb-4" />
                <p className="text-zinc-400 text-sm font-medium">{award.year}</p>
                <p className="text-lg font-medium mt-2 leading-snug">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAB & Feature Button */}
      
    

      <button
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-l-lg hover:bg-green-700"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 600, letterSpacing: 1 }}
      >
        Feature Check
      </button>
    </section>
  );
};

export default AwardsSectionWithGSAP;
