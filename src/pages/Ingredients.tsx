import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Droplets, Shield, Sun } from "lucide-react";
import ingredientsBanner from "@/assets/ingredients-banner.jpg";
import creationProcess from "@/assets/creation-process.jpg";
import ingredientMarula from "@/assets/ingredient-marula.jpg";
import ingredientShea from "@/assets/ingredient-shea.jpg";
import ingredientBaobab from "@/assets/ingredient-baobab.jpg";
import ingredientKigelia from "@/assets/ingredient-kigelia.jpg";
import ingredientClay from "@/assets/ingredient-clay.jpg";
import ingredientRooibos from "@/assets/ingredient-rooibos.jpg";

const ingredients = [
  {
    name: "Marula Oil",
    description: "A luxurious oil rich in antioxidants and omega fatty acids, traditionally used for deep skin nourishment.",
    origin: "Southern Africa",
    image: ingredientMarula
  },
  {
    name: "African Shea Butter",
    description: "A rich, creamy butter known for its intense moisturizing and healing properties.",
    origin: "West Africa",
    image: ingredientShea
  },
  {
    name: "Baobab Extract",
    description: "From the Tree of Life, packed with vitamins A, D, E, and F for cellular regeneration.",
    origin: "East Africa",
    image: ingredientBaobab
  },
  {
    name: "Kigelia Africana",
    description: "Sacred sausage tree fruit used for firming, tightening, and rejuvenating the skin.",
    origin: "Sub-Saharan Africa",
    image: ingredientKigelia
  },
  {
    name: "African Clay",
    description: "Mineral-rich clay that detoxifies, purifies, and balances the skin naturally.",
    origin: "Various Regions",
    image: ingredientClay
  },
  {
    name: "Rooibos Extract",
    description: "Antioxidant-rich red bush tea that soothes inflammation and protects against environmental stress.",
    origin: "South Africa",
    image: ingredientRooibos
  }
];

const pillars = [
  {
    icon: Droplets,
    title: "Nourishment",
    description: "Deep hydration and essential nutrients that feed your skin from within, restoring its natural vitality and glow."
  },
  {
    icon: Shield,
    title: "Protection",
    description: "A natural barrier against environmental stressors, shielding your skin from sun, dust, and pollution."
  },
  {
    icon: Sun,
    title: "Healing",
    description: "Restorative botanicals that repair damage, soothe irritation, and support your skins natural renewal process."
  }
];

const Ingredients = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ingredientsBanner})` }}
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative container mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-6 animate-fade-in-up">
            Our Rituals
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed animate-fade-in-delay max-w-2xl mx-auto">
            The sacred ingredients and time-honored practices that define Maasai Elixir.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
              Nature Meets Science
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              For generations, African communities have understood the healing power of local plants 
              and minerals. We honor this wisdom by combining traditional knowledge with modern 
              dermatological research, creating formulations that are both effective and soulful.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-card p-8 rounded-sm text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Showcase */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
              Sacred Botanicals
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              The indigenous African ingredients at the heart of our formulations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient) => (
              <div 
                key={ingredient.name} 
                className="bg-background p-8 rounded-sm hover-lift group"
              >
                <div className="aspect-square mb-6 rounded-sm overflow-hidden">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl font-medium text-primary mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-sm text-secondary mb-3">
                  Origin: {ingredient.origin}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                The Ritual of Creation
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Every Maasai Elixir product begins with intention. We work with local communities 
                  to ethically harvest ingredients at their peak potency, following traditional 
                  timing and methods passed down through generations.
                </p>
                <p>
                  In our laboratories, we blend these precious botanicals using gentle extraction 
                  methods that preserve their natural benefits. No harsh chemicals, no synthetic 
                  shortcuts—just pure, potent skincare.
                </p>
                <p>
                  The result is a product that carries the spirit of its origins: powerful, 
                  authentic, and deeply connected to the earth.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="px-8">
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img 
                src={creationProcess} 
                alt="Skincare creation process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ingredients;
