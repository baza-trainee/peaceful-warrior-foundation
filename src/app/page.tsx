import Button from '@/components/ui/Button';
import Hero from '@/sections/about/Hero/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Button>Click me</Button>
      <Hero />
      <Image
        src="/assets/images/hero-mobile.png"
        width={560}
        height={620}
        className="block"
        alt="Screenshots of the dashboard project showing mobile version"
      />
    </>
  );
}
