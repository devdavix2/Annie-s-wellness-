import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Wellness Blog</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Insights, tips, and advice for your wellness journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">
                Featured Article
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                {featuredArticle.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
              <p className="text-gray-600 md:text-xl">{featuredArticle.excerpt}</p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={`/blog/${featuredArticle.slug}`}>
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <Image
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                width={1280}
                height={720}
                className="rounded-xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Recent Articles</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Explore our latest wellness insights and tips
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-purple-900">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-purple-700 hover:text-purple-900 font-medium flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-purple-700 hover:bg-purple-800 text-white">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Browse by Category</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Find articles on topics that interest you
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/blog/category/${category.slug}`}>
                <div className="group relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.count} Articles</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                Subscribe to Our Newsletter
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Get the latest wellness tips, exclusive offers, and updates delivered to your inbox
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
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredArticle = {
  title: "The Benefits of Regular Massage Therapy for Stress Reduction",
  slug: "benefits-of-regular-massage-therapy",
  author: "Annie Anastesia",
  date: "March 15, 2023",
  readTime: "8 min read",
  excerpt:
    "Discover how incorporating regular massage therapy into your wellness routine can significantly reduce stress levels, improve sleep quality, and enhance overall well-being.",
  image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1280&auto=format&fit=crop",
}

const recentArticles = [
  {
    title: "Essential Oils for Relaxation and Stress Relief",
    slug: "essential-oils-for-relaxation",
    date: "March 10, 2023",
    readTime: "5 min read",
    excerpt: "Learn about the best essential oils for promoting relaxation and reducing stress in your daily life.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "How to Create a Spa Experience at Home",
    slug: "create-spa-experience-at-home",
    date: "March 5, 2023",
    readTime: "6 min read",
    excerpt: "Transform your bathroom into a luxurious spa retreat with these simple tips and affordable products.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "The Connection Between Skin Health and Overall Wellness",
    slug: "skin-health-and-wellness",
    date: "February 28, 2023",
    readTime: "7 min read",
    excerpt: "Explore the fascinating relationship between your skin's condition and your internal health.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "Benefits of Mobile Spa Services for Busy Professionals",
    slug: "mobile-spa-benefits-busy-professionals",
    date: "February 20, 2023",
    readTime: "4 min read",
    excerpt: "Discover why mobile spa services are the perfect solution for professionals with demanding schedules.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "Mindfulness Techniques to Enhance Your Spa Experience",
    slug: "mindfulness-techniques-spa-experience",
    date: "February 15, 2023",
    readTime: "5 min read",
    excerpt: "Learn how to incorporate mindfulness practices to get the most out of your spa treatments.",
    image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=640&auto=format&fit=crop",
  },
  {
    title: "The Science Behind Facial Treatments: What Really Works",
    slug: "science-behind-facial-treatments",
    date: "February 10, 2023",
    readTime: "9 min read",
    excerpt: "A deep dive into the scientific evidence supporting various facial treatments and skincare ingredients.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=640&auto=format&fit=crop",
  },
]

const categories = [
  {
    name: "Massage Therapy",
    slug: "massage-therapy",
    count: 12,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "Skincare",
    slug: "skincare",
    count: 9,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "Wellness Tips",
    slug: "wellness-tips",
    count: 15,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "Self-Care",
    slug: "self-care",
    count: 8,
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=640&auto=format&fit=crop",
  },
]

