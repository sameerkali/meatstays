import Header from '@/components/global/Navbar/Header';
import Footer from '@/components/global/Footer/Footer';
import LoginUserForm from '@/components/User/LoginUserForm/LoginUserForm';
import { cookies } from 'next/headers'

export default function Home() {
  const cookieStore = cookies()
  const usertoken = cookieStore.get('usertoken')
  return (
    <>
      <Header usertoken={usertoken} />
      <div className="">
        <LoginUserForm />
      </div>
      <Footer />
    </>

  );
}
