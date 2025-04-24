import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const Charts = dynamic(() => import('./Charts'), { ssr: false })

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const HomePage = ({data}: {data: any}) => {
  return (
      <div className="flex w-full items-center min-h-screen flex-col gap-3 py-6 px-4">
          <p className={`text-2xl text-blue-800 text-center font-[600] tracking-wide uppercase ${poppins.className} `}>
              Admin Dashboard
          </p>

          <Link href="/">
              <Image
                  src="/logo.png"
                  alt="DODEV"
                  height={200}
                  width={200}
                  className="rounded-full"
              />
          </Link>

          <div className='mt-6'>
            <Charts data={data} />
          </div>
      </div>
  )
}

export default HomePage