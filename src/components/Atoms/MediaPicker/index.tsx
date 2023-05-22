'use client'

import { ChangeEvent, useState } from "react"
export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    if(!files){
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setPreview(previewURL)
  }
  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="media"
        id="media"
        accept="image/*"
        className="hidden"
      />
      {
        preview && (
          <img
            src={preview}
            alt="preview da imagem selecionada"
            className="aspect-video w-full rounded-lg object-cover"
          />
        )
      }
    </>

  )
}