import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-600 to-purple-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
           
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Annie's Wellness Sanctuary Spa
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Your Mobile Spa Experience – Relax, Rejuvenate, Revitalize
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/booking">
                <Button className="bg-white text-purple-900 hover:bg-purple-100">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white text-purple-100 hover:bg-white/10">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                Our Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Experience luxury and relaxation with our premium mobile spa services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center space-y-4 p-6 border border-purple-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-full bg-purple-100">
                  <service.icon className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button className="bg-purple-700 hover:bg-purple-800">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Spa Highlight */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">
                Mobile Spa Experience
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                We Come To You
              </h2>
              <p className="text-gray-600 md:text-xl">
                No need to travel. Our professional spa therapists bring the full spa experience to your home, office,
                or event location. Enjoy premium treatments in the comfort of your own space.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/booking">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                    Book Your Mobile Spa <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1280&auto=format&fit=crop"
                alt="Mobile spa service"
                width={1280}
                height={720}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Hear from our satisfied clients about their spa experiences
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col p-6 bg-purple-50 rounded-lg shadow-sm">
                <div className="flex-1">
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-200 w-12 h-12 flex items-center justify-center">
                    <span className="text-purple-700 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Experience Luxury?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Book your mobile spa session today and transform any space into a sanctuary of relaxation
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/booking">
                <Button className="bg-white text-purple-900 hover:bg-purple-100">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="tel:+2348101811316">
                <Button variant="outline" className="border-white text-purple-100 hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2 p-4">
              <MapPin className="h-8 w-8 text-purple-700" />
              <h3 className="text-xl font-semibold text-purple-900">Location</h3>
              <p className="text-center text-gray-600">
                Block 13, Plot 7, 2nd Avenue, Gwarimpa, close to IC World, Abuja, Nigeria
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4">
              <Phone className="h-8 w-8 text-purple-700" />
              <h3 className="text-xl font-semibold text-purple-900">Phone</h3>
              <p className="text-center text-gray-600">0810 181 1316</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4">
              <Mail className="h-8 w-8 text-purple-700" />
              <h3 className="text-xl font-semibold text-purple-900">Email</h3>
              <p className="text-center text-gray-600">annastesia432@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const services = [
  {
    title: "Massage Therapy",
    description: "Relax and rejuvenate with our professional massage services tailored to your needs.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M4 18v-5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
        <path d="M14 13h-4l-2 2.5L10 17h4l2-2.5Z" />
        <path d="M6 10V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
      </svg>
    ),
  },
  {
    title: "Facial Treatments",
    description: "Revitalize your skin with our premium facial treatments for all skin types.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Waxing Services",
    description: "Smooth, hair-free skin with our gentle and effective waxing treatments.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M8 6h12" />
        <path d="M2 12h5" />
        <path d="M8 18h9" />
        <path d="M18 6v12" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    text: "The mobile spa service was incredible! The therapist was professional and the massage was exactly what I needed. I love that they came to my home.",
    name: "Sarah Johnson",
    location: "Abuja",
  },
  {
    text: "Annie's Wellness Sanctuary provided the perfect spa day for my bridal shower. All my friends were impressed with the quality of service.",
    name: "Michelle Okafor",
    location: "Gwarimpa",
  },
  {
    text: "I've tried many spa services, but the facial treatment I received from Annie's team was exceptional. My skin has never looked better!",
    name: "David Adeyemi",
    location: "Abuja",
  },
]

