import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Maasai Elixir
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Ancient African wisdom meets modern skincare science. 
              We honor the beauty rituals of the Maasai people through 
              luxurious, ethically crafted skincare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Explore</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Story
              </Link>
              <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Products
              </Link>
              <Link to="/ingredients" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Rituals
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Stay Connected</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Join our community for rituals, stories, and exclusive offers.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                aria-label="Instagram"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:hello@maasaielixir.com" 
                aria-label="Email"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Maasai Elixir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
