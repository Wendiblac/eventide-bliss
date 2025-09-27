import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin, Users, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
  category: string;
  attendees?: number;
  rating?: number;
  className?: string;
  featured?: boolean;
}

export const EventCard = ({
  id,
  title,
  image,
  date,
  time,
  location,
  price,
  category,
  attendees,
  rating,
  className,
  featured = false,
}: EventCardProps) => {
  return (
    <Card className={cn(
      "group overflow-hidden border-0 shadow-card card-hover gradient-card",
      featured && "ring-2 ring-primary/20 shadow-glow",
      className
    )}>
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <Badge 
          className="absolute top-4 left-4 gradient-accent text-white border-0"
        >
          {category}
        </Badge>
        
        {/* Featured Badge */}
        {featured && (
          <Badge 
            className="absolute top-4 right-4 bg-secondary-accent text-white border-0 animate-glow-pulse"
          >
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        )}
        
        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="font-bold text-primary">{price}</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-smooth">
            {title}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            {rating && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
              </div>
            )}
            {attendees && (
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{attendees} going</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            <span>{date}</span>
            <Clock className="w-4 h-4 ml-2" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link to={`/events/${id}`}>
            <Button variant="outline" size="sm" className="group-hover:border-primary hover:text-white transition-smooth">
              View Details
            </Button>
          </Link>
          
          <Button 
            size="sm" 
            className="gradient-primary text-primary-foreground button-glow"
          >
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
};