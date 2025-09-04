import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, MapPin, Users, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1702743599501-a821d0b38b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzU2Nzg3Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tropical Paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore the World
            <span className="block text-4xl md:text-6xl text-secondary">Your Way</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience seamless travel with J-Express Travel and Tours. We deliver exceptional journeys and unforgettable memories worldwide.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Destination
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Where to?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bali">Bali, Indonesia</SelectItem>
                    <SelectItem value="paris">Paris, France</SelectItem>
                    <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                    <SelectItem value="maldives">Maldives</SelectItem>
                    <SelectItem value="switzerland">Switzerland</SelectItem>
                    <SelectItem value="kenya">Kenya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Departure Date
                </label>
                <Input type="date" className="w-full" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Travelers
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="How many?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5+">5+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Search className="w-5 h-5 mr-2" />
                Search Tours
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}