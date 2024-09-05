import Directions from '@/sections/about/Directions/Directions';
import Hero from '@/sections/about/Hero/Hero';
import Mission from '@/sections/about/Mission/Mission';
import SupportUs from '@/sections/about/SupportUs/SupportUs';
import Team from '@/sections/about/Team/Team';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Hero /> {/* Сергій */}
      <Mission /> {/* Віталій */}
      <Directions /> {/*  Віка */}
      <Team /> {/*  Влад */}
      <SupportUs /> {/*  Ганна */}
    </>
  );
}
