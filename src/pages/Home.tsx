import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sparkles, Shield, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import heroBotanicals from "@/assets/hero-botanicals.jpg";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section - Split Screen Style */}
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="flex items-center justify-center px-8 lg:px-16 py-20 lg:py-0 order-2 lg:order-1">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 animate-fade-in">
              Luxury African Botanicals
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6 leading-tight animate-fade-in-up">
              Ancient African Wisdom.
              <br />
              <span className="text-secondary">Modern Skincare Science.</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 mb-10 animate-fade-in-delay leading-relaxed">
              Discover the transformative power of indigenous African botanicals, 
              honoring the timeless beauty rituals of the Maasai people.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-delay-2">
              <Button asChild size="lg" className="px-10 py-6 text-sm tracking-widest uppercase">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="lg" 
                className="px-6 py-6 text-sm tracking-wide group"
              >
                <Link to="/about" className="flex items-center gap-2">
                  Discover Our Story 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right: Hero Image */}
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
            style={{ backgroundImage: `url(${heroBotanicals})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-background/20 to-transparent" />
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-8 leading-tight">
              The Essence of Maasai Beauty
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Born from the sacred beauty rituals of the Maasai people, our collection 
              celebrates the profound connection between nature, heritage, and radiant skin. 
              Each product is a tribute to African resilience—crafted with ethically sourced 
              botanicals and infused with the wisdom of generations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Strip - Horizontal */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Leaf className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-sm font-medium text-primary mb-1 tracking-wide">Natural Botanicals</h3>
              <p className="text-xs text-muted-foreground">Indigenous African ingredients</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-serif text-sm font-medium text-primary mb-1 tracking-wide">Ethically Sourced</h3>
              <p className="text-xs text-muted-foreground">Fair trade & sustainable</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-sm font-medium text-primary mb-1 tracking-wide">Science-Backed</h3>
              <p className="text-xs text-muted-foreground">Modern formulations</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Shield className="w-7 h-7 text-clay" />
              </div>
              <h3 className="font-serif text-sm font-medium text-primary mb-1 tracking-wide">Heritage Inspired</h3>
              <p className="text-xs text-muted-foreground">Maasai beauty rituals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4">
              Our Collection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Discover our most beloved products, each crafted with intention and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="group text-center"
              >
                <div className="aspect-square rounded-full bg-card mx-auto mb-6 w-48 h-48 md:w-56 md:h-56 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <span className="text-muted-foreground/40 font-serif text-sm">
                    Product Image
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {product.tagline}
                </p>
                <p className="font-medium text-primary mb-4">{product.price}</p>
                <Button asChild variant="outline" size="sm" className="text-xs tracking-wider uppercase">
                  <Link to="/products">View Details</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" className="px-10 text-sm tracking-widest uppercase">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* People & Planet Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-8">
              People & Planet Over Profit
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
              At Maasai Elixir, we are driven by the desire to help protect the precious Earth 
              from which we draw our resources. We only use pure, sustainably sourced, and 
              biodegradable ingredients in our products—all housed in sustainable packaging 
              and never tested on animals.
            </p>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-10 text-sm tracking-widest uppercase"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ritual CTA */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
            The Ritual of Radiance
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Join us on a journey that celebrates your skin, honors African heritage, 
            and connects you to the transformative power of nature.
          </p>
          <Button asChild size="lg" className="px-10 text-sm tracking-widest uppercase">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
