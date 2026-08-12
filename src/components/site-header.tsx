import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { restaurant } from "@/data/restaurant";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/reservation", label: "Réserver" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="leading-tight">
          <span className="block font-display text-xl tracking-wide">{restaurant.name}</span>
          <span className="eyebrow">Gammarth · Tunis</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/reservation" className="btn-gold hover:opacity-90">
            Réserver une table
          </Link>
        </nav>

        <button
          className="text-xs uppercase tracking-[0.2em] text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-border/60 px-5 py-5 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
