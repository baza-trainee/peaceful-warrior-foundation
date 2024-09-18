import Directions from '@/sections/about/Directions/Directions';
import Hero from '@/sections/about/Hero/Hero';
import Mission from '@/sections/about/Mission/Mission';
import Partners from '@/sections/about/Partners/Partners';
import SupportUs from '@/sections/about/SupportUs/SupportUs';
import Team from '@/sections/about/Team/Team';

export default function Home() {
  return (
    <>
      {/* <Hero />*/}
      <Mission />
      <Directions />
      <Team />
      <Partners />
      <SupportUs />
    </>
  );
}
