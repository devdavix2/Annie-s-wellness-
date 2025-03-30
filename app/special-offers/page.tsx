import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Tag, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SpecialOffersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Special Offers</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Exclusive deals and limited-time promotions for our valued clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Current Promotions</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Take advantage of these limited-time offers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentOffers.map((offer, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                  {offer.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-purple-700">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-purple-700 border-purple-700">
                      {offer.discount}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Ends {offer.endDate}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-purple-900">{offer.title}</CardTitle>
                  <CardDescription>{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Tag className="h-4 w-4 mr-1" />
                      <span>
                        Code: <span className="font-semibold">{offer.code}</span>
                      </span>
                    </div>
                    {offer.remaining && (
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Only {offer.remaining} left</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                      Book Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Packages */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Seasonal Packages</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Special packages designed for the current season
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalPackages.map((package_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-full min-h-[200px]">
                    <Image
                      src={package_.image || "/placeholder.svg"}
                      alt={package_.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <CardHeader>
                      <div className="mb-2">
                        <Badge className="bg-purple-700">{package_.season}</Badge>
                      </div>
                      <CardTitle className="text-xl text-purple-900">{package_.title}</CardTitle>
                      <CardDescription>{package_.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-purple-700 mb-2">{package_.price}</p>
                      <p className="text-sm text-gray-500">Available until {package_.endDate}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/booking">
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Book Package</Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">
                Refer & Earn
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Referral Program</h2>
              <p className="text-gray-600 md:text-xl">
                Share the gift of wellness with friends and family while earning rewards for yourself. For each new
                client you refer who books a service, you'll receive a ₦5,000 credit toward your next appointment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
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
                  <span className="text-gray-600">No limit on the number of referrals</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-gray-600">Credits can be combined for larger discounts</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-gray-600">Your friend also receives 10% off their first service</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1280&auto=format&fit=crop"
                alt="Referral program"
                width={1280}
                height={720}
                className="rounded-xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                Stay Updated on Special Offers
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Subscribe to our newsletter to be the first to know about new promotions and exclusive deals
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <Button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white">
                  Subscribe
                </Button>
              </form>
              <p className="mt-2 text-xs text-gray-500">
                By subscribing, you agree to receive marketing emails from us. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const currentOffers = [
  {
    title: "First-Time Client Special",
    description:
      "Enjoy a 20% discount on your first service with us. Experience the luxury of our mobile spa services at a special introductory rate.",
    discount: "20% OFF",
    code: "FIRSTTIME20",
    endDate: "Ongoing",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=640&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Couples Massage Package",
    description:
      "Book a couples massage and receive complimentary aromatherapy enhancement. Perfect for a romantic date or quality time with a loved one.",
    discount: "Free Add-on",
    code: "COUPLES2023",
    endDate: "Apr 30, 2023",
    remaining: "5 spots",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "Midweek Relaxation",
    description:
      "Book any service on Tuesday, Wednesday, or Thursday and receive 15% off. Take a break in the middle of your busy week.",
    discount: "15% OFF",
    code: "MIDWEEK15",
    endDate: "May 31, 2023",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "Facial & Massage Combo",
    description:
      "Book a facial and massage together and save 25% on the total price. The perfect combination for complete relaxation.",
    discount: "25% OFF",
    code: "COMBO25",
    endDate: "Apr 15, 2023",
    remaining: "3 spots",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=640&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Group Booking Discount",
    description:
      "Book services for 4 or more people and receive 10% off each service. Perfect for bridal parties, corporate events, or girls' day out.",
    discount: "10% OFF",
    code: "GROUP10",
    endDate: "Ongoing",
    image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "Birthday Special",
    description:
      "Receive a free enhancement with any service booked during your birthday month. Must show ID to verify birth month.",
    discount: "Free Add-on",
    code: "BIRTHDAY",
    endDate: "Ongoing",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=640&auto=format&fit=crop",
  },
]

const seasonalPackages = [
  {
    title: "Spring Renewal Package",
    description:
      "Rejuvenate your body and spirit with our Spring Renewal Package, including a deep tissue massage, refreshing facial, and revitalizing foot treatment.",
    price: "₦45,000 (Save ₦15,000)",
    season: "Spring Special",
    endDate: "May 31, 2023",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "Mother's Day Pampering",
    description:
      "Give the gift of relaxation with our Mother's Day package, featuring a Swedish massage, hydrating facial, and luxurious manicure & pedicure.",
    price: "₦60,000 (Save ₦20,000)",
    season: "Limited Time",
    endDate: "May 14, 2023",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "Corporate Wellness Package",
    description:
      "Boost team morale with our Corporate Wellness Package. Includes chair massages for up to 10 employees at your office location.",
    price: "₦100,000 (₦10,000 per person)",
    season: "Business Special",
    endDate: "June 30, 2023",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "Bridal Party Prep",
    description:
      "Get ready for the big day with our Bridal Party Package. Includes facials, manicures, and makeup application for the bride and up to 4 bridesmaids.",
    price: "₦150,000 (Save ₦50,000)",
    season: "Wedding Season",
    endDate: "August 31, 2023",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=640&auto=format&fit=crop",
  },
]

