import React from 'react';
import {FileText, MapPin, MessageCircle, Search, ShieldCheck, Star} from "lucide-react";

const features = [
    {
        icon: Search,
        title: "Pesquisa inteligente",
        description: "Filtre por localização, intervalo de preços, avaliações, e mais.",
    },
    {
        icon: ShieldCheck,
        title: "Verified Centers",
        description: "Every institution is vetted against safety standards with verified licensing and certifications.",
    },
    {
        icon: Star,
        title: "Parent Reviews",
        description: "Read authentic reviews from real parents. Transparent ratings you can trust.",
    },
    {
        icon: FileText,
        title: "Easy Applications",
        description: "Apply to multiple centers with one profile. Track your application status in real time.",
    },
    {
        icon: MessageCircle,
        title: "Direct Messaging",
        description: "Chat directly with institution administrators. Ask questions before you decide.",
    },
    {
        icon: MapPin,
        title: "Nearby Results",
        description: "Discover quality child care within minutes of your home or workplace.",
    },
]

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-card py-20">
            <div className="text-center">
                <p className="text-sm font-medium tracking-widest text-primary uppercase">
                    Porquê a Creche-Fácil?
                </p>
                <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
                    Simplificamos a procura e escolha por uma instituição de confiança.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                    Esqueça os montes de papéis que tinha de imprimir para apresentar a sua candidatura.</p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                            <feature.icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-foreground">
                            {feature.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {feature.description}
                        </p>
                    </div>
                ))}

            </div>


        </section>
    );
};

export default FeaturesSection;