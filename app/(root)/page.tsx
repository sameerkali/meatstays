import { cookies } from 'next/headers'
import Header from '@/components/global/Navbar/Header';
import Footer from '@/components/global/Footer/Footer';
import Section1 from '@/components/HomePage/Section1';
import Section2 from '@/components/HomePage/Section2';
import Section3 from '@/components/HomePage/Section3';
import Section4 from '@/components/HomePage/Section4';
// import Section5 from '@/components/HomePage/Section5';
import Section6 from '@/components/HomePage/Section6';
import Section7 from '@/components/HomePage/Section7';
import Section8 from '@/components/HomePage/Section8';
import Section9 from '@/components/HomePage/Section9';

export default function Home() {
  const cookieStore = cookies()
  const usertoken = cookieStore.get('usertoken')
  return (
    <>
      <Header usertoken={usertoken} />
      <div className="">
        <Section1 />
        <Section8 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section9 />
        <Section6 />
        <Section7 />
      </div>
      <Footer />
    </>

  );
}
