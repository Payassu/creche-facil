
export default function HomePage() {
  return (
    //   Hero Section
    <section className="relative overflow-hidden h-180 flex items-center justify-center">
        {/*Image with overlay*/}
        <div className="absolute inset-0 z-0">
            <img
                src='/hero-children.png'
                alt="Happy children playing in a bright childcare center"
                className="object-cover w-full h-full"
                fetchPriority='high'
            />
            <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center px-4 py-24 text-center lg:px-8 lg:py-36">
            <p className="mb-4 text-sm font-medium tracking-widest text-primary-foreground/80 uppercase">
                Confiado por mais de 250 recém-papás
            </p>
            <h1 className="max-w-4xl font-serif text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
                Encontre o sítio ideal para o seu filho crescer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
                Procura centenas de instituições de cuidados infantis e creches, lê reviews reais de pais, compara instituições, e envia candidaturas diretamente.
            </p>
        </div>

    </section>
  );
}
