import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & accès — Le Rocher de Gammarth" },
      {
        name: "description",
        content:
          "Adresse, horaires, téléphone et plan d'accès du restaurant Le Rocher de Gammarth, Av. Taieb Mhiri, Gammarth 2075.",
      },
      { property: "og:title", content: "Contact & accès — Le Rocher de Gammarth" },
      { property: "og:description", content: "Av. Taieb Mhiri, Gammarth 2075 · 26 136 132" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Nous rejoindre</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Contact & accès</h1>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="space-y-8 text-sm text-muted-foreground">
            <div>
              <p className="eyebrow mb-2">Adresse</p>
              <p className="text-base text-foreground">{restaurant.address}</p>
              <p>{restaurant.plusCode}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Téléphone</p>
              <a href={restaurant.phoneHref} className="text-base text-primary">
                {restaurant.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">Horaires</p>
              <p className="text-base text-foreground">{restaurant.hours}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Services</p>
              <p>{restaurant.services.join(" · ")}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Suivez-nous</p>
              <a href={restaurant.facebook} target="_blank" rel="noreferrer" className="text-primary">
                Facebook
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border/60">
            <iframe
              title="Plan d'accès au Rocher de Gammarth"
              src={restaurant.mapEmbed}
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
