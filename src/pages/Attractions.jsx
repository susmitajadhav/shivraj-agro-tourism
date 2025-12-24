import Seo from '../seo/Seo'
import Section from '../components/ui/Section'
import AttractionCard from '../components/ui/AttractionCard'
import CardSkeleton from '../components/ui/CardSkeleton'
import { ATTRACTIONS } from '../config/attractions'

const CATEGORIES = [
  { key: 'water', label: 'Water Rides' },
  { key: 'amusement', label: 'Amusement Rides' },
  { key: 'agro', label: 'Agro Tourism Experiences' },
]

export default function Attractions() {
  return (
    <>
      <Seo
        title="Attractions | Shivraj Agro Tourism"
        description="Explore water rides, amusement rides, and agro tourism experiences at Shivraj Agro Tourism."
      />

      {CATEGORIES.map((cat) => {
        const items = ATTRACTIONS.filter(
          (a) => a.category === cat.key
        )

        return (
          <Section key={cat.key}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {cat.label}
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.length === 0
                ? Array.from({ length: 3 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))
                : items.map((item) => (
                    <AttractionCard key={item.id} {...item} />
                  ))}
            </div>
          </Section>
        )
      })}
    </>
  )
}
