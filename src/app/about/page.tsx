import Directions from '@/sections/about/Directions/Directions';
import Hero from '@/sections/about/Hero/Hero';
import Mission from '@/sections/about/Mission/Mission';
import SupportUs from '@/sections/about/SupportUs/SupportUs';
import Team from '@/sections/about/Team/Team';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div>
      <Hero /> {/* ? */}
      <Mission /> {/* ? */}
      <Directions /> {/*  Віка */}
      <Team /> {/*  Влад */}
      <SupportUs /> {/*  Ганна */}
    </div>
  );
}
