import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import dishImg from "@/assets/dish.jpg";
import interiorImg from "@/assets/interior.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { menu, restaurant, reviews } from "@/data/restaurant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Rocher de Gammarth — Restaurant vue mer à Tunis" },
      {
        name: "description",
        content:
          "Restaurant méditerranéen à Gammarth : poissons frais, terrasse panoramique sur la mer et réservation en ligne.",
      },
      { property: "og:title", content: "Le Rocher de Gammarth — Restaurant vue mer" },
      {
        property: "og:description",
        content: "Cuisine méditerranéenne, terrasse face à la mer à Gammarth, Tunis. Réservez votre table.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: restaurant.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Taieb Mhiri",
            addressLocality: "Gammarth",
            postalCode: "2075",
            addressCountry: "TN",
          },
          telephone: restaurant.phone,
          servesCuisine: "Méditerranéenne",
          priceRange: "$$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: restaurant.rating,
            reviewCount: restaurant.reviewCount,
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Stars({ value }: { value: number }) {
  return (
    <span className="text-primary" aria-label={`${value} sur 5`}>
      {"★★★★★".slice(0, Math.round(value))}
      <span className="text-muted-foreground">{"★★★★★".slice(Math.round(value))}</span>
    </span>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative">
        <img
          src={heroImg}
          alt="Terrasse du Rocher de Gammarth au coucher du soleil face à la mer"
          width={1920}
          height={1280}
          className="h-[78vh] w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-16">
            <p className="eyebrow">Gammarth · Tunis · Depuis 1998</p>
            <h1 className="mt-4 max-w-2xl text-5xl leading-[1.05] md:text-7xl">
              La Méditerranée, servie à table.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Poissons de la criée, produits de saison et une terrasse suspendue au-dessus de la mer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/reservation" className="btn-gold hover:opacity-90">
                Réserver une table
              </Link>
              <Link to="/menu" className="btn-ghost hover:bg-primary/10">
                Découvrir le menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-center sm:grid-cols-3">
          <div>
            <p className="eyebrow">Avis Google</p>
            <p className="mt-2 text-lg">
              {restaurant.rating} <Stars value={restaurant.rating} />{" "}
              <span className="text-sm text-muted-foreground">({restaurant.reviewCount})</span>
            </p>
          </div>
          <div>
            <p className="eyebrow">Horaires</p>
            <p className="mt-2 text-lg">{restaurant.hours}</p>
          </div>
          <div>
            <p className="eyebrow">Réservations</p>
            <a href={restaurant.phoneHref} className="mt-2 block text-lg text-primary">
              {restaurant.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow">La maison</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Une adresse posée sur le rocher</h2>
          <p className="mt-6 text-muted-foreground">
            Face au golfe de Tunis, Le Rocher de Gammarth cultive une cuisine méditerranéenne sincère :
            poissons entiers grillés au charbon, légumes du marché de La Marsa et saveurs tunisiennes
            revisitées avec finesse.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            {restaurant.services.map((s) => (
              <li key={s} className="rounded-full border border-border/70 px-4 py-2 text-center">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          <img
            src={interiorImg}
            alt="Salle du restaurant avec vue sur la mer"
            width={1200}
            height={900}
            loading="lazy"
            className="shadow-elegant rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Notre carte</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Les incontournables</h2>
            </div>
            <Link to="/menu" className="btn-ghost hover:bg-primary/10">
              Menu complet
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <img
              src={dishImg}
              alt="Poisson grillé servi au Rocher de Gammarth"
              width={1200}
              height={900}
              loading="lazy"
              className="shadow-elegant rounded-xl object-cover"
            />
            <ul className="divide-y divide-border/60">
              {(menu[1]?.items ?? []).map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-6 py-5">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="whitespace-nowrap text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="eyebrow">Ils y étaient</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Avis de nos clients</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="rounded-xl border border-border/60 bg-card/60 p-7">
              <Stars value={r.rating} />
              <blockquote className="mt-4 text-sm text-muted-foreground">“{r.text}”</blockquote>
              <figcaption className="mt-5 text-sm">
                {r.author}
                <span className="block text-xs text-muted-foreground">{r.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-20 text-center">
        <h2 className="text-4xl md:text-5xl">Votre table vous attend</h2>
        <p className="mt-4 text-muted-foreground">Déjeuners face à la mer, dîners jusqu'à 01:00.</p>
        <Link to="/reservation" className="btn-gold mt-8 hover:opacity-90">
          Réserver en ligne
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
