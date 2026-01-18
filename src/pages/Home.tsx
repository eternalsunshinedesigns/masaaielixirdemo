import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sparkles, Shield } from "lucide-react";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-sand/30 to-secondary/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B6914' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-primary mb-6 animate-fade-in-up">
              Ancient African Wisdom.
              <br />
              <span className="text-secondary">Modern Skincare Science.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-delay leading-relaxed">
              Discover the transformative power of indigenous African botanicals, 
              honoring the timeless beauty rituals of the Maasai people.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
              <Button asChild size="lg" className="px-8 py-6 text-base font-medium">
                <Link to="/products">Shop the Collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base font-medium border-primary/30 hover:bg-primary/5">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
              The Essence of Maasai Beauty
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Born from the sacred beauty rituals of the Maasai people, our collection 
              celebrates the profound connection between nature, heritage, and radiant skin. 
              Each product is a tribute to African resilience—crafted with ethically sourced 
              botanicals and infused with the wisdom of generations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Leaf className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-medium text-primary mb-1">Natural Botanicals</h3>
              <p className="text-sm text-muted-foreground">Indigenous African ingredients</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-medium text-primary mb-1">Ethically Sourced</h3>
              <p className="text-sm text-muted-foreground">Fair trade & sustainable</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-medium text-primary mb-1">Science-Backed</h3>
              <p className="text-sm text-muted-foreground">Modern formulations</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-clay/10 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-clay" />
              </div>
              <h3 className="font-medium text-primary mb-1">Heritage Inspired</h3>
              <p className="text-sm text-muted-foreground">Maasai beauty rituals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
              Featured Collection
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Discover our most beloved products, each crafted with intention and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-card rounded-sm overflow-hidden hover-lift"
              >
                <div className="aspect-[4/5] placeholder-image relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground/50 font-serif text-lg">
                      Product Image
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.tagline}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-primary">{product.price}</span>
                    <Button asChild variant="outline" size="sm" className="border-primary/30">
                      <Link to="/products">View Product</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="px-8">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Begin Your Ritual
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Join us on a journey that celebrates your skin, honors African heritage, 
            and connects you to the transformative power of nature.
          </p>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
