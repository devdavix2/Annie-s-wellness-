import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Membership Plans</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Join our wellness community and enjoy exclusive benefits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                Choose Your Membership Plan
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our membership plans are designed to make self-care a regular part of your lifestyle
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <Card key={index} className={`overflow-hidden ${plan.featured ? "border-purple-500 shadow-lg" : ""}`}>
                {plan.featured && (
                  <div className="bg-purple-500 text-white text-center py-2 font-medium">Most Popular</div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-900">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-purple-700">{plan.price}</p>
                    <p className="text-sm text-gray-500">{plan.billing}</p>
                  </div>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-left">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.featured ? "bg-purple-700 hover:bg-purple-800 text-white" : "bg-purple-100 hover:bg-purple-200 text-purple-900"}`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Membership Benefits</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Enjoy these exclusive perks when you become a member
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">What Our Members Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Hear from our community of wellness enthusiasts
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="rounded-full overflow-hidden w-12 h-12 mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.membership} Member</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Everything you need to know about our membership plans
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:gap-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold text-purple-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
                Ready to Join Our Wellness Community?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Become a member today and start your journey to wellness
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-purple-900 hover:bg-purple-100">
                Join Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
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
const membershipPlans = [
  {
    title: "Basic Wellness",
    description: "Perfect for occasional spa-goers",
    price: "₦15,000",
    billing: "per month",
    benefits: [
      "1 massage or facial treatment per month",
      "10% discount on additional services",
      "Access to member-only events",
      "24-hour cancellation policy",
      "Membership can be paused anytime",
    ],
    buttonText: "Join Basic Plan",
    featured: false,
  },
  {
    title: "Premium Wellness",
    description: "Our most popular membership plan",
    price: "₦25,000",
    billing: "per month",
    benefits: [
      "2 treatments of your choice per month",
      "15% discount on additional services",
      "1 complimentary guest pass per quarter",
      "Priority booking",
      "Access to member-only events",
      "Free product samples",
      "48-hour cancellation policy",
    ],
    buttonText: "Join Premium Plan",
    featured: true,
  },
  {
    title: "Luxury Wellness",
    description: "The ultimate wellness experience",
    price: "₦40,000",
    billing: "per month",
    benefits: [
      "3 treatments of your choice per month",
      "20% discount on additional services",
      "2 complimentary guest passes per quarter",
      "VIP priority booking",
      "Exclusive access to new treatments",
      "Complimentary product bundle",
      "72-hour cancellation policy",
      "Personalized wellness consultation",
    ],
    buttonText: "Join Luxury Plan",
    featured: false,
  },
]

const benefits = [
  {
    title: "Regular Self-Care",
    description: "Make wellness a consistent part of your routine with scheduled treatments every month.",
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
    title: "Cost Savings",
    description: "Save money with discounted rates on all services and exclusive member-only promotions.",
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
        <path d="m16 8-8 8" />
        <path d="M8.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <path d="M15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      </svg>
    ),
  },
  {
    title: "Priority Booking",
    description: "Get preferred scheduling and priority access to appointment times, even during peak periods.",
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
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Exclusive Events",
    description: "Access to member-only events, workshops, and wellness seminars throughout the year.",
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
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
        <path d="M2 20h20" />
        <path d="M14 12v.01" />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    description: "Easily manage your appointments with our convenient online booking system and flexible rescheduling.",
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
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Personalized Experience",
    description: "Receive customized treatment recommendations based on your preferences and wellness goals.",
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
]

const testimonials = [
  {
    name: "Amara Okonkwo",
    membership: "Premium",
    quote:
      "Joining the Premium membership has been the best decision for my wellness journey. I love having my monthly treatments scheduled, and the discounts on additional services are a great bonus!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&auto=format&fit=crop",
  },
  {
    name: "Emmanuel Adebayo",
    membership: "Luxury",
    quote:
      "The Luxury membership has transformed my self-care routine. The VIP booking and personalized wellness consultation have made such a difference. I feel like royalty every time I visit!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=crop",
  },
  {
    name: "Chioma Nwosu",
    membership: "Basic",
    quote:
      "Even the Basic membership offers incredible value. Having a monthly treatment to look forward to keeps me motivated, and the member events are always informative and fun!",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=128&auto=format&fit=crop",
  },
  {
    name: "Daniel Osei",
    membership: "Premium",
    quote:
      "As someone with a busy schedule, the Premium membership ensures I never neglect self-care. The priority booking is invaluable, and the staff always remembers my preferences.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=128&auto=format&fit=crop",
  },
]

const faqs = [
  {
    question: "How do I sign up for a membership?",
    answer:
      "You can sign up for a membership by visiting our spa, calling us, or completing the online registration form on our website. Our staff will guide you through the process and answer any questions you may have.",
  },
  {
    question: "Can I upgrade or downgrade my membership plan?",
    answer:
      "Yes, you can upgrade or downgrade your membership plan at any time. Changes will take effect at the start of your next billing cycle. Please contact us at least 5 days before your billing date to make changes.",
  },
  {
    question: "What happens to my unused treatments?",
    answer:
      "Monthly treatments do not roll over to the next month. We encourage you to use your treatments each month to maintain a consistent wellness routine. However, we do offer some flexibility for rescheduling within the same month.",
  },
  {
    question: "Can I share my membership with family members?",
    answer:
      "Memberships are non-transferable and can only be used by the registered member. However, Premium and Luxury members receive guest passes that can be used for family or friends.",
  },
  {
    question: "How do I cancel my membership?",
    answer:
      "You can cancel your membership by contacting us via phone or email. We require a 30-day notice for cancellations. Any unused treatments during your final month will still be available for you to use.",
  },
  {
    question: "Is there a minimum commitment period?",
    answer:
      "Our memberships require a minimum 3-month commitment. After this initial period, your membership will continue on a month-to-month basis until you choose to cancel.",
  },
]

