import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input.tsx';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden h-180 flex items-center justify-center">
      {/*Image with overlay*/}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-children.png"
          alt="Happy children playing in a bright childcare center"
          className="object-cover w-full h-full"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/*Leading text and search bar*/}
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center px-4 py-24 text-center lg:px-8 lg:py-36">
        <p className="mb-4 text-sm font-medium tracking-widest text-primary-foreground/80 uppercase">
          Confiado por mais de 250 recém-papás
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          Encontre o sítio ideal para o seu filho crescer
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
          Procura centenas de instituições de cuidados infantis e creches, lê
          reviews reais de pais, compara instituições, e envia candidaturas
          diretamente.
        </p>

        <div className="mt-10 flex w-full max-w-2xl flex-col items-center gap-3 sm:flex-row">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Procure na sua cidade, distrito..."
              className="h-13 w-full rounded-xl border-0 bg-card pl-12 pr-4 text-card-foreground shadow-lg placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              aria-label="Procure instituições e creches"
            />
          </div>
          <Button
            asChild
            variant="outline"
            className="h-13 rounded-xl px-8 text-accent-foreground shadow-lg hover:bg-accent/90 sm:w-auto"
          >
            <Link to="/search">
              <Search className="mr-2 h-4 w-4" />
              Procurar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
