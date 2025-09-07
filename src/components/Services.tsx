import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Plane, 
  MapPin, 
  Crown, 
  Building, 
  FileText, 
  Shield, 
  Car, 
  CreditCard,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Airline Flights',
    description: 'Domestic and international flight bookings with competitive rates and flexible schedules.',
    features: ['Best price guarantee', 'Multiple airline options', 'Easy rebooking', '24/7 support']
  },
  {
    icon: MapPin,
    title: 'Tour Packages',
    description: 'Curated tour packages to amazing destinations worldwide with professional guides.',
    features: ['All-inclusive packages', 'Professional guides', 'Group discounts', 'Custom itineraries']
  },
  {
    icon: Crown,
    title: 'Exclusive Tours',
    description: 'Premium, personalized travel experiences designed for discerning travelers.',
    features: ['VIP treatment', 'Private guides', 'Luxury accommodations', 'Exclusive access']
  },
  {
    icon: Building,
    title: 'Hotel Reservations',
    description: 'Wide selection of accommodations from budget-friendly to luxury hotels worldwide.',
    features: ['Best rate guarantee', 'Instant confirmation', 'Free cancellation', 'Loyalty rewards']
  },
  {
    icon: FileText,
    title: 'Visa Processing',
    description: 'Complete visa assistance and documentation support for hassle-free travel.',
    features: ['Document guidance', 'Application assistance', 'Status tracking', 'Expert consultation']
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive travel protection for peace of mind during your journeys.',
    features: ['Medical coverage', 'Trip cancellation', 'Baggage protection', 'Emergency assistance']
  },
  {
    icon: Car,
    title: 'Car Rentals',
    description: 'Reliable vehicle rentals for convenient transportation at your destination.',
    features: ['Wide vehicle selection', 'Competitive rates', 'GPS included', 'Insurance options']
  },
  {
    icon: CreditCard,
    title: 'Bills Payment',
    description: 'Convenient payment solutions for your travel expenses and other bills.',
    features: ['Multiple payment options', 'Secure transactions', 'Instant processing', 'Receipt tracking']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From flight bookings to complete travel packages, we offer comprehensive services 
            to make your travel experience seamless and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Service?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is ready to create personalized solutions 
              for your unique travel needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Our Experts
              </Button>
              <Button size="lg" variant="outline">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}