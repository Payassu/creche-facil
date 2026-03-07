import type React from 'react';
import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Label } from '@/components/ui/label.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { Slider } from '@/components/ui/slider.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';

const SearchFilters: React.FC = () => {
  const [priceRange, setPriceRange] = useState([200, 1500]);

  const filterContent = (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div>
        <Label
          htmlFor="location-search"
          className="text-sm font-semibold text-foreground"
        >
          Localização
        </Label>
        <div className="relative mt-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            id="location-search"
            placeholder="Cidade, código postal, etc."
            className="pl-9 w-full "
          />
        </div>
      </div>

      <Separator />

      {/* Type */}
      <div>
        <p className="text-sm font-semibold text-foreground">
          Tipo de Instituição
        </p>
        <div className="mt-3 flex flex-col gap-2.5">
          {[
            'Daycare Center',
            'Preschool',
            'Montessori',
            'After-School',
            'Home-Based',
          ].map((type) => (
            <span
              key={type}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <Checkbox id={type} />
              <span className="text-sm text-foreground/80">{type}</span>
            </span>
          ))}
        </div>
      </div>

      <Separator />

      {/* Age Group */}
      <div>
        <p className="text-sm font-semibold text-foreground">Age Group</p>
        <div className="mt-3 flex flex-col gap-2.5">
          {[
            'Infant (0-12 months)',
            'Toddler (1-3 years)',
            'Pre-K (3-5 years)',
            'School-Age (5-12 years)',
          ].map((age) => (
            <span
              key={age}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <Checkbox id={age} />
              <span className="text-sm text-foreground/80">{age}</span>
            </span>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Monthly Price</p>
          <span className="text-xs text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <div className="mt-4 px-1">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={3000}
            step={50}
          />
        </div>
      </div>

      <Separator />

      {/* Rating */}
      <div>
        <p className="text-sm font-semibold text-foreground">Minimum Rating</p>
        <div className="mt-3 flex flex-col gap-2.5">
          {['4.5+ Stars', '4.0+ Stars', '3.5+ Stars', 'Any Rating'].map(
            (rating) => (
              <span
                key={rating}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <Checkbox id={rating} />
                <span className="text-sm text-foreground/80">{rating}</span>
              </span>
            ),
          )}
        </div>
      </div>

      <Separator />

      {/* Amenities */}
      <div>
        <p className="text-sm font-semibold text-foreground">Amenities</p>
        <div className="mt-3 flex flex-col gap-2.5">
          {[
            'Outdoor Playground',
            'Meals Provided',
            'Transportation',
            'Webcam Access',
            'Special Needs Support',
          ].map((amenity) => (
            <span
              key={amenity}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <Checkbox id={amenity} />
              <span className="text-sm text-foreground/80">{amenity}</span>
            </span>
          ))}
        </div>
      </div>

      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Apply Filters
      </Button>
    </div>
  );

  return (
    <div className="block rounded-xl border border-border bg-card p-6">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <SlidersHorizontal className="h-5 w-5 text-primary" />
        Filters
      </h2>
      {filterContent}
    </div>
  );
};

export default SearchFilters;
