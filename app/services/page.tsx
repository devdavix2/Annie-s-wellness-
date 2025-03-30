import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Premium mobile spa treatments tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16 ${index % 2 === 1 ? "lg:grid-flow-row-dense" : ""}`}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">{service.title}</h2>
                <p className="text-gray-600 md:text-xl">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
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
                        className="h-5 w-5 text-purple-700 mr-2"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full ${index % 2 === 1 ? "lg:order-first" : "lg:order-last"}`}
              >
                <Image
                  src={service.imageUrl || "/placeholder.svg"}
                  alt={service.title}
                  width={1280}
                  height={720}
                  className="rounded-xl h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Spa Advantage */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                The Mobile Spa Advantage
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Experience the convenience and luxury of our mobile spa services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 p-6 border border-purple-100 rounded-lg shadow-sm"
              >
                <div className="p-3 rounded-full bg-purple-100">
                  <advantage.icon className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">{advantage.title}</h3>
                <p className="text-gray-600 text-center">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Book Your Spa Experience?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to schedule your personalized mobile spa service
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/booking">
                <Button className="bg-white text-purple-900 hover:bg-purple-100">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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
    description:
      "Our professional massage therapists bring relaxation and healing directly to you. Each massage is customized to address your specific needs, whether you're looking to relieve tension, reduce stress, or simply indulge in a luxurious experience.",
    features: [
      "Swedish Massage - Gentle, relaxing strokes to ease tension",
      "Deep Tissue Massage - Targets chronic muscle tension",
      "Hot Stone Massage - Uses heated stones for deeper relaxation",
      "Aromatherapy Massage - Enhanced with essential oils",
      "Couples Massage - Share the experience with a partner",
    ],
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Facial Treatments",
    description:
      "Revitalize your skin with our premium facial treatments. Our estheticians analyze your skin type and concerns to provide a customized facial that addresses your specific needs, leaving your skin refreshed, balanced, and glowing.",
    features: [
      "Deep Cleansing Facial - Removes impurities and unclogs pores",
      "Anti-Aging Facial - Reduces fine lines and improves elasticity",
      "Hydrating Facial - Restores moisture to dry, dehydrated skin",
      "Brightening Facial - Evens skin tone and reduces dark spots",
      "Acne Treatment Facial - Targets breakouts and reduces inflammation",
    ],
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Waxing Services",
    description:
      "Achieve smooth, hair-free skin with our gentle and effective waxing treatments. Our technicians use premium quality wax and techniques to ensure minimal discomfort and long-lasting results.",
    features: [
      "Facial Waxing - Eyebrows, upper lip, chin, and full face",
      "Body Waxing - Arms, legs, back, and chest",
      "Bikini and Brazilian Waxing - Various options available",
      "Combination Packages - Save with multiple area treatments",
      "Sensitive Skin Formulas - Gentle options for reactive skin",
    ],
    imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Skin Tag Removal",
    description:
      "Our professional skin tag removal service offers a safe and effective solution for removing unwanted skin tags. Using advanced techniques, our specialists can remove skin tags with minimal discomfort and downtime.",
    features: [
      "Professional Assessment - Evaluation of skin tags before treatment",
      "Safe Removal Techniques - Minimally invasive procedures",
      "Multiple Tags Treatment - Efficient removal of several tags",
      "Aftercare Guidance - Instructions for optimal healing",
      "Follow-up Consultation - Ensuring proper healing and results",
    ],
    imageUrl: "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Pedicure & Manicure",
    description:
      "Treat your hands and feet to our luxurious pedicure and manicure services. Our nail technicians provide meticulous care, from cuticle treatment to polish application, ensuring your nails look their absolute best.",
    features: [
      "Classic Manicure - Nail shaping, cuticle care, and polish",
      "Spa Pedicure - Includes exfoliation, massage, and polish",
      "Gel Polish - Long-lasting, chip-resistant color",
      "Nail Art - Custom designs for a unique look",
      "Paraffin Treatments - Deep moisturizing for hands and feet",
    ],
    imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1280&auto=format&fit=crop",
  },
]

const advantages = [
  {
    title: "Convenience",
    description: "No travel time or parking hassles. We bring the spa experience directly to your location.",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Privacy",
    description: "Enjoy spa treatments in the comfort and privacy of your own space without other clients around.",
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
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
  },
  {
    title: "Customization",
    description:
      "We tailor each service to your specific environment and preferences for a truly personalized experience.",
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
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Time Efficiency",
    description: "Save time by eliminating travel to and from a spa location, perfect for busy professionals.",
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
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Group Services",
    description: "Perfect for events, parties, or corporate wellness programs with multiple treatments available.",
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Familiar Environment",
    description: "Relax more deeply in your own comfortable and familiar surroundings.",
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12" />
        <line x1="3" x2="21" y1="9" y2="9" />
      </svg>
    ),
  },
]

