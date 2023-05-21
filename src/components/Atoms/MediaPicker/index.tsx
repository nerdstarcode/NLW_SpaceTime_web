'use client'
export function MediaPicker() {
    return (
      <input onChange={value => console.log(value)} type="file" name="media" id="media" className="hidden" />
    )
}