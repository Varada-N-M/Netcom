"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

interface Testimonial {
  id: number
  name: string
  review: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Asmabi Kk",
    review:
      "Good dealing with customers. Prompt service and response. Was very helpful for me to get the repairs done in time..... keep it up",
    rating: 5,
  },
  {
    id: 2,
    name: "Shehna A",
    review:
      "Good service You can go for it without any doubts. The staffs and other technicians are very polite and friendly. strongly recommend..",
    rating: 5,
  },
  {
    id: 3,
    name: "Praveen Praveen",
    review:
      "Good dealing With customers. Prompt service and response . Was very helpful for me to get the repairs done in time",
    rating: 5,
  },
  {
    id: 4,
    name: "Aslam Laff",
    review:
      "Best Laptop service centre in Trivandrum. Even your problem is small they are ready to help it and solve it. Genuine and trustworthy people.",
    rating: 5,
  },
  {
    id: 5,
    name: "Santhini Ajith",
    review:
      "Excellent laptop service provider & good customer relations, really impressed with their affordable price, and all the very best to the team",
    rating: 5,
  },
  {
    id: 6,
    name: "Aswin Palliyil Balan",
    review:
      "Good dealing with customers. Prompt service and response. Was very helpful for me to get the repairs done in time.",
    rating: 5,
  },
  {
    id: 7,
    name: "Anandhu Rajesh",
    review: "Excellent laptop service provider and good customer relations.Realy impressed with their affordable price",
    rating: 5,
  },
  {
    id: 8,
    name: "Anand Kalarikkal",
    review:
      "Best laptop service in Kochi, good service and customer support. Highly recommended for hardware and software repair services.",
    rating: 5,
  },
  {
    id: 9,
    name: "Ananda Krishnan",
    review: "Netcom Services gets 5 stars from me. They were very friendly and very helpful. Service was excellent",
    rating: 5,
  },
  {
    id: 10,
    name: "Sneha shaiju",
    review:
      "Good dealing with customers.Prompt service and response.Was very helpful for me to get the repairs done in time.",
    rating: 5,
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsPerView) : Math.max(0, prev - itemsPerView),
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [itemsPerView])

  return (
    <section 
      className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/image.jpeg')" }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide drop-shadow-lg">
            CUSTOMER SATISFACTION IS IMPORTANT
          </h2>
          <p className="text-gray-100 text-lg max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the
            industry.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
                  <Card className="h-full bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl">
                    <CardContent className="p-8">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                            <p className="text-gray-600 text-sm">Verified Customer</p>
                          </div>
                        </div>

                        <StarRating rating={testimonial.rating} />

                        <blockquote className="text-gray-700 text-base leading-relaxed italic flex-grow">
                          "{testimonial.review}"
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white shadow-xl rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white shadow-xl rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / itemsPerView) === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index * itemsPerView)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.google.com/search?client=firefox-b-d&q=netcom+services+kochi#lrd=0x3b080d6ade467d97:0x25819822a80bc7e9,1,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-xl text-lg backdrop-blur-sm"
          >
            View On Google
          </a>
        </div>
      </div>
    </section>
  )
}