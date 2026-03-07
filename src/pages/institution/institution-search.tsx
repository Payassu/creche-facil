import SearchFilters from "@/components/institution-search/search-filters.tsx";
import SearchResults from "@/components/institution-search/search-results.tsx";

export default function InstitutionSearch() {
  return (
      <div className="flex min-h-screen flex-col">
              {/* Search Header */}
              <div className="border-b border-border bg-card">
                  <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
                      <h1 className="font-serif text-3xl text-foreground md:text-4xl">
                          Encontre A Instituição Que Procura
                      </h1>
                      <p className="mt-2 text-muted-foreground">
                          Filtra por tipo, faixa etária, localização, valor da mensalidade, e mais.
                      </p>
                  </div>
              </div>

              <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
                  <div className="flex flex-col gap-8 lg:flex-row">
                      <aside className="w-full lg:w-72 shrink-0">
                          <SearchFilters />
                      </aside>
                      <div className="flex-1">
                          <SearchResults />
                      </div>
                  </div>
              </div>
      </div>
  );
}
