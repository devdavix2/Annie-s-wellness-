"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function BookingPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState("")
  const [service, setService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setService(value)
  }

  const handleTimeChange = (value: string) => {
    setTime(value)
  }

  const handleNextStep = () => {
    if (step === 1 && !service) {
      toast({
        title: "Please select a service",
        description: "You need to select a service to continue.",
        variant: "destructive",
      })
      return
    }

    if (step === 2 && (!date || !time)) {
      toast({
        title: "Please select date and time",
        description: "You need to select both a date and time to continue.",
        variant: "destructive",
      })
      return
    }

    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // In a real application, you would send this data to your server
    // For demo purposes, we'll simulate a successful booking
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsComplete(true)
      toast({
        title: "Booking Confirmed!",
        description: "Your spa appointment has been successfully booked.",
      })

      // Reset form after successful submission
      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Book Your Spa Experience</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">Schedule your personalized mobile spa service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          {isComplete ? (
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-purple-900">Booking Confirmed!</CardTitle>
                <CardDescription>Your appointment has been successfully scheduled</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4 py-8">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <div className="text-center space-y-2">
                  <p className="text-lg font-medium">Thank you for booking with Annie's Wellness Sanctuary Spa</p>
                  <p>We've sent a confirmation email to {formData.email}</p>
                  <p className="mt-4 font-medium">Appointment Details:</p>
                  <p>Service: {service}</p>
                  <p>Date: {date ? format(date, "PPP") : ""}</p>
                  <p>Time: {time}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => router.push("/")} className="bg-purple-700 hover:bg-purple-800 text-white">
                  Return to Home
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-900">Book Your Appointment</CardTitle>
                <CardDescription>Complete the form below to schedule your spa service</CardDescription>
                <div className="flex justify-between items-center mt-4">
                  <div className={`flex items-center ${step >= 1 ? "text-purple-700" : "text-gray-400"}`}>
                    <div
                      className={`rounded-full w-8 h-8 flex items-center justify-center border-2 ${step >= 1 ? "border-purple-700 bg-purple-100" : "border-gray-300"}`}
                    >
                      1
                    </div>
                    <span className="ml-2 text-sm font-medium">Service</span>
                  </div>
                  <div className={`h-0.5 w-12 ${step >= 2 ? "bg-purple-700" : "bg-gray-300"}`}></div>
                  <div className={`flex items-center ${step >= 2 ? "text-purple-700" : "text-gray-400"}`}>
                    <div
                      className={`rounded-full w-8 h-8 flex items-center justify-center border-2 ${step >= 2 ? "border-purple-700 bg-purple-100" : "border-gray-300"}`}
                    >
                      2
                    </div>
                    <span className="ml-2 text-sm font-medium">Date & Time</span>
                  </div>
                  <div className={`h-0.5 w-12 ${step >= 3 ? "bg-purple-700" : "bg-gray-300"}`}></div>
                  <div className={`flex items-center ${step >= 3 ? "text-purple-700" : "text-gray-400"}`}>
                    <div
                      className={`rounded-full w-8 h-8 flex items-center justify-center border-2 ${step >= 3 ? "border-purple-700 bg-purple-100" : "border-gray-300"}`}
                    >
                      3
                    </div>
                    <span className="ml-2 text-sm font-medium">Details</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Select Service</Label>
                        <Select value={service} onValueChange={handleServiceChange}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="massage">Massage Therapy</SelectItem>
                            <SelectItem value="facial">Facial Treatment</SelectItem>
                            <SelectItem value="waxing">Waxing Service</SelectItem>
                            <SelectItem value="skintag">Skin Tag Removal</SelectItem>
                            <SelectItem value="mani-pedi">Pedicure & Manicure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="pt-4">
                        <p className="text-sm text-gray-600 mb-4">
                          All our services are mobile - we come to your location for maximum convenience.
                        </p>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Select Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={
                                (date) => date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0 // Disable Sundays
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Select Time</Label>
                        <Select value={time} onValueChange={handleTimeChange}>
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableTimes.map((t) => (
                              <SelectItem key={t} value={t}>
                                {t}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
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
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
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
                        <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                        <Textarea
                          id="specialRequests"
                          name="specialRequests"
                          placeholder="Any special requests or notes for your appointment"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          className="min-h-[100px]"
                        />
                      </div>
                      <div className="pt-4">
                        <p className="text-sm text-gray-600">
                          By booking an appointment, you agree to our cancellation policy. Appointments can be
                          rescheduled or cancelled up to 24 hours in advance.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                    className="border-purple-700 text-purple-700 hover:bg-purple-50"
                  >
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-purple-700 hover:bg-purple-800 text-white"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-purple-700 hover:bg-purple-800 text-white"
                  >
                    {isSubmitting ? "Processing..." : "Confirm Booking"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}

