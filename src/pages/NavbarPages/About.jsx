import React from "react";
import PlaylistCard from "../../compnents/PlaylistCard";
import YouTubePlaylists from "../../compnents/YouTubePlaylists";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="h-[75vh]  flex justify-around items-center px-10">
      <div className="max-w-[60%]">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold font-mono relative mb-5 text-white">
          Welcome to Our Platform
        </h1>

        {/* Subheading */}
        <p className="leading-8 text-2xl font-bold font-mono relative mb-4 italic select-none text-white">
          Unlocking Your Potential, One Semester at a Time!
        </p>

        {/* Description */}
        <p className="leading-7 font-semibold relative mb-6 text-white">
          We are committed to improving how students learn and grow. Our
          platform offers organized resources and playlists to help you succeed
          in both academics and your career. Whether you want to improve your
          skills or explore your field, we have the tools and courses to support
          you. Our goal is to make learning enjoyable and easy.
        </p>

        <p className="leading-7 font-light relative mb-6 text-white">
          Our team is dedicated to helping learners like you explore new ideas,
          build important skills, and create opportunities. With our
          user-friendly playlists and resources, we provide everything you need
          to succeed academically and personally.
        </p>
      </div>

      {/* RevealLinks Component */}
      <div className="flex justify-center items-center bg-customYellow mx-10">
        <RevealLinks />
      </div>
    </div>
  );
}

export default About;
export const RevealLinks = () => {
  return (
    <section className="grid place-content-end gap-2 bg-transparent px-8 py-24 text-white">
      <FlipLink href="#">What if</FlipLink>
      <FlipLink href="#">the key to</FlipLink>
      <FlipLink href="#">unlocking your</FlipLink>
      <FlipLink href="#">future is right</FlipLink>
      <FlipLink href="#">here?</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-3xl md:text-4xl lg:text-4xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
