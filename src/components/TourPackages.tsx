import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Calendar, Clock, Users, MapPin, Star, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const tourPackages = [
  {
    id: 1,
    name: 'Bali Cultural Explorer',
    destination: 'Bali, Indonesia',
    duration: '7 Days / 6 Nights',
    groupSize: 'Max 12 people',
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1702743599501-a821d0b38b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzU2Nzg3Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: [
      'Ancient temple visits',
      'Traditional cooking class',
      'Rice terrace trekking',
      'Balinese dance performance',
      'Beach relaxation time'
    ],
    includes: [
      'Accommodation (4-star hotels)',
      'All meals included',
      'Professional tour guide',
      'Transportation',
      'Entry fees to attractions'
    ],
    nextDepartures: ['Mar 15, 2025', 'Mar 29, 2025', 'Apr 12, 2025']
  },
  {
    id: 2,
    name: 'Swiss Alps Adventure',
    destination: 'Switzerland',
    duration: '5 Days / 4 Nights',
    groupSize: 'Max 8 people',
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTY4OTk3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: [
      'Matterhorn viewing',
      'Scenic train rides',
      'Mountain hiking',
      'Alpine lake visits',
      'Cable car adventures'
    ],
    includes: [
      'Mountain lodge accommodation',
      'Breakfast and dinner',
      'Expert mountain guide',
      'All transportation',
      'Safety equipment'
    ],
    nextDepartures: ['Jun 1, 2025', 'Jun 15, 2025', 'Jul 1, 2025']
  },
  {
    id: 3,
    name: 'Kenya Safari Expedition',
    destination: 'Kenya, Africa',
    duration: '10 Days / 9 Nights',
    groupSize: 'Max 6 people',
    price: 2199,
    originalPrice: 2799,
    rating: 4.9,
    reviews: 72,
    image: 'https://images.unsplash.com/photo-1602410125631-7e736e36797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTY4MzE5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: [
      'Big Five wildlife viewing',
      'Masai Mara game drives',
      'Cultural village visits',
      'Hot air balloon safari',
      'Conservation center tours'
    ],
    includes: [
      'Safari lodge accommodation',
      'All meals and drinks',
      'Professional safari guide',
      '4WD safari vehicles',
      'Park entrance fees'
    ],
    nextDepartures: ['May 10, 2025', 'Aug 5, 2025', 'Oct 15, 2025']
  }
];

export function TourPackages() {
  const [selectedTour, setSelectedTour] = useState<typeof tourPackages[0] | null>(null);

  return (
    <section id="tours" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Tour Packages</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted itineraries for the perfect travel experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  Save ${tour.originalPrice - tour.price}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{tour.name}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {tour.destination}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-secondary text-secondary" />
                    {tour.rating} ({tour.reviews})
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {tour.groupSize}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold">Tour Highlights:</p>
                  <ul className="text-sm space-y-1">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-3 h-3 mr-2 text-secondary" />
                        {highlight}
                      </li>
                    ))}
                    {tour.highlights.length > 3 && (
                      <li className="text-muted-foreground text-xs">
                        +{tour.highlights.length - 3} more highlights
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-primary">${tour.price}</span>
                    <span className="text-sm line-through text-muted-foreground ml-2">
                      ${tour.originalPrice}
                    </span>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => setSelectedTour(tour)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      {selectedTour && (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{selectedTour.name}</DialogTitle>
                            <DialogDescription>
                              Explore the details of this amazing tour package including highlights, inclusions, and pricing.
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            <div className="relative">
                              <ImageWithFallback
                                src={selectedTour.image}
                                alt={selectedTour.name}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h3 className="font-semibold mb-2">Tour Highlights</h3>
                                <ul className="space-y-1 text-sm">
                                  {selectedTour.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-center">
                                      <Check className="w-4 h-4 mr-2 text-secondary" />
                                      {highlight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h3 className="font-semibold mb-2">Package Includes</h3>
                                <ul className="space-y-1 text-sm">
                                  {selectedTour.includes.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                      <Check className="w-4 h-4 mr-2 text-secondary" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-semibold mb-2">Next Departures</h3>
                              <div className="flex space-x-2">
                                {selectedTour.nextDepartures.map((date, index) => (
                                  <Badge key={index} variant="outline">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {date}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t">
                              <div>
                                <span className="text-3xl font-bold text-primary">
                                  ${selectedTour.price}
                                </span>
                                <span className="text-lg line-through text-muted-foreground ml-2">
                                  ${selectedTour.originalPrice}
                                </span>
                                <p className="text-sm text-muted-foreground">per person</p>
                              </div>
                              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                                Book This Tour
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}