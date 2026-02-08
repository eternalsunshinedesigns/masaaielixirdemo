import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloatingBotanicals } from "@/components/ui/FloatingBotanicals";
import aboutBanner from "@/assets/about-banner.jpg";
import heritageImage from "@/assets/heritage-image.jpg";
import scienceImage from "@/assets/science-image.jpg";
import sourcingImage from "@/assets/sourcing-image.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutBanner})` }}
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
            Our Story
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A tribute to the beauty, strength, and timeless wisdom of the Maasai people.
          </motion.p>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="relative py-24 overflow-hidden">
        <FloatingBotanicals variant="minimal" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <motion.img
                  src={heritageImage}
                  alt="African botanical skincare heritage"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal direction="right">
                <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Heritage</p>
                <div className="w-12 h-[1px] bg-secondary mb-8" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                  Born from Ancient Rituals
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15}>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    For centuries, the Maasai people of East Africa have practiced beauty rituals
                    that honor their deep connection to the land. Using indigenous plants, mineral-rich
                    clays, and sacred herbs, theyve maintained radiant, resilient skin despite the
                    harsh African sun.
                  </p>
                  <p>
                    Maasai Elixir was born from a desire to share this wisdom with the world—not
                    as exploitation, but as celebration. Every product we create pays homage to
                    these ancient practices while supporting the communities that inspired them.
                  </p>
                  <p>
                    Our founder spent years learning from Maasai elders, understanding not just
                    the ingredients they used, but the philosophy behind their approach to beauty:
                    that true radiance comes from harmony with nature.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 bg-card overflow-hidden">
        <FloatingBotanicals variant="section" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal direction="left">
                <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Science</p>
                <div className="w-12 h-[1px] bg-secondary mb-8" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                  Where Tradition Meets Science
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.15}>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    We believe that the best skincare honors both ancestral knowledge and modern
                    innovation. Our formulations begin with time-tested African botanicals,
                    then enhance them with cutting-edge skincare science.
                  </p>
                  <p>
                    Each ingredient is carefully selected for its proven benefits—verified
                    through clinical research while respecting traditional usage. The result
                    is skincare that works in harmony with your skin, not against it.
                  </p>
                  <p>
                    Our products are free from harsh chemicals, synthetic fragrances, and
                    artificial preservatives. We use only what nature provides, enhanced
                    by what science confirms.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <motion.img
                  src={scienceImage}
                  alt="Skincare science and natural ingredients"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="relative py-24 overflow-hidden">
        <FloatingBotanicals variant="minimal" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <motion.img
                  src={sourcingImage}
                  alt="Ethical ingredient sourcing in Africa"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal direction="right">
                <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Sourcing</p>
                <div className="w-12 h-[1px] bg-secondary mb-8" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                  Ethically Sourced, Community Centered
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15}>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Every ingredient in our products is ethically sourced through fair trade
                    partnerships with African farming cooperatives. We work directly with
                    communities to ensure fair wages and sustainable harvesting practices.
                  </p>
                  <p>
                    A portion of every purchase goes back to support education and healthcare
                    initiatives in the regions where our ingredients originate. When you choose
                    Maasai Elixir, youre investing in the wellbeing of these communities.
                  </p>
                  <p>
                    Our commitment to sustainability extends to our packaging—we use recyclable
                    materials and minimal plastic, because honoring the earth is part of
                    honoring the traditions that inspire us.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <FloatingBotanicals variant="accent" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/70 mb-4">Our Promise</p>
            <div className="w-16 h-[1px] bg-primary-foreground/30 mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Our Promise
            </h2>
            <p className="text-xl leading-relaxed text-primary-foreground/90 mb-8">
              To create skincare that celebrates African heritage, respects the earth,
              and reveals your most radiant self. Every product is a bridge between
              ancient wisdom and modern beauty.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-sm tracking-[0.15em] uppercase"
            >
              <Link to="/products">Explore Our Products</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;