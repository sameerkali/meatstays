import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { validateUser } from '@/lib/actions/UserActions/UserActions'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const cookieStore = cookies()
    const usertoken = cookieStore.get('usertoken')

    if (usertoken) {
        const res = await validateUser();
        if (res?.success) {
            redirect(`/`);
        }
    }

    return (
        <section>
            {children}
        </section>
    )
}