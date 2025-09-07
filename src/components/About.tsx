import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Globe, Users, Award, Shield, Heart, MapPin } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Express Network',
    description: 'Access to 50+ destinations across 6 continents with rapid booking and local expertise'
  },
  {
    icon: Users,
    title: 'Expert Guides',
    description: 'Professional, certified guides with deep local knowledge and passion'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as "Best Travel Agency 2024" by Travel Excellence Awards'
  },
  {
    icon: Shield,
    title: 'Express Support',
    description: '24/7 rapid response support, comprehensive insurance, and priority assistance'
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    description: 'Tailored experiences crafted to match your interests and preferences'
  },
  {
    icon: MapPin,
    title: 'Local Partnerships',
    description: 'Strong relationships with local communities and sustainable tourism'
  }
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '2000+', label: 'Happy Travelers' },
  { number: '50+', label: 'Destinations' },
  { number: '98%', label: 'Satisfaction Rate' }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground">About J-Express Travel and Tours</Badge>
          <h2 className="text-4xl font-bold mb-6">Your Journey Begins With Us</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded in 2014, J-Express Travel and Tours has been creating extraordinary travel experiences for adventurers, 
            culture enthusiasts, and everyone in between. We believe that travel has the power to transform 
            lives, broaden perspectives, and create lasting memories through express service and personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose J-Express?</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience and thousands of satisfied travelers, we've built our reputation 
            on delivering fast, reliable, and extraordinary travel experiences. Our express service approach 
            ensures quick responses, efficient booking processes, and seamless travel arrangements that save 
            you time while creating unforgettable memories.
          </p>
        </div>
      </div>
    </section>
  );
}