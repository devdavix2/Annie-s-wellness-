"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Menu } from "lucide-react"
import { useState } from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Annie's Wellness Sanctuary Spa"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-purple-900 hidden sm:inline-block">Annie's Wellness</span>
            </Link>
            <nav className="hidden md:flex mx-auto space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-purple-700 transition-colors">
                About
              </Link>
              <Link href="/membership" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Membership
              </Link>
              <Link href="/gift-cards" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Gift Cards
              </Link>
              <Link href="/special-offers" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Special Offers
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/booking"
                className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Book Now
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <Link href="/" className="flex items-center space-x-2">
                        <Image
                          src="/images/logo.png"
                          alt="Annie's Wellness Sanctuary Spa"
                          width={40}
                          height={40}
                          className="h-8 w-auto"
                        />
                        <span className="font-bold text-lg text-purple-900">Annie's Wellness</span>
                      </Link>
                    </div>
                    <nav className="flex flex-col space-y-4">
                      <Link href="/" className="text-base font-medium hover:text-purple-700 transition-colors">
                        Home
                      </Link>
                      <Link href="/services" className="text-base font-medium hover:text-purple-700 transition-colors">
                        Services
                      </Link>
                      <Link href="/about" className="text-base font-medium hover:text-purple-700 transition-colors">
                        About
                      </Link>
                      <Link
                        href="/membership"
                        className="text-base font-medium hover:text-purple-700 transition-colors"
                      >
                        Membership
                      </Link>
                      <Link
                        href="/gift-cards"
                        className="text-base font-medium hover:text-purple-700 transition-colors"
                      >
                        Gift Cards
                      </Link>
                      <Link
                        href="/special-offers"
                        className="text-base font-medium hover:text-purple-700 transition-colors"
                      >
                        Special Offers
                      </Link>
                      <Link href="/blog" className="text-base font-medium hover:text-purple-700 transition-colors">
                        Blog
                      </Link>
                      <Link href="/contact" className="text-base font-medium hover:text-purple-700 transition-colors">
                        Contact
                      </Link>
                      <Link
                        href="/booking"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-2"
                      >
                        Book Now
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="w-full border-t bg-background">
          <div className="container py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/images/logo.png"
                    alt="Annie's Wellness Sanctuary Spa"
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <span className="font-bold text-xl text-purple-900">Annie's Wellness</span>
                </Link>
                <p className="text-sm text-gray-600">Your Mobile Spa Experience – Relax, Rejuvenate, Revitalize</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-purple-900">Quick Links</h3>
                <nav className="flex flex-col space-y-2">
                  <Link href="/" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Home
                  </Link>
                  <Link href="/services" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Services
                  </Link>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    About
                  </Link>
                  <Link href="/membership" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Membership
                  </Link>
                  <Link href="/gift-cards" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Gift Cards
                  </Link>
                  <Link
                    href="/special-offers"
                    className="text-sm text-gray-600 hover:text-purple-700 transition-colors"
                  >
                    Special Offers
                  </Link>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Contact
                  </Link>
                  <Link href="/booking" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Book Now
                  </Link>
                </nav>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-purple-900">Services</h3>
                <nav className="flex flex-col space-y-2">
                  <Link href="/services" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Massage Therapy
                  </Link>
                  <Link href="/services" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Facial Treatments
                  </Link>
                  <Link href="/services" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Waxing Services
                  </Link>
                  <Link href="/services" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Skin Tag Removal
                  </Link>
                  <Link href="/services" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                    Pedicure & Manicure
                  </Link>
                </nav>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-purple-900">Contact</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Block 13, Plot 7, 2nd Avenue, Gwarimpa, close to IC World, Abuja, Nigeria</p>
                  <p>
                    <Link href="tel:+2348101811316" className="hover:text-purple-700">
                      0810 181 1316
                    </Link>
                  </p>
                  <p>
                    <Link href="mailto:annastesia432@gmail.com" className="hover:text-purple-700">
                      annastesia432@gmail.com
                    </Link>
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-purple-700">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-purple-700">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-purple-700">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center">
              <p className="text-xs text-gray-600">
                &copy; {new Date().getFullYear()} Annie's Wellness Sanctuary Spa. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

