import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { RiPlayList2Fill } from "react-icons/ri";
import anime from 'animejs/lib/anime.es.js';

// Main Home Component
export default function Home() {
  return (
    <div className='h-[75vh] mx-5'>
      <NavLeft />
      <DotGrid />
    </div>
  );
}

// NavLeft Component
export function NavLeft() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "learning journey.",
        "skill-building path.",
        "future possibilities.",
        "academic success."
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='text-white leading-10 relative top-16 left-5 z-10'>
      <h1 className='text-5xl font-extrabold font-mono relative mb-5'>
        Explore your <span ref={typedElement} className="typed-text text-customYellow"></span>
      </h1>
      <p className='leading-8 text-2xl font-bold font-mono relative mb-4 italic select-none'>
        Empowering your learning, <span>one semester</span> at a time!
      </p>
      <p className='max-w-[50%] leading-7 font-light relative mb-6'>
        Welcome to a platform dedicated to enhancing your learning journey. Dive into curated resources, organized playlists, and tools crafted to make skill-building accessible and engaging.
      </p>
      <PlaylistLink />
    </div>
  );
}

// PlaylistLink Component
export function PlaylistLink() {
  return (
    <div className='relative'>
      <button className="animate-border inline-block rounded-md bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1">
        <span className="font-semibold flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-white hover:text-customYellow">
          <RiPlayList2Fill /> Playlist Hub
        </span>
      </button>
    </div>
  );
}

const GRID_WIDTH = 25;
const GRID_HEIGHT = 15;

// DotGrid Component
const DotGrid = () => {
  const handleDotClick = () => {
    // Generate a random starting index for the animation
    const randomIndex = Math.floor(Math.random() * (GRID_WIDTH * GRID_HEIGHT));

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: randomIndex,  // Start from a random index
      }),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleDotClick(); // Trigger animation every 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit absolute top-[130px] right-[90px] z-0"
    >
      {dots}
    </div>
  );
};
