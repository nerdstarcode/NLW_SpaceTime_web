import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Link href='/' className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
                <ChevronLeft className="h-4 w-4" />
                voltar à timeline
            </Link>

            <form className="flex flex-1 flex-col gap-2">
                <fieldset className="flex items-center gap-4">
                    <legend className="sr-only"> Choices </legend>
                    <label htmlFor="media" className="flex cursor-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                        <Camera className="h-4 w-4" />
                        Anexar Mídia
                    </label>
                    <input type="file" name="media" id="media" className="hidden" />

                    <label htmlFor="isPublic" className="flex cursor-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                    <input type="checkbox" 
                    name="isPublic" id="isPublic" className="h-4 w-4 border-gray-400 bg-gray-700 text-purple-500 rounded" value="true"/>
                    Tornar memória pública
                    </label>
                </fieldset>
                <textarea name="content" spellCheck={false} className="flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
                placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."/>
            </form>
        </div>
    )
}