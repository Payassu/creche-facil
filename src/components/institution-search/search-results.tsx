import type React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Star,
  MapPin,
  Users,
  Clock,
  Heart,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const institutions = [
  {
    id: 1,
    name: 'Sunshine Montessori Academy',
    image: '/nsbs.png',
    type: 'Montessori',
    rating: 4.9,
    reviews: 128,
    location: 'Downtown, Brooklyn',
    ages: '2-6 years',
    hours: '7:00 AM - 6:00 PM',
    price: '$1,200/mo',
    spots: 3,
    verified: true,
    description:
      "A nurturing Montessori environment focused on independence, creativity, and respect for each child's natural development.",
  },
  {
    id: 2,
    name: 'Bright Horizons Preschool',
    image: '/abece.png',
    type: 'Preschool',
    rating: 4.8,
    reviews: 96,
    location: 'Upper West Side, Manhattan',
    ages: '3-5 years',
    hours: '8:00 AM - 5:30 PM',
    price: '$1,450/mo',
    spots: 7,
    verified: true,
    description:
      'Award-winning preschool program with a play-based curriculum that prepares children for kindergarten success.',
  },
  {
    id: 3,
    name: 'Little Explorers Daycare',
    image: '/colina.png',
    type: 'Daycare',
    rating: 4.7,
    reviews: 215,
    location: 'Park Slope, Brooklyn',
    ages: '6 months - 4 years',
    hours: '6:30 AM - 6:30 PM',
    price: '$950/mo',
    spots: 2,
    verified: true,
    description:
      'Family-owned daycare providing a warm, home-like atmosphere with emphasis on early literacy and social skills.',
  },
  {
    id: 4,
    name: 'Rainbow Learning Center',
    image: '/nsbs.png',
    type: 'Daycare',
    rating: 4.6,
    reviews: 74,
    location: 'Astoria, Queens',
    ages: '1-5 years',
    hours: '7:30 AM - 6:00 PM',
    price: '$850/mo',
    spots: 5,
    verified: false,
    description:
      'Bilingual daycare center offering programs in English and Spanish with a focus on cultural diversity and inclusion.',
  },
  {
    id: 5,
    name: 'Treehouse After-School Program',
    image: '/abece.png',
    type: 'After-School',
    rating: 4.8,
    reviews: 63,
    location: 'Williamsburg, Brooklyn',
    ages: '5-12 years',
    hours: '2:30 PM - 7:00 PM',
    price: '$600/mo',
    spots: 10,
    verified: true,
    description:
      'Creative after-school program blending homework help, arts, STEM activities, and outdoor adventures.',
  },
];

const SearchResults: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            {institutions.length}
          </span>{' '}
          centers found
        </p>
        <Select defaultValue="rating">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="reviews">Most Reviewed</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="distance">Nearest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results List */}
      <div className="flex flex-col gap-4">
        {institutions.map((inst) => (
          <article
            key={inst.id}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="relative aspect-16/10 w-full sm:aspect-square sm:w-48 md:w-56 shrink-0">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                  {inst.type}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {inst.name}
                      </h3>
                      {inst.verified && (
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      )}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {inst.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" /> {inst.ages}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {inst.hours}
                      </span>
                    </div>
                  </div>
                  <button
                    className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
                    aria-label={`Save ${inst.name} to favorites`}
                    type="button"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {inst.description}
                </p>

                <div className="mt-auto flex flex-col items-start justify-between gap-3 pt-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold text-card-foreground">
                        {inst.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({inst.reviews})
                      </span>
                    </div>
                    <span className="text-lg font-bold text-primary">
                      {inst.price}
                    </span>
                    {inst.spots <= 3 && (
                      <Badge
                        variant="secondary"
                        className="bg-accent/10 text-accent text-xs"
                      >
                        {inst.spots} spots left
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 border-primary/30 text-primary hover:bg-primary/5"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Contact
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/parent/dashboard">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
