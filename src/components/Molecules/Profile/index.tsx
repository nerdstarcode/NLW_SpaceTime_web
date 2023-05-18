import { getUser } from "@/lib/auth";
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-lef">
      <Image src={avatarUrl} width={40} height={40} priority alt="avatar url" className="w-10 h-10 rounded-full"/>
      <p className='text-sm leading-snug max-w-[140px]'>
        {name}
        <a href="" className="text-xs block text-red-400 hover:text-red-300">log out</a>
      </p>
    </div>
  )
}