import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloatingBotanicals } from "@/components/ui/FloatingBotanicals";
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
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <FloatingBotanicals variant="minimal" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <ScrollReveal direction="left">
              <div className="aspect-square rounded-sm overflow-hidden bg-card">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                />
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <ScrollReveal direction="right">
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
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.15}>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  {product.description}
                </p>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal direction="right" delay={0.25}>
                <div className="mb-8">
                  <h3 className="font-serif text-lg font-medium text-primary mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Key Ingredients */}
              <ScrollReveal direction="right" delay={0.35}>
                <div className="mb-10">
                  <h3 className="font-serif text-lg font-medium text-primary mb-4">Key Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-card rounded-full text-sm text-foreground/80 border border-border/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {ingredient}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal direction="right" delay={0.4}>
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
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Leaf, color: "text-accent", title: "100% Natural", desc: "Pure African botanicals" },
              { icon: Heart, color: "text-secondary", title: "Cruelty-Free", desc: "Never tested on animals" },
              { icon: Shield, color: "text-primary", title: "Sustainably Sourced", desc: "Ethically harvested ingredients" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <p className="text-sm font-medium text-primary">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <FloatingBotanicals variant="minimal" />
          <div className="container mx-auto px-6 lg:px-12 relative">
            <ScrollReveal className="text-center mb-10">
              <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">More to explore</p>
              <div className="decorative-line mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary">
                You May Also Like
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, i) => (
                <ScrollReveal key={relatedProduct.id} delay={i * 0.12}>
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    className="group bg-card rounded-sm overflow-hidden hover-lift block"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
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
                </ScrollReveal>
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