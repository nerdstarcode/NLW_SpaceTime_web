import { Hero } from '@/components/Molecules/Hero'
import { Profile } from '@/components/Molecules/Profile'
import { SingIn } from '@/components/Molecules/SingIn'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { Copyright } from '@/components/Atoms/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamJuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree'
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construida com React, Next.js, Tailwindcss e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamJuree.variable} font-sans bg-gray-900 text-gray-100`}>

        <main className="grid grid-cols-2 min-h-screen">
          {/* Left */}
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

            {/* blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full" />

            {/* stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {isAuthenticated ?
              <Profile />
              :
              <SingIn />
            }
            <Hero />
            <Copyright />

          </div>
          {/* Right */}
          <div className="max-h-screen overflow-y-scroll flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
