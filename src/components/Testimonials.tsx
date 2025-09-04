import { Card, CardContent } from "./ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    tour: "Bali Cultural Explorer",
    comment:
      "Absolutely incredible experience! The tour was perfectly organized, and our guide was knowledgeable and friendly. The temples were breathtaking, and the cooking class was so much fun. Would definitely book with J-Express Travel and Tours again!",
    avatar: "SJ",
    date: "January 2025",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    tour: "Swiss Alps Adventure",
    comment:
      "The Swiss Alps tour exceeded all expectations! The mountain views were spectacular, and the hiking trails were well-chosen for our group. The accommodation was excellent, and every detail was taken care of.",
    avatar: "MC",
    date: "December 2024",
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "London, UK",
    rating: 5,
    tour: "Kenya Safari Expedition",
    comment:
      "A once-in-a-lifetime experience! Seeing the Big Five in their natural habitat was magical. Our safari guide was incredibly knowledgeable about wildlife, and the hot air balloon ride was unforgettable.",
    avatar: "ET",
    date: "November 2024",
  },
  {
    id: 4,
    name: "David Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    tour: "Tokyo Cultural Journey",
    comment:
      "J-Express Travel and Tours made our Japan trip seamless and amazing. From traditional temples to modern districts, we experienced the best of both worlds. The local food tours were a highlight!",
    avatar: "DR",
    date: "October 2024",
  },
  {
    id: 5,
    name: "Lisa Wang",
    location: "Sydney, Australia",
    rating: 5,
    tour: "Mediterranean Cruise",
    comment:
      "The luxury cruise package was perfect for our anniversary. Beautiful destinations, excellent service, and wonderful fellow travelers. The excursions at each port were well-planned and enjoyable.",
    avatar: "LW",
    date: "September 2024",
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Los Angeles, USA",
    rating: 5,
    tour: "Ancient Wonders Tour",
    comment:
      "As a history enthusiast, this tour was a dream come true. The ancient temples and archaeological sites were incredible, and our historian guide brought everything to life with fascinating stories.",
    avatar: "JW",
    date: "August 2024",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers who have
            explored the world with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {testimonial.tour}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  4.9
                </div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Destinations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}