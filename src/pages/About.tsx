import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-card via-background to-sand/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6 animate-fade-in-up">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in-delay">
              A tribute to the beauty, strength, and timeless wisdom of the Maasai people.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] placeholder-image rounded-sm flex items-center justify-center">
              <span className="text-muted-foreground/50 font-serif text-lg">
                Heritage Image
              </span>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                Born from Ancient Rituals
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  For centuries, the Maasai people of East Africa have practiced beauty rituals 
                  that honor their deep connection to the land. Using indigenous plants, mineral-rich 
                  clays, and sacred herbs, they've maintained radiant, resilient skin despite the 
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
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                Where Tradition Meets Science
              </h2>
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
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] placeholder-image rounded-sm flex items-center justify-center">
              <span className="text-muted-foreground/50 font-serif text-lg">
                Science Image
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] placeholder-image rounded-sm flex items-center justify-center">
              <span className="text-muted-foreground/50 font-serif text-lg">
                Sourcing Image
              </span>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                Ethically Sourced, Community Centered
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Every ingredient in our products is ethically sourced through fair trade 
                  partnerships with African farming cooperatives. We work directly with 
                  communities to ensure fair wages and sustainable harvesting practices.
                </p>
                <p>
                  A portion of every purchase goes back to support education and healthcare 
                  initiatives in the regions where our ingredients originate. When you choose 
                  Maasai Elixir, you're investing in the wellbeing of these communities.
                </p>
                <p>
                  Our commitment to sustainability extends to our packaging—we use recyclable 
                  materials and minimal plastic, because honoring the earth is part of 
                  honoring the traditions that inspire us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Our Promise
            </h2>
            <p className="text-xl leading-relaxed text-primary-foreground/90 mb-8">
              "To create skincare that celebrates African heritage, respects the earth, 
              and reveals your most radiant self. Every product is a bridge between 
              ancient wisdom and modern beauty."
            </p>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
            >
              <Link to="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
