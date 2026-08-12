import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Réserver une table — Le Rocher de Gammarth" },
      {
        name: "description",
        content:
          "Réservez en ligne votre table au Rocher de Gammarth : terrasse vue mer, déjeuners et dîners jusqu'à 01:00.",
      },
      { property: "og:title", content: "Réservation — Le Rocher de Gammarth" },
      {
        property: "og:description",
        content: "Réservation en ligne en quelques secondes, confirmation par téléphone.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
  }),
  component: ReservationPage,
});

const slots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00",
];

const field =
  "mt-2 w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary";

function ReservationPage() {
  const [sent, setSent] = useState<null | { name: string; date: string; time: string; guests: string }>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "20:00",
    guests: "2",
    area: "Terrasse vue mer",
    notes: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  if (sent) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <main className="mx-auto max-w-2xl px-5 py-28 text-center">
          <p className="eyebrow">Demande envoyée</p>
          <h1 className="mt-4 text-5xl">Merci {sent.name}</h1>
          <p className="mt-6 text-muted-foreground">
            Votre demande pour le {sent.date} à {sent.time} ({sent.guests} personnes) a bien été
            enregistrée. Notre équipe vous confirme la table par téléphone dans l'heure.
          </p>
          <a href={restaurant.phoneHref} className="btn-ghost mt-8 hover:bg-primary/10">
            Nous appeler : {restaurant.phone}
          </a>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-20">
        <p className="eyebrow text-center">Réservation</p>
        <h1 className="mt-4 text-center text-5xl md:text-6xl">Réserver une table</h1>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {restaurant.hours} · {restaurant.address}
        </p>

        <form
          className="mt-14 grid gap-6 rounded-xl border border-border/60 bg-card/60 p-8 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setSent({ name: form.name, date: form.date, time: form.time, guests: form.guests });
          }}
        >
          <label className="text-sm text-muted-foreground">
            Nom complet
            <input required value={form.name} onChange={set("name")} className={field} placeholder="Votre nom" />
          </label>
          <label className="text-sm text-muted-foreground">
            Téléphone
            <input required type="tel" value={form.phone} onChange={set("phone")} className={field} placeholder="+216 ..." />
          </label>
          <label className="text-sm text-muted-foreground">
            Email
            <input type="email" value={form.email} onChange={set("email")} className={field} placeholder="vous@email.com" />
          </label>
          <label className="text-sm text-muted-foreground">
            Nombre de personnes
            <select value={form.guests} onChange={set("guests")} className={field}>
              {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
              <option value="13+">Plus de 12 (groupe)</option>
            </select>
          </label>
          <label className="text-sm text-muted-foreground">
            Date
            <input required type="date" value={form.date} onChange={set("date")} className={field} />
          </label>
          <label className="text-sm text-muted-foreground">
            Heure
            <select value={form.time} onChange={set("time")} className={field}>
              {slots.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="text-sm text-muted-foreground md:col-span-2">
            Espace souhaité
            <select value={form.area} onChange={set("area")} className={field}>
              <option>Terrasse vue mer</option>
              <option>Salle intérieure</option>
              <option>Lounge / bar</option>
              <option>Événement privé</option>
            </select>
          </label>
          <label className="text-sm text-muted-foreground md:col-span-2">
            Demande particulière
            <textarea
              value={form.notes}
              onChange={set("notes")}
              rows={4}
              className={field}
              placeholder="Anniversaire, allergies, table à l'ombre..."
            />
          </label>
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Demande soumise à confirmation de l'équipe.
            </p>
            <button type="submit" className="btn-gold hover:opacity-90">
              Envoyer ma demande
            </button>
          </div>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
