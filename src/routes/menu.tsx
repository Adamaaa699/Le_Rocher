import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { menu, restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Le Rocher de Gammarth" },
      {
        name: "description",
        content:
          "Découvrez la carte du Rocher de Gammarth : entrées, poissons et fruits de mer, viandes, desserts et sélection de vins tunisiens.",
      },
      { property: "og:title", content: "Menu — Le Rocher de Gammarth" },
      {
        property: "og:description",
        content: "Poissons frais, spécialités méditerranéennes et vins tunisiens à Gammarth.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-20">
        <p className="eyebrow text-center">La carte</p>
        <h1 className="mt-4 text-center text-5xl md:text-6xl">Menu</h1>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {restaurant.priceRange} · Carte susceptible d'évoluer selon les arrivages
        </p>

        <div className="mt-16 space-y-16">
          {menu.map((section) => (
            <section key={section.title}>
              <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                <h2 className="text-3xl">{section.title}</h2>
                {section.note && (
                  <span className="text-xs text-muted-foreground">{section.note}</span>
                )}
              </div>
              <ul className="divide-y divide-border/40">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-6 py-5">
                    <div>
                      <p className="text-lg">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="whitespace-nowrap text-primary">{item.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/reservation" className="btn-gold hover:opacity-90">
            Réserver une table
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
