import { Copyright, User } from 'lucide-react'
import { SingIn } from '@/components/Molecules/SingIn'
import { Hero } from '@/components/Molecules/Hero'
import { EmptyMemories } from '@/components/Molecules/EmptyMemories'
import { cookies } from "next/headers"
import { Profile } from '@/components/Molecules/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full" />

        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {isAuthenticated ?
          <Profile/>
          :
          <SingIn />
        }
        <Hero />
        <Copyright />

      </div>
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  )
}
