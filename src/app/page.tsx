import { EmptyMemories } from '@/components/Molecules/EmptyMemories'
import { api } from '@/lib/api'
import dayjs from 'dayjs';
import { ArrowRight } from 'lucide-react';
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link';
interface MemoryDTO {
  coverUrl?: string;
  excerpt: string;
  id: string;
  created_at: string;
}
export default async function Home() {
  const isAuthenticated = cookies().has('token')
  if (!isAuthenticated) {
    return (
      <EmptyMemories />
    )
  }


  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const memories: MemoryDTO[] = response.data
  return (
    <div className='flex flex-col gap-10 p-8'>
      {memories.map(memory => {
        return (
          <article key={memory.id} className='space-y-4'>
            <time className='flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50'>
              {
                dayjs(memory.created_at).format("D[ de ]MMMM[, ]YYYY")
              }
            </time>
            <div className='space-y-4 px-8'>
              <Image
                src={memory.coverUrl || 'http://192.168.1.100:3333/uploads/noImage'}
                className='aspect-video w-full rounded-lg object-cover'
                alt='image from memory'
                width={592}
                height={280}
              />
              <p className='text-lg leading-relaxed text-gray-100 text-justify'>
                {memory.excerpt}
              </p>
              <Link href={`/memories/${memory.id}`} className='text-gray-300 flex items-center gap-2 hover:text-gray-200'>
                Ler mais
                <ArrowRight className='w-4 h-4' />
              </Link>
            </div>
          </article>
        )
      })

      }
    </div>
  )
}
