import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const cookieStore = cookies()
    const usertoken = cookieStore.get('usertoken')

    if (!usertoken) {
        redirect(`/login-user`);
    }

    return (
        <section>
            {children}
        </section>
    )
}