"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Get in touch to book your mobile spa experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Get In Touch</h2>
                <p className="text-gray-600 md:text-xl">
                  We'd love to hear from you. Contact us for bookings, inquiries, or to learn more about our mobile spa
                  services.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-purple-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-purple-900">Address</h3>
                    <p className="text-gray-600">
                      Block 13, Plot 7, 2nd Avenue, Gwarimpa, close to IC World, Abuja, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-purple-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-purple-900">Phone</h3>
                    <p className="text-gray-600">
                      <Link href="tel:+2348101811316" className="hover:text-purple-700">
                        0810 181 1316
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-purple-900">Email</h3>
                    <p className="text-gray-600">
                      <Link href="mailto:annastesia432@gmail.com" className="hover:text-purple-700">
                        annastesia432@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-purple-900">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-gray-600">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border border-purple-100 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">Find Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">Visit our location or we can come to you</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6553163051096!2d7.4047873!3d9.1074683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd7c0ed%3A0x53256ca8a47dd259!2sGwarinpa%2C%20Abuja!5e0!3m2!1sen!2sng!4v1648226456789!5m2!1sen!2sng"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Annie's Wellness Sanctuary Spa Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

