import { useState } from 'react'
import Seo from '../seo/Seo'
import Section from '../components/ui/Section'
import Lightbox from '../components/ui/Lightbox'
import { GALLERY_IMAGES } from '../config/gallery'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Seo
        title="Gallery | Shivraj Agro Tourism"
        description="Explore photos of water rides, amusement rides, and agro tourism experiences."
      />

      <Section>
        <h2 className="text-4xl font-bold">Gallery</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              onClick={() => setSelected(img)}
              className="h-64 w-full object-cover rounded-xl cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </Section>

      <Lightbox image={selected} onClose={() => setSelected(null)} />
    </>
  )
}
