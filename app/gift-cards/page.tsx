import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gift, CreditCard, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GiftCardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Gift Cards</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Give the gift of relaxation and wellness to your loved ones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Options */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                Choose Your Perfect Gift
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our gift cards are available in various denominations and can be used for any of our services
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map((card, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-900">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-700">{card.price}</p>
                  <p className="text-sm text-gray-500 mt-2">{card.validity}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Purchase Gift Card</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Purchasing and redeeming gift cards is simple and convenient
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Gift Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">
                Personalized Gifts
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Custom Gift Cards</h2>
              <p className="text-gray-600 md:text-xl">
                Looking for something special? We offer custom gift cards that can be tailored to specific services or
                packages. Add a personal message and choose a custom amount to create the perfect gift.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                    Contact Us for Custom Options <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1280&auto=format&fit=crop"
                alt="Custom gift card"
                width={1280}
                height={720}
                className="rounded-xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Gifts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1280&auto=format&fit=crop"
                alt="Corporate gift cards"
                width={1280}
                height={720}
                className="rounded-xl h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">
                Corporate Wellness
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Corporate Gift Cards</h2>
              <p className="text-gray-600 md:text-xl">
                Reward your employees or clients with the gift of wellness. Our corporate gift cards are perfect for
                employee appreciation, client gifts, or wellness programs. Bulk discounts available for orders of 10 or
                more gift cards.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                    Inquire About Corporate Rates <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Everything you need to know about our gift cards
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
                Ready to Give the Gift of Wellness?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Purchase a gift card today and make someone's day special
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-purple-900 hover:bg-purple-100">
                Purchase Gift Card <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us <Mail className="ml-2 h-4 w-4" />
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
const giftCards = [
  {
    title: "Essential Relaxation",
    description: "Perfect for a single treatment or service",
    price: "₦15,000",
    validity: "Valid for 6 months from purchase date",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Premium Wellness",
    description: "Ideal for a comprehensive spa experience",
    price: "₦30,000",
    validity: "Valid for 12 months from purchase date",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Luxury Package",
    description: "The ultimate spa indulgence for your loved ones",
    price: "₦50,000",
    validity: "Valid for 12 months from purchase date",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1280&auto=format&fit=crop",
  },
]

const steps = [
  {
    title: "Choose & Purchase",
    description:
      "Select your preferred gift card amount and complete your purchase online or by contacting us directly.",
    icon: Gift,
  },
  {
    title: "Receive Your Gift Card",
    description: "Get your gift card delivered via email or choose a physical card that can be picked up or delivered.",
    icon: Mail,
  },
  {
    title: "Redeem & Enjoy",
    description:
      "The recipient can book any service and redeem their gift card by providing the unique code at checkout.",
    icon: CreditCard,
  },
]

const faqs = [
  {
    question: "How long are gift cards valid for?",
    answer:
      "Our gift cards are valid for 6-12 months from the date of purchase, depending on the type of gift card. The expiration date will be clearly indicated on your gift card.",
  },
  {
    question: "Can gift cards be used for any service?",
    answer:
      "Yes, our gift cards can be used for any service we offer, including massage therapy, facial treatments, waxing services, skin tag removal, and pedicure & manicure services.",
  },
  {
    question: "Can I purchase a gift card for a specific service?",
    answer:
      "Yes, you can purchase a gift card for a specific service. Please contact us directly to arrange this, and we'll create a custom gift card for your chosen service.",
  },
  {
    question: "How can I check the balance on my gift card?",
    answer:
      "You can check your gift card balance by contacting us via phone or email with your gift card number. We'll be happy to provide you with the current balance.",
  },
  {
    question: "Can I use my gift card for multiple services?",
    answer:
      "Yes, you can use your gift card for multiple services until the balance is depleted. Any remaining balance will stay on the card until it's used up or until the card expires.",
  },
  {
    question: "What happens if I lose my gift card?",
    answer:
      "If you lose your physical gift card, please contact us as soon as possible with your purchase information. We may be able to issue a replacement if we can verify the purchase and if the card hasn't been redeemed.",
  },
]

