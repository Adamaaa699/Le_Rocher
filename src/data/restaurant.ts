export const restaurant = {
  name: "Le Rocher de Gammarth",
  tagline: "Cuisine méditerranéenne face à la mer",
  address: "Av. Taieb Mhiri, Gammarth 2075, Tunisie",
  plusCode: "W828+7P Gammarth",
  phone: "26 136 132",
  phoneHref: "tel:+21626136132",
  facebook: "https://facebook.com",
  rating: 3.6,
  reviewCount: 641,
  priceRange: "+ de 100 DT par personne",
  hours: "Tous les jours · 12:00 – 01:00",
  services: ["Repas sur place", "Terrasse vue mer", "Livraison", "Événements privés"],
  mapEmbed:
    "https://www.google.com/maps?q=Le+Rocher+de+Gammarth,+Av.+Taieb+Mhiri,+Gammarth+2075&output=embed",
};

export type MenuItem = { name: string; description: string; price: string };
export type MenuSection = { title: string; note?: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    title: "Entrées",
    items: [
      { name: "Ojja aux crevettes", description: "Tomate, piment doux, œuf fermier, pain maison", price: "34 DT" },
      { name: "Salade Rocher", description: "Poulpe grillé, agrumes, olives de Kelibia, huile d'olive nouvelle", price: "42 DT" },
      { name: "Brik au thon", description: "Feuille de malsouka, thon, câpres, œuf coulant", price: "22 DT" },
      { name: "Carpaccio de daurade", description: "Citron confit, fenouil croquant, poivre de Timut", price: "46 DT" },
    ],
  },
  {
    title: "Poissons & fruits de mer",
    note: "Arrivage quotidien du port de La Goulette",
    items: [
      { name: "Loup grillé entier", description: "Grillé au charbon, légumes de saison, tarator", price: "95 DT" },
      { name: "Daurade royale au sel", description: "Croûte de sel, huile d'olive citronnée", price: "88 DT" },
      { name: "Gambas royales flambées", description: "Ail, persil, touche d'anisette", price: "110 DT" },
      { name: "Risotto d'encre de seiche", description: "Calamars, parmesan 24 mois", price: "72 DT" },
    ],
  },
  {
    title: "Viandes & terre",
    items: [
      { name: "Entrecôte maturée 300g", description: "Beurre d'herbes, pommes grenailles", price: "89 DT" },
      { name: "Agneau confit 7 heures", description: "Semoule aux amandes, jus corsé", price: "78 DT" },
      { name: "Suprême de volaille fermière", description: "Purée truffée, jus au thym citron", price: "64 DT" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Assidat zgougou revisitée", description: "Crème de pin d'Alep, mascarpone", price: "28 DT" },
      { name: "Baklawa glacée", description: "Pistache, miel d'oranger", price: "26 DT" },
      { name: "Fondant chocolat & sel de mer", description: "Glace vanille bourbon", price: "30 DT" },
    ],
  },
  {
    title: "Bar & vins",
    items: [
      { name: "Cocktail Coucher de soleil", description: "Rhum ambré, figue de barbarie, citron vert", price: "32 DT" },
      { name: "Sélection de vins tunisiens", description: "Au verre — Magon, Didona, Sidi Salem", price: "18 DT" },
      { name: "Thé à la menthe & pignons", description: "Service traditionnel", price: "12 DT" },
    ],
  },
];

export const reviews = [
  {
    author: "Samer Haidar",
    meta: "Local Guide · il y a un mois",
    rating: 5,
    text: "Un véritable coup de cœur ! Sans aucun doute l'un des plus beaux endroits de Tunis. Un lieu parfait pour se détendre et admirer la vue sur la mer.",
  },
  {
    author: "Sleymi Sana",
    meta: "Local Guide · il y a 4 mois",
    rating: 5,
    text: "Le cadre est magnifique avec une vue incroyable sur la mer, l'ambiance est chill et très agréable. On a très bien mangé et le service était parfait.",
  },
  {
    author: "Maëlle Drk",
    meta: "il y a 2 mois",
    rating: 4,
    text: "Le restaurant dispose d'une très belle vue, l'ambiance en terrasse au coucher du soleil est vraiment unique.",
  },
];
