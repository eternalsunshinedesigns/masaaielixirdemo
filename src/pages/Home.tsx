import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Leaf, Heart, Sparkles, Shield, Truck, Lock, Recycle, ArrowRight } from "lucide-react";
import { categories, getProductsByCategory } from "@/data/products";
import heroVideo from "@/assets/hero-video.mp4";
import heritageImage from "@/assets/heritage-image.jpg";
import categoryFacial from "@/assets/category-facial.jpg";
import categoryBody from "@/assets/category-body.jpg";
import categoryTherapeutic from "@/assets/category-therapeutic.jpg";

const categoryImages: Record<string, string> = {
  "facial-care": categoryFacial,
  "body-care": categoryBody,
  "therapeutic": categoryTherapeutic,
};

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <motion.p
              className="text-xs tracking-[0.4em] uppercase text-secondary mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Premium African Botanical Skincare
            </motion.p>
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              The Ritual of
              <br />
              African Beauty
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Discover luxury skincare infused with bio-active, sustainable,
              and indigenous African botanicals.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Button asChild size="lg" className="px-12 py-6 text-sm tracking-[0.2em] uppercase">
                <Link to="/products">Shop Collections</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-sm tracking-[0.15em] uppercase border-primary/40 hover:bg-primary/5"
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="py-6 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Truck, label: "International Shipping" },
              { icon: Leaf, label: "Natural & Sustainable" },
              { icon: Lock, label: "100% Secure Payment" },
              { icon: Recycle, label: "Eco-Friendly Packaging" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1} direction="up">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs tracking-wider uppercase">{item.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Mission Statement */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">
                Our Philosophy
              </p>
              <div className="decorative-line mb-8" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-10 leading-tight">
                Bio-Active. Sustainable. Holistic. Biodegradable.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10">
                Born from the sacred beauty rituals of the Maasai people, our collection
                celebrates the profound connection between nature, heritage, and radiant skin.
                Each formulation harnesses the transformative power of African botanicals—ethically
                sourced and crafted to honor generations of wisdom.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Button
                asChild
                variant="ghost"
                className="text-secondary hover:text-primary hover:bg-transparent group"
              >
                <Link to="/about" className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase">
                  Discover Our Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Collections Grid */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">
              Shop By Category
            </p>
            <div className="decorative-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary">
              Our Collections
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 0.15} direction="up">
                <Link
                  to={`/products?category=${category.id}`}
                  className="group relative overflow-hidden bg-background rounded-sm block"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={categoryImages[category.id]}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl font-medium text-primary mb-2 group-hover:text-secondary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-secondary group-hover:gap-3 transition-all">
                      Shop Now
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal direction="left">
                <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">
                  Our Values
                </p>
                <div className="w-12 h-[1px] bg-secondary mb-8" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-8 leading-tight">
                  Rooted in African Heritage,
                  <br />Crafted for Modern Beauty
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  We believe that true beauty comes from nature. Our products honor the
                  ancient wisdom of the Maasai people while embracing modern skincare science
                  to deliver exceptional results.
                </p>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  { icon: Leaf, color: "text-accent", title: "100% Natural Ingredients", desc: "Indigenous African botanicals, ethically sourced" },
                  { icon: Heart, color: "text-secondary", title: "Cruelty-Free Always", desc: "Never tested on animals, ever" },
                  { icon: Sparkles, color: "text-primary", title: "Science-Backed Formulas", desc: "Traditional wisdom meets modern efficacy" },
                  { icon: Shield, color: "text-clay", title: "Sustainable Practices", desc: "Biodegradable formulas, eco-friendly packaging" },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.1} direction="left">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-medium text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal direction="right">
              <div className="aspect-square rounded-sm overflow-hidden">
                <motion.img
                  src={heritageImage}
                  alt="African botanical skincare heritage"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">
                Bestsellers
              </p>
              <div className="w-12 h-[1px] bg-secondary mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary">
                Most Loved Products
              </h2>
            </div>
            <Button
              asChild
              variant="ghost"
              className="text-secondary hover:text-primary hover:bg-transparent group mt-4 md:mt-0"
            >
              <Link to="/products" className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase">
                View All
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {getProductsByCategory("facial-care").slice(0, 2).concat(getProductsByCategory("therapeutic").slice(0, 2)).map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <Link
                  to={`/product/${product.id}`}
                  className="group bg-background rounded-sm overflow-hidden hover-lift block"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-secondary uppercase tracking-wider mb-2">
                      {categories.find(c => c.id === product.category)?.name}
                    </p>
                    <h3 className="font-serif text-lg font-medium text-primary mb-1 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-1">
                      {product.tagline}
                    </p>
                    <p className="font-medium text-primary">{product.price}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* People & Planet CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/70 mb-4">
              Our Commitment
            </p>
            <div className="w-16 h-[1px] bg-primary-foreground/30 mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-10 leading-tight">
              People & Planet Over Profit
            </h2>
            <p className="text-lg text-primary-foreground/85 leading-relaxed mb-12">
              At Maasai Elixir, we are driven by the desire to help protect the precious Earth
              from which we draw our resources. We only use pure, sustainably sourced, and
              biodegradable ingredients in our products—all housed in sustainable packaging
              and never tested on animals.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-12 text-sm tracking-[0.2em] uppercase"
            >
              <Link to="/ingredients">Explore Our Ingredients</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">
              Join Our Community
            </p>
            <div className="decorative-line mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
              Begin Your Ritual
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Join us on a journey that celebrates your skin, honors African heritage,
              and connects you to the transformative power of nature.
            </p>
            <Button asChild size="lg" className="px-12 text-sm tracking-[0.2em] uppercase">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
