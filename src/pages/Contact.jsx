import Seo from '../seo/Seo'
import Section from '../components/ui/Section'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Shivraj Agro Tourism"
        description="Contact Shivraj Agro Tourism for bookings, group events, and inquiries."
      />

      <Section>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
          For bookings, group events, school trips, or any inquiries,
          please reach out to us using the details below.
        </p>

        <div className="mt-8 space-y-2 text-gray-700 dark:text-gray-200">
          <p><strong>Phone:</strong> +91 9XXXXXXXXX</p>
          <p><strong>Email:</strong> info@shivrajagrotourism.com</p>
          <p><strong>Location:</strong> Maharashtra, India</p>
        </div>
      </Section>
    </>
  )
}
