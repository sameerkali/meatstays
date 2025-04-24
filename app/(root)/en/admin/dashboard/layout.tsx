import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { validateAdmin } from '@/lib/actions/AdminActions/validateAdmin';
import Sidebar from '@/components/AdminPanel/Sidebar/Sidebar';
import LogoutButton from '@/components/AdminPanel/LogoutButton/LogoutButton';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const cookieStore = cookies()
  const authtoken = cookieStore.get('admintoken')

  if (!authtoken) {
    redirect(`/en/admin/login`);
  }

  const res = await validateAdmin(authtoken.value);
  if (!res?.success) {
    redirect(`/en/admin/login`);
  }

  return (
    <section className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <LogoutButton />
      <div className="flex-1 bg-slate-50 p-2 h-screen overflow-auto">
      {children}
      </div>
    </section>
  )
}