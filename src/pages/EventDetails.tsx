import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  CalendarDays, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Share2,
  Heart,
  Ticket,
  User,
  Phone,
  Mail,
  Globe,
  Banknote
} from "lucide-react";
import heroImage from "@/assets/hero-concert.jpg";

// Mock event data - in a real app this would come from an API
const mockEvent = {
  id: "1",
  title: "Summer Music Festival 2024",
  image: heroImage,
  date: "July 15, 2024",
  time: "6:00 PM",
  endTime: "11:00 PM",
  location: "Central Park, New York",
  fullAddress: "Central Park, 5th Ave to Central Park West, 59th St to 110th St, New York, NY 10022",
  price: "From $89",
  category: "Music",
  attendees: 2840,
  rating: 4.8,
  reviews: 324,
  featured: true,
  description: `Join us for the most spectacular summer music festival of 2024! Experience an unforgettable night with world-class artists, amazing food, and incredible vibes under the stars.

This year's lineup features some of the biggest names in music across multiple genres. From chart-topping pop artists to indie rock sensations, electronic music pioneers to acoustic folk performers - there's something for every music lover.

The festival grounds will feature multiple stages, art installations, gourmet food trucks, craft beverage stations, and interactive experiences. Come early to explore everything the festival has to offer!`,
  organizer: {
    name: "NYC Music Events",
    avatar: "/placeholder.svg",
    email: "info@nycmusicevents.com",
    phone: "+1 (555) 123-4567",
    website: "www.nycmusicevents.com",
    rating: 4.9,
    eventsHosted: 127
  },
  ticketTypes: [
    {
      id: "1",
      name: "General Admission",
      price: 89,
      description: "Access to main festival area, food court, and merchandise stands",
      available: 245,
      perks: ["Main stage access", "Food court access", "Free program"]
    },
    {
      id: "2",
      name: "VIP Experience",
      price: 159,
      description: "Premium viewing area, complimentary drinks, and exclusive merchandise",
      available: 67,
      perks: ["VIP viewing area", "3 complimentary drinks", "Exclusive merchandise", "VIP restrooms", "Fast track entry"]
    },
    {
      id: "3",
      name: "Premium Package",
      price: 289,
      description: "Ultimate festival experience with backstage access and meet & greet",
      available: 12,
      perks: ["All VIP perks", "Backstage access", "Meet & greet opportunity", "Professional photos", "Premium gift bag"]
    }
  ],
  highlights: [
    "5+ hours of live music",
    "10+ world-class artists",
    "Gourmet food vendors",
    "Art installations",
    "Professional photography",
    "Merchandise booths"
  ]
};

export default function EventDetails() {
  const { id } = useParams();
  
  // In a real app, you'd fetch the event data based on the ID
  const event = mockEvent;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <Badge className="gradient-accent text-white border-0">
                    {event.category}
                  </Badge>
                  {event.featured && (
                    <Badge className="bg-secondary-accent text-white border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {event.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="w-5 h-5" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{event.time} - {event.endTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="lg" className="border-white/30 text-black hover:bg-white/20">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-black hover:bg-white/20">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card className="p-8 shadow-card border-0 gradient-card">
              <h2 className="text-2xl font-bold mb-6">About This Event</h2>
              <div className="prose prose-gray max-w-none">
                {event.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Event Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  {event.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 gradient-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Location Section */}
            <Card className="p-8 shadow-card border-0 gradient-card">
              <h2 className="text-2xl font-bold mb-6">Event Location</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{event.location}</h3>
                    <p className="text-muted-foreground">{event.fullAddress}</p>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive map would go here</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Organizer Section */}
            <Card className="p-8 shadow-card border-0 gradient-card">
              <h2 className="text-2xl font-bold mb-6">Event Organizer</h2>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-lg">{event.organizer.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{event.organizer.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {event.organizer.eventsHosted} events hosted
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{event.organizer.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{event.organizer.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>{event.organizer.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Selection */}
            <Card className="p-6 shadow-card border-0 gradient-card sticky top-24">
              <h3 className="text-xl font-bold mb-6">Select Tickets</h3>
              
              <div className="space-y-4">
                {event.ticketTypes.map((ticket) => (
                  <div key={ticket.id} className="border border-border rounded-lg p-4 hover:border-primary/50 transition-smooth">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{ticket.name}</h4>
                        <p className="text-sm text-muted-foreground">{ticket.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">${ticket.price}</div>
                        <div className="text-sm text-muted-foreground">{ticket.available} left</div>
                      </div>
                    </div>
                    
                    <div className="space-y-1 mb-4">
                      {ticket.perks.map((perk, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 gradient-primary rounded-full" />
                          <span className="text-muted-foreground">{perk}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full gradient-primary text-primary-foreground button-glow">
                      <Ticket className="w-4 h-4 mr-2" />
                      Select Tickets
                    </Button>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Banknote className="w-4 h-4" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Ticket className="w-4 h-4" />
                  <span>Mobile tickets available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Group discounts available</span>
                </div>
              </div>
            </Card>

            {/* Event Stats */}
            <Card className="p-6 shadow-card border-0 gradient-card">
              <h3 className="text-lg font-semibold mb-4">Event Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Attending</span>
                  <span className="font-semibold">{event.attendees}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{event.rating}</span>
                    <span className="text-sm text-muted-foreground">({event.reviews} reviews)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <Badge variant="outline">{event.category}</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}