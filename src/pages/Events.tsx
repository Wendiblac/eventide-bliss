import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { EventCard } from "@/components/ui/event-card";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar,
  SlidersHorizontal,
  Grid3X3,
  List,
  Loader2
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/hero-concert.jpg";
import techEventImage from "@/assets/event-tech.jpg";
import weddingEventImage from "@/assets/event-wedding.jpg";
import comedyEventImage from "@/assets/event-comedy.jpg";

const events = [
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
  {
    id: "5",
    title: "Jazz & Blues Evening",
    image: heroImage,
    date: "July 22, 2024",
    time: "7:30 PM",
    location: "Blue Note, New York",
    price: "From $65",
    category: "Music",
    attendees: 180,
    rating: 4.5,
  },
  {
    id: "6",
    title: "Startup Pitch Competition",
    image: techEventImage,
    date: "August 10, 2024",
    time: "10:00 AM",
    location: "Tech Hub, Austin",
    price: "From $25",
    category: "Business",
    attendees: 450,
    rating: 4.4,
  },
];

const categories = ["All", "Music", "Business", "Wedding", "Comedy", "Sports", "Arts"];
const locations = ["All Locations", "New York", "San Francisco", "Los Angeles", "Austin", "Portland"];
const sortOptions = ["Newest", "Popular", "Price: Low to High", "Price: High to Low", "Date"];

export default function Events() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-background to-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Discover Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find amazing events happening around you. From concerts to conferences, 
              we have something for everyone.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="space-y-6 mb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search events, venues, or organizers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg shadow-card"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-smooth px-4 py-2 ${
                      selectedCategory === category 
                        ? "gradient-primary text-primary-foreground shadow-glow" 
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort & Filter Controls */}
              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <MapPin className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase().replace(/\s+/g, '-')}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="flex border border-border rounded-lg p-1 bg-card">
                <Button
                  size="sm"
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  onClick={() => setViewMode("grid")}
                  className="px-3"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === "list" ? "default" : "ghost"}
                  onClick={() => setViewMode("list")}
                  className="px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredEvents.length} of {events.length} events
            {selectedCategory !== "All" && (
              <span className="ml-1">in {selectedCategory}</span>
            )}
          </p>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-lg text-muted-foreground">Loading events...</span>
          </div>
        ) : (
          /* Events Grid/List */
          <div className={
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "space-y-4"
          }>
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <EventCard 
                  {...event} 
                  className={viewMode === "list" ? "flex-row max-w-none" : ""}
                />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse different categories.
            </p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {!isLoading && filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 1000);
              }}
            >
              Load More Events
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}