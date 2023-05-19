import Image from 'next/image'
import nlwLogo from '../../../assets/nlw-spacetime-logo.svg'
import { AnchorButton } from '../../Atoms/AnchorButton'

export function Hero() {
    return (
        <div className='space-y-5'>
            <Image src={nlwLogo} alt="NLW Spacetime" priority />
            <div className='max-w-[428px] space-y-1'>
                <h1 className='text-5xl font-bold leading-tight text-gray-50'>Sua cápsula do Tempo</h1>
                <p className='text-lg leading-relaxed'>
                    Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
                </p>
            </div>

            <AnchorButton href='/memories/new' children='Cadastrar Lembrança'/>

        </div>
    )
}