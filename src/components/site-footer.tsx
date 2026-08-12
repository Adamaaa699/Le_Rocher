import { Link } from "@tanstack/react-router";
import { restaurant } from "@/data/restaurant";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl">{restaurant.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{restaurant.tagline}</p>
          <p className="mt-4 text-sm text-muted-foreground">{restaurant.priceRange}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow mb-3">Nous trouver</p>
          <p>{restaurant.address}</p>
          <p className="mt-1">{restaurant.plusCode}</p>
          <a href={restaurant.phoneHref} className="mt-3 block text-primary">
            {restaurant.phone}
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow mb-3">Horaires</p>
          <p>{restaurant.hours}</p>
          <Link to="/reservation" className="btn-ghost mt-5 hover:bg-primary/10">
            Réserver
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {restaurant.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
