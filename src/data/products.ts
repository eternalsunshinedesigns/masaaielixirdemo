export type ProductCategory = "facial-care" | "body-care" | "therapeutic";

export interface Category {
  id: ProductCategory;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  price: string;
  category: ProductCategory;
}

export const categories: Category[] = [
  {
    id: "facial-care",
    name: "Facial Care",
    description: "Luxurious treatments for radiant, healthy skin"
  },
  {
    id: "body-care",
    name: "Body Care",
    description: "Nourishing rituals for your entire body"
  },
  {
    id: "therapeutic",
    name: "Therapeutic",
    description: "Healing solutions for problem skin"
  }
];

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
    price: "$78",
    category: "facial-care"
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
    price: "$52",
    category: "facial-care"
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
    price: "$64",
    category: "therapeutic"
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
    price: "$68",
    category: "body-care"
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
    price: "$28",
    category: "therapeutic"
  }
];

export const getProductsByCategory = (categoryId: ProductCategory): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getCategoryById = (categoryId: ProductCategory): Category | undefined => {
  return categories.find(cat => cat.id === categoryId);
};
