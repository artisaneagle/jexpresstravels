import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Eye, Target } from 'lucide-react';
import visionImage from 'figma:asset/6fb551d531b538dd16467b5791c70b2a2bfae819.png';

export function VisionMission() {
  return (
    <section id="vision" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Company Values</Badge>
          <h2 className="text-4xl font-bold mb-4">Our Vision & Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving excellence in travel services through our commitment to quality, 
            customer satisfaction, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision & Mission Cards */}
          <div className="space-y-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground">
                  Our vision is to be the number one travel provider, by choice of our 
                  valued clients that provides excellent travel deals excellent customer 
                  service that will exceed their travel expectation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-secondary-foreground">Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground">
                  To exceed travel expectation of our existing clients and attract new 
                  clients and turn them into satisfied and loyal clients through providing 
                  excellent customer services, reasonable priced packages and hassle 
                  free travels.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vision Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={visionImage} 
                alt="J-Express Travel and Tours - Company Vision & Mission"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">E</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Excellence</h4>
              <p className="text-muted-foreground">
                Delivering exceptional travel experiences that exceed expectations through 
                attention to detail and professional service.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-background border border-border/50 hover:border-secondary/30 transition-colors">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-foreground">I</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Integrity</h4>
              <p className="text-muted-foreground">
                Building trust through honest communication, transparent pricing, 
                and reliable service delivery.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">C</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Care</h4>
              <p className="text-muted-foreground">
                Providing personalized attention and support to ensure every traveler 
                feels valued and cared for throughout their journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}