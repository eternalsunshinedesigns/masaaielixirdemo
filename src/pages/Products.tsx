import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloatingBotanicals } from "@/components/ui/FloatingBotanicals";
import { products, categories, Product, ProductCategory, getCategoryById } from "@/data/products";
import { cn } from "@/lib/utils";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const activeCategory = searchParams.get("category") as ProductCategory | null;

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: ProductCategory | null) => {
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden">
        <FloatingBotanicals variant="accent" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Shop Our Collection
            </motion.p>
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {activeCategory ? getCategoryById(activeCategory)?.name : "All Products"}
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {activeCategory
                ? getCategoryById(activeCategory)?.description
                : "Luxurious skincare crafted with indigenous African botanicals and modern science."
              }
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 border-b border-border/50 bg-background sticky top-32 md:top-36 z-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            <button
              onClick={() => handleCategoryChange(null)}
              className={cn(
                "px-4 md:px-6 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-sm",
                !activeCategory
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60 hover:text-primary hover:bg-card"
              )}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "px-4 md:px-6 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-sm",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-primary hover:bg-card"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-sm text-muted-foreground mb-8">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.08}>
                <Link
                  to={`/product/${product.id}`}
                  className="group bg-card rounded-sm overflow-hidden hover-lift block"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedProduct(product);
                      }}
                      className="absolute inset-x-4 bottom-4 py-3 bg-background/95 text-primary text-xs tracking-[0.15em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"
                    >
                      Quick View
                    </button>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-secondary uppercase tracking-wider mb-2">
                      {getCategoryById(product.category)?.name}
                    </p>
                    <h3 className="font-serif text-lg font-medium text-primary mb-1 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {product.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-medium text-primary">
                        {product.price}
                      </span>
                      <span className="text-xs tracking-wider uppercase text-secondary">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <p className="text-xs text-secondary uppercase tracking-wider mb-2">
                  {getCategoryById(selectedProduct.category)?.name}
                </p>
                <DialogTitle className="font-serif text-2xl md:text-3xl font-medium text-primary">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-foreground/60 font-medium">
                  {selectedProduct.tagline}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <div className="aspect-video rounded-sm mb-6 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-serif text-lg font-medium text-primary mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedProduct.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h4 className="font-serif text-lg font-medium text-primary mb-3">Hero Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.ingredients.map((ingredient, i) => (
                      <span key={i} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="font-serif text-2xl font-medium text-primary">
                    {selectedProduct.price}
                  </span>
                  <Button asChild size="lg" className="px-8 text-sm tracking-[0.15em] uppercase">
                    <Link to="/contact">Contact to Order</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Bottom CTA */}
      <section className="relative py-20 lg:py-24 bg-card overflow-hidden">
        <FloatingBotanicals variant="minimal" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          <ScrollReveal>
            <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Personalized Care</p>
            <div className="decorative-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto mb-10">
              Our skincare specialists can help you find the perfect products for your unique skin needs.
            </p>
            <Button asChild size="lg" className="px-10 text-sm tracking-[0.2em] uppercase">
              <Link to="/contact">Get Personalized Recommendations</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;