import Seo from '../seo/Seo'
import Section from '../components/ui/Section'

export default function Safety() {
  return (
    <>
      <Seo
        title="Safety Guidelines | Shivraj Agro Tourism"
        description="Safety rules and guidelines for a secure and enjoyable visit."
      />

      <Section>
        <h2 className="text-4xl font-bold">Safety & Guidelines</h2>

        <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
          <li>✔ Certified lifeguards at all water attractions</li>
          <li>✔ Regular safety checks of all rides</li>
          <li>✔ Height & age restrictions strictly enforced</li>
          <li>✔ First-aid and medical staff available</li>
          <li>✔ Clean drinking water & hygienic facilities</li>
        </ul>
      </Section>
    </>
  )
}
