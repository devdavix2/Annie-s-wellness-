import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Us</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Our story, mission, and commitment to wellness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                The Journey of Annie's Wellness Sanctuary
              </h2>
              <p className="text-gray-600 md:text-xl">
                Annie's Wellness Sanctuary Spa was founded with a simple yet powerful vision: to bring the luxury and
                benefits of spa treatments directly to our clients. Our founder, Annie, recognized that in today's
                fast-paced world, many people struggle to find time for self-care and relaxation.
              </p>
              <p className="text-gray-600 md:text-xl">
                What began as a small mobile massage service has grown into a comprehensive wellness sanctuary that
                offers a wide range of treatments. Throughout our growth, we've remained committed to our core values of
                excellence, personalization, and accessibility.
              </p>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1280&auto=format&fit=crop"
                alt="Our story"
                width={1280}
                height={720}
                className="rounded-xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1280&auto=format&fit=crop"
                alt="Our mission"
                width={1280}
                height={720}
                className="rounded-xl h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                Bringing Wellness to Your Doorstep
              </h2>
              <p className="text-gray-600 md:text-xl">
                At Annie's Wellness Sanctuary Spa, our mission is to make wellness and self-care accessible to everyone.
                We believe that relaxation and rejuvenation should not be luxuries reserved for special occasions, but
                essential components of a balanced lifestyle.
              </p>
              <p className="text-gray-600 md:text-xl">
                By bringing our services directly to our clients, we remove barriers to self-care and create
                opportunities for regular wellness practices. We are committed to providing exceptional, personalized
                treatments that address the unique needs of each individual we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                What Sets Us Apart
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our core values guide everything we do at Annie's Wellness Sanctuary Spa
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col space-y-4 p-6 border border-purple-100 rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                Meet Our Wellness Experts
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our team of certified professionals is dedicated to providing exceptional spa experiences
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="rounded-full overflow-hidden w-32 h-32">
                  <Image
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-900">{member.name}</h3>
                <p className="text-purple-700 font-medium">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
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
                Experience the Annie's Wellness Difference
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Book your mobile spa session today and discover why our clients keep coming back
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/booking">
                <Button className="bg-white text-purple-900 hover:bg-purple-100">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Services
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
const values = [
  {
    title: "Excellence",
    description:
      "We are committed to providing the highest quality services, using premium products and employing skilled professionals who are passionate about their craft.",
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
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Personalization",
    description:
      "We recognize that each client is unique, with individual needs and preferences. Our services are tailored to provide personalized experiences that address specific concerns.",
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
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description:
      "By bringing our services to our clients, we make wellness accessible to those who may have mobility issues, busy schedules, or simply prefer the comfort of their own environment.",
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
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical practices in all aspects of our business, from pricing to the products we use and the services we provide.",
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
    title: "Innovation",
    description:
      "We continuously seek new ways to enhance our services, incorporating the latest techniques, products, and technologies to provide cutting-edge wellness solutions.",
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
        <path d="M2 12h5" />
        <path d="M17 12h5" />
        <path d="M12 2v5" />
        <path d="M12 17v5" />
        <path d="M4.93 4.93l3.54 3.54" />
        <path d="M15.54 15.54l3.54 3.54" />
        <path d="M4.93 19.07l3.54-3.54" />
        <path d="M15.54 8.46l3.54-3.54" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We are committed to building relationships with our clients and the communities we serve, contributing to overall wellness and quality of life.",
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
]

const team = [
  {
    name: "Annie Anastesia",
    role: "Founder & Lead Therapist",
    bio: "With over 10 years of experience in the wellness industry, Annie founded the spa with a vision to make premium spa services accessible to everyone.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=128&auto=format&fit=crop",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Massage Therapist",
    bio: "Certified in multiple massage techniques, Sarah specializes in deep tissue and therapeutic massage to address chronic pain and tension.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=128&auto=format&fit=crop",
  },
  {
    name: "Michael Okafor",
    role: "Esthetician",
    bio: "Michael is our skincare expert with a passion for helping clients achieve their best skin through customized facial treatments.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=128&auto=format&fit=crop",
  },
  {
    name: "Grace Adeyemi",
    role: "Nail Technician",
    bio: "Grace brings creativity and precision to our nail services, ensuring beautiful, long-lasting results for every client.",
    imageUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=128&auto=format&fit=crop",
  },
  {
    name: "David Nwosu",
    role: "Wellness Coordinator",
    bio: "David manages our bookings and ensures that each client's experience is seamless from the first contact to the completion of their service.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=crop",
  },
  {
    name: "Fatima Ibrahim",
    role: "Waxing Specialist",
    bio: "With a gentle touch and attention to detail, Fatima provides comfortable and effective waxing services for all clients.",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=128&auto=format&fit=crop",
  },
]

