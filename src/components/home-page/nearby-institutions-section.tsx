import React from 'react';
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {ArrowRight, MapPin, Star, Users} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";

const centers = [
    {
        name: "Nossa Senhora do Bom Sucesso",
        image: "/nsbs.png",
        type: "Infantário",
        rating: 4.9,
        reviews: 128,
        location: "Tojal, Loures",
        ages: "0-7",
        spots: 3,
    },
    {
        name: "Abecê",
        image: "/abece.png",
        type: "Creche",
        rating: 4.8,
        reviews: 96,
        location: "Infantado, Loures",
        ages: "0-7",
        spots: 7,
    },
    {
        name: "Colina do Sol",
        image: "/colina.png",
        type: "Creche",
        rating: 4.7,
        reviews: 215,
        location: "Sta Iria, Loures",
        ages: "0 - 7",
        spots: 2,
    },
]

const NearbyInstitutionsSection: React.FC = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-8xl px-20">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-medium tracking-widest text-primary uppercase">Encontre o lugar ideal para o seu bebé</p>
                        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
                            Instituições Perto de Si
                        </h2>
                    </div>
                    <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
                        <Link to="/search">
                            Ver Todos <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {centers.map((center) => (
                        <Link
                            key={center.name}
                            to="/search"
                            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                        >
                            <div className="relative aspect-16/10 overflow-hidden">
                                <img
                                    src={center.image}
                                    alt={center.name}
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                                    {center.type}
                                </Badge>
                                {center.spots <= 3 && (
                                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                                        Restam {center.spots} lugares
                                    </Badge>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                    {center.name}
                                </h3>
                                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {center.location}
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-amber-500 text-accent" />
                                        <span className="text-sm font-semibold text-card-foreground">{center.rating}</span>
                                        <span className="text-sm text-muted-foreground">({center.reviews})</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Users className="h-3.5 w-3.5" />
                                        {center.ages}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NearbyInstitutionsSection;