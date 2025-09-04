import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1702743599501-a821d0b38b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzU2Nzg3Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $899',
    rating: 4.8,
    reviews: 324,
    badge: 'Most Popular',
    description: 'Pristine beaches, ancient temples, and rich culture'
  },
  {
    id: 2,
    name: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTY4OTk3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $1,299',
    rating: 4.9,
    reviews: 186,
    badge: 'Adventure',
    description: 'Breathtaking peaks, pristine lakes, and mountain adventures'
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1742516014153-6cae2ae4a6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHRyYXZlbHxlbnwxfHx8fDE3NTY4OTI3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $1,099',
    rating: 4.7,
    reviews: 412,
    badge: 'Cultural',
    description: 'Modern metropolis meets traditional Japanese culture'
  },
  {
    id: 4,
    name: 'Ancient Temples',
    image: 'https://images.unsplash.com/photo-1644130919109-b3376a0368e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdGVtcGxlJTIwY3VsdHVyZXxlbnwxfHx8fDE3NTY5MDI4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $799',
    rating: 4.6,
    reviews: 203,
    badge: 'Heritage',
    description: 'Explore ancient civilizations and historical wonders'
  },
  {
    id: 5,
    name: 'African Safari',
    image: 'https://images.unsplash.com/photo-1602410125631-7e736e36797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTY4MzE5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $2,199',
    rating: 4.9,
    reviews: 156,
    badge: 'Wildlife',
    description: 'Unforgettable wildlife encounters in their natural habitat'
  },
  {
    id: 6,
    name: 'Luxury Cruise',
    image: 'https://images.unsplash.com/photo-1746900830074-baf6ddf20bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwb2NlYW58ZW58MXx8fHwxNzU2OTAyODU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $1,599',
    rating: 4.8,
    reviews: 287,
    badge: 'Luxury',
    description: 'Premium ocean cruising with world-class amenities'
  }
];

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular travel destinations, handpicked for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {destination.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                    {destination.name}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{destination.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({destination.reviews} reviews)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}