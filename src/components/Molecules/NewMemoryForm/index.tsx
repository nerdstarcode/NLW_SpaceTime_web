'use client'
import { MediaPicker } from '@/components/Atoms/MediaPicker';
import { api } from '@/lib/api';
import { Camera } from 'lucide-react';
import { FormEvent } from 'react';
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation';

export function NewMemoryForm() {
  const router = useRouter()
  const token = Cookie.get('token')
console.log(token)
  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); //pesquisar
    let coverUrl = ''
    const fileToUpload = formData.get('media');
    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload);

      const uploadResponse = await api.post('/upload', uploadFormData)
      coverUrl = uploadResponse.data.fileUrl
    }
    await api.post('/memories', {
      content: formData.get('content'),
      coverUrl,
      isPublic: formData.get('isPublic'),
    }, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
    )
    router.push('/')
  }
  return (
    <form onSubmit={handleCreateMemory} className='flex flex-1 flex-col gap-2'>
      <fieldset className='flex flex-col items-center gap-4'>
        <legend className='sr-only'> Config of memories and preview </legend>
        <div className='flex w-full items-center gap-4'>
          <label htmlFor='media' className='flex cursor-center gap-1.5 text-sm text-gray-200 hover:text-gray-100'>
            <Camera className='h-4 w-4' />
            Anexar Mídia
          </label>
          <label htmlFor='isPublic' className='flex cursor-center gap-1.5 text-sm text-gray-200 hover:text-gray-100'>
            <input type='checkbox'
              name='isPublic' id='isPublic' className='h-4 w-4 border-gray-400 bg-gray-700 text-purple-500 rounded' value='true' />
            Tornar memória pública
          </label>
        </div>
        <MediaPicker />
      </fieldset>

      <textarea
        name='content'
        spellCheck={false}
        className='flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0'
        placeholder='Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre.'
      />
      <button
        type='submit'
        className='
          uppercase 
          inline-block 
          rounded-full 
          text-green-500 
          border-green-500
          border
          px-5 
          py-3 
          font-alt 
          text-sm 
          leading-none 
          transition-all
          duration-700
          hover:border-x-green-300
          hover:bg-green-800
          hover:shadow-[0_0px_10px_5px]
          hover:shadow-green-200/20
        '
      >
        Salvar
      </button>
    </form>
  )
}