import React from 'react';
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import BitmojiAnimation from './ui/front-face';

interface HomePageProps {
  phrases: { text: string }[];
}

const HomePage: React.FC<HomePageProps> = ({ phrases }) => {
  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center">
      <BitmojiAnimation />
      <TypewriterEffect words={phrases.map(phrase => phrase.text)} />
    </div>
  );
};

export default HomePage;
