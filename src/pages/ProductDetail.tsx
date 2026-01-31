import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Leaf, Shield, Heart } from "lucide-react";
import { getProductById, getCategoryById, products, categories } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-12 py-24 text-center">
          <h1 className="font-serif text-3xl text-primary mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const category = getCategoryById(product.category);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-6 bg-card border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products?category=${product.category}`} className="hover:text-primary transition-colors">
              {category?.name}
            </Link>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="aspect-square rounded-sm overflow-hidden bg-card">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-3 font-medium">
                {category?.name}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.tagline}
              </p>
              <p className="font-serif text-2xl md:text-3xl text-primary mb-8">
                {product.price}
              </p>
              
              <p className="text-foreground/80 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-medium text-primary mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Ingredients */}
              <div className="mb-10">
                <h3 className="font-serif text-lg font-medium text-primary mb-4">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-card rounded-full text-sm text-foreground/80 border border-border/50"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-12 text-sm tracking-[0.15em] uppercase">
                  Add to Cart
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="px-8 text-sm tracking-[0.15em] uppercase"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Leaf className="w-6 h-6 text-accent" />
              <p className="text-sm font-medium text-primary">100% Natural</p>
              <p className="text-xs text-muted-foreground">Pure African botanicals</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Heart className="w-6 h-6 text-secondary" />
              <p className="text-sm font-medium text-primary">Cruelty-Free</p>
              <p className="text-xs text-muted-foreground">Never tested on animals</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <p className="text-sm font-medium text-primary">Sustainably Sourced</p>
              <p className="text-xs text-muted-foreground">Ethically harvested ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-card rounded-sm overflow-hidden hover-lift"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-secondary uppercase tracking-wider mb-2">
                      {categories.find(c => c.id === relatedProduct.category)?.name}
                    </p>
                    <h3 className="font-serif text-lg font-medium text-primary mb-2 group-hover:text-secondary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {relatedProduct.tagline}
                    </p>
                    <p className="font-medium text-primary">{relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Button 
            variant="ghost" 
            className="text-secondary hover:text-primary group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Products
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
