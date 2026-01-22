import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Features from '@/components/Features/Features';
import Quote from '@/components/Quote/Quote';
import Team from '@/components/Team/Team';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Quote />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
