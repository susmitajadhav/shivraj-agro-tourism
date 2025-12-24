import Seo from '../seo/Seo'
import Section from '../components/ui/Section'

export default function Pricing() {
  return (
    <>
      <Seo
        title="Timings & Pricing | Shivraj Agro Tourism"
        description="Park timings and ticket pricing for Shivraj Agro Tourism."
      />

      <Section>
        <h2 className="text-4xl font-bold">Timings & Pricing</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Park Timings</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Monday – Friday: 10:00 AM – 6:00 PM</li>
              <li>Saturday – Sunday: 9:00 AM – 7:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Ticket Pricing</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Adults: ₹800</li>
              <li>Children: ₹600</li>
              <li>Group Discounts Available</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
