export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  price: string;
}

export const products: Product[] = [
  {
    id: "glow-oil",
    name: "Maasai Elixir Glow Oil",
    tagline: "Deep nourishment & radiant glow",
    description: "A luxurious blend of African marula oil and baobab extract that deeply nourishes and reveals your skin's natural radiance. Inspired by ancient Maasai beauty rituals.",
    benefits: [
      "Deeply hydrates and nourishes",
      "Promotes natural radiance",
      "Reduces appearance of fine lines",
      "Non-greasy, fast-absorbing formula"
    ],
    ingredients: ["Marula Oil", "Baobab Extract", "Rosehip Seed Oil", "Vitamin E"],
    price: "$78"
  },
  {
    id: "clay-cleanser",
    name: "Savanna Clay Cleanser",
    tagline: "Detoxifying herbal wash",
    description: "A gentle yet effective cleanser infused with African clay and healing herbs. Draws out impurities while respecting your skin's natural balance.",
    benefits: [
      "Deeply cleanses and detoxifies",
      "Removes impurities and excess oil",
      "Gentle enough for daily use",
      "Leaves skin refreshed and balanced"
    ],
    ingredients: ["African Clay", "Chamomile Extract", "Aloe Vera", "Green Tea"],
    price: "$52"
  },
  {
    id: "warrior-balm",
    name: "Warrior Shield Balm",
    tagline: "Repairs damaged, sensitive skin",
    description: "A protective healing balm formulated with shea butter and indigenous African botanicals. Creates a shield of comfort for damaged and sensitive skin.",
    benefits: [
      "Repairs and restores damaged skin",
      "Soothes irritation and redness",
      "Creates protective moisture barrier",
      "Ideal for sensitive skin"
    ],
    ingredients: ["Shea Butter", "Moringa Oil", "Calendula", "Beeswax"],
    price: "$64"
  },
  {
    id: "sun-dust-cream",
    name: "Sun & Dust Defense Cream",
    tagline: "Protection against harsh weather",
    description: "A rich protective cream inspired by the Maasai's resilience under the African sun. Shields skin from environmental stressors while deeply moisturizing.",
    benefits: [
      "Protects against environmental damage",
      "Provides deep, lasting moisture",
      "Strengthens skin barrier",
      "Antioxidant-rich formula"
    ],
    ingredients: ["Mongongo Oil", "Rooibos Extract", "Vitamin C", "Kigelia Extract"],
    price: "$68"
  },
  {
    id: "sacred-herb-soap",
    name: "Sacred Herb Soap",
    tagline: "Helps with acne and fungal skin",
    description: "A therapeutic cleansing bar crafted with sacred African herbs known for their antimicrobial and healing properties. Purifies problem skin naturally.",
    benefits: [
      "Combats acne-causing bacteria",
      "Soothes fungal skin conditions",
      "Gently exfoliates and purifies",
      "Balances oily and combination skin"
    ],
    ingredients: ["Neem", "Tea Tree Oil", "Activated Charcoal", "African Black Soap Base"],
    price: "$28"
  }
];
