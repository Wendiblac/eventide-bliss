import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { EventCard } from "@/components/ui/event-card";
import { 
  Search, 
  MapPin, 
  Calendar, 
  TrendingUp,
  Music,
  Briefcase,
  Heart,
  Mic,
  Trophy,
  Palette
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-concert.jpg";
import techEventImage from "@/assets/event-tech.jpg";
import weddingEventImage from "@/assets/event-wedding.jpg";
import comedyEventImage from "@/assets/event-comedy.jpg";

const categories = [
  { name: "Music", icon: Music, count: 120, color: "from-pink-500 to-rose-500" },
  { name: "Business", icon: Briefcase, count: 85, color: "from-blue-500 to-indigo-500" },
  { name: "Wedding", icon: Heart, count: 45, color: "from-rose-500 to-pink-500" },
  { name: "Comedy", icon: Mic, count: 32, color: "from-yellow-500 to-orange-500" },
  { name: "Sports", icon: Trophy, count: 67, color: "from-green-500 to-emerald-500" },
  { name: "Arts", icon: Palette, count: 23, color: "from-purple-500 to-violet-500" },
];

const featuredEvents = [
  {
    id: "1",
    title: "Summer Music Festival 2024",
    image: heroImage,
    date: "July 15, 2024",
    time: "6:00 PM",
    location: "Central Park, New York",
    price: "From $89",
    category: "Music",
    attendees: 2840,
    rating: 4.8,
    featured: true,
  },
  {
    id: "2",
    title: "Tech Innovation Summit",
    image: techEventImage,
    date: "August 3, 2024",
    time: "9:00 AM",
    location: "Convention Center, San Francisco",
    price: "From $159",
    category: "Business",
    attendees: 1200,
    rating: 4.9,
  },
  {
    id: "3",
    title: "Garden Wedding Showcase",
    image: weddingEventImage,
    date: "June 28, 2024",
    time: "2:00 PM",
    location: "Botanical Gardens, Portland",
    price: "From $45",
    category: "Wedding",
    attendees: 150,
    rating: 4.7,
  },
  {
    id: "4",
    title: "Comedy Night Live",
    image: comedyEventImage,
    date: "July 8, 2024",
    time: "8:00 PM",
    location: "Laugh Factory, Los Angeles",
    price: "From $35",
    category: "Comedy",
    attendees: 340,
    rating: 4.6,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Concert crowd"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 gradient-hero opacity-60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30 animate-float">
              <TrendingUp className="w-4 h-4 mr-2" />
              #1 Event Platform
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover Amazing
              <span className="block bg-gradient-to-r from-secondary-accent to-tertiary-accent bg-clip-text text-transparent">
                Events Near You
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              From concerts to conferences, find and book tickets for the events
              that matter to you.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                  <Input
                    placeholder="Search events, artists, venues..."
                    className="pl-10 bg-transparent border-0 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                  <Input
                    placeholder="Location"
                    className="pl-10 bg-transparent border-0 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <Button
                  size="lg"
                  className="gradient-accent text-white font-semibold button-glow px-8"
                >
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link to="/events">
                <Button
                  variant="outline"
                  className="border-white/30 bg-gradient-to-r from-secondary-accent to-tertiary-accent bg-clip-text text-transparent hover:bg-white/20"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Browse All Events
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover events that match your interests and passions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to={`/events?category=${category.name.toLowerCase()}`}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card rounded-2xl p-6 text-center shadow-card card-hover animate-scale-in border border-border/50">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:animate-float`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-smooth">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} events
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked events you won't want to miss
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="hidden md:flex">
                View All Events
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link to="/events">
              <Button variant="outline">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Create Your Own Event?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of organizers who trust EventHub to manage their
              events and sell tickets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              >
                Create Event
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-gradient-to-r from-secondary-accent to-tertiary-accent bg-clip-text text-transparent hover:bg-white/20 px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}