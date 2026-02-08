import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloatingBotanicals } from "@/components/ui/FloatingBotanicals";
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
  { name: "Marula Oil", description: "A luxurious oil rich in antioxidants and omega fatty acids, traditionally used for deep skin nourishment.", origin: "Southern Africa", image: ingredientMarula },
  { name: "African Shea Butter", description: "A rich, creamy butter known for its intense moisturizing and healing properties.", origin: "West Africa", image: ingredientShea },
  { name: "Baobab Extract", description: "From the Tree of Life, packed with vitamins A, D, E, and F for cellular regeneration.", origin: "East Africa", image: ingredientBaobab },
  { name: "Kigelia Africana", description: "Sacred sausage tree fruit used for firming, tightening, and rejuvenating the skin.", origin: "Sub-Saharan Africa", image: ingredientKigelia },
  { name: "African Clay", description: "Mineral-rich clay that detoxifies, purifies, and balances the skin naturally.", origin: "Various Regions", image: ingredientClay },
  { name: "Rooibos Extract", description: "Antioxidant-rich red bush tea that soothes inflammation and protects against environmental stress.", origin: "South Africa", image: ingredientRooibos },
];

const pillars = [
  { icon: Droplets, title: "Nourishment", description: "Deep hydration and essential nutrients that feed your skin from within, restoring its natural vitality and glow." },
  { icon: Shield, title: "Protection", description: "A natural barrier against environmental stressors, shielding your skin from sun, dust, and pollution." },
  { icon: Sun, title: "Healing", description: "Restorative botanicals that repair damage, soothe irritation, and support your skins natural renewal process." },
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
        <FloatingBotanicals variant="accent" />
        <div className="relative container mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Rituals
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The sacred ingredients and time-honored practices that define Maasai Elixir.
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-24 overflow-hidden">
        <FloatingBotanicals variant="minimal" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Philosophy</p>
            <div className="decorative-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
              Nature Meets Science
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              For generations, African communities have understood the healing power of local plants
              and minerals. We honor this wisdom by combining traditional knowledge with modern
              dermatological research, creating formulations that are both effective and soulful.
            </p>
          </ScrollReveal>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.15}>
                <div className="bg-card p-8 rounded-sm text-center hover-lift">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-medium text-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Showcase */}
      <section className="relative py-24 bg-card overflow-hidden">
        <FloatingBotanicals variant="section" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Botanicals</p>
            <div className="decorative-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
              Sacred Botanicals
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              The indigenous African ingredients at the heart of our formulations.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient, i) => (
              <ScrollReveal key={ingredient.name} delay={i * 0.1}>
                <div className="bg-background p-8 rounded-sm hover-lift group">
                  <div className="aspect-square mb-6 rounded-sm overflow-hidden">
                    <motion.img
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-primary mb-2 group-hover:text-secondary transition-colors">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm text-secondary mb-3">
                    Origin: {ingredient.origin}
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Story */}
      <section className="relative py-24 overflow-hidden">
        <FloatingBotanicals variant="minimal" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal direction="left">
                <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Process</p>
                <div className="w-12 h-[1px] bg-secondary mb-8" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                  The Ritual of Creation
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.15}>
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
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.3}>
                <div className="mt-8">
                  <Button asChild size="lg" className="px-8 text-sm tracking-[0.15em] uppercase">
                    <Link to="/products">Explore Products</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <motion.img
                  src={creationProcess}
                  alt="Skincare creation process"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ingredients;