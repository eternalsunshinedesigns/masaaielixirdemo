import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { products, Product } from "@/data/products";
import { X } from "lucide-react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-card via-background to-sand/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6 animate-fade-in-up">
              Our Collection
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in-delay">
              Luxurious skincare crafted with indigenous African botanicals and modern science.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-card rounded-sm overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square placeholder-image relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground/50 font-serif text-lg text-center px-4">
                      {product.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm mb-2">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl font-medium text-primary">
                      {product.price}
                    </span>
                    <Button 
                      onClick={() => setSelectedProduct(product)}
                      variant="outline" 
                      size="sm" 
                      className="border-primary/30"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
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
                <DialogTitle className="font-serif text-2xl md:text-3xl font-medium text-primary">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-secondary font-medium">
                  {selectedProduct.tagline}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                {/* Product Image Placeholder */}
                <div className="aspect-video placeholder-image rounded-sm mb-6 flex items-center justify-center">
                  <span className="text-muted-foreground/50 font-serif">
                    Product Image
                  </span>
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-serif text-lg font-medium text-primary mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                  <h4 className="font-serif text-lg font-medium text-primary mb-3">
                    Hero Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.ingredients.map((ingredient, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="font-serif text-2xl font-medium text-primary">
                    {selectedProduct.price}
                  </span>
                  <Button size="lg" className="px-8">
                    Contact to Order
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Bottom CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto mb-8">
            Our skincare specialists can help you find the perfect products for your unique skin needs.
          </p>
          <Button asChild size="lg" className="px-8">
            <a href="/contact">Get Personalized Recommendations</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
