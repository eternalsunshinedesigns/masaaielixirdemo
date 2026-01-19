import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl font-medium tracking-wide mb-2">
              MAASAI ELIXIR
            </h3>
            <p className="text-[10px] tracking-[0.3em] uppercase text-cream/60 mb-6">
              African Botanical Skincare
            </p>
            <p className="text-cream/70 leading-relaxed text-sm max-w-md">
              Ancient African wisdom meets modern skincare science. 
              We honor the beauty rituals of the Maasai people through 
              luxurious, ethically crafted skincare.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-6">Shop</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/products" className="text-cream/70 hover:text-cream transition-colors text-sm">
                All Products
              </Link>
              <Link to="/products" className="text-cream/70 hover:text-cream transition-colors text-sm">
                Facial Care
              </Link>
              <Link to="/products" className="text-cream/70 hover:text-cream transition-colors text-sm">
                Body Care
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-6">Company</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/about" className="text-cream/70 hover:text-cream transition-colors text-sm">
                Our Story
              </Link>
              <Link to="/ingredients" className="text-cream/70 hover:text-cream transition-colors text-sm">
                Our Rituals
              </Link>
              <Link to="/contact" className="text-cream/70 hover:text-cream transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-6">Stay Connected</h4>
            <p className="text-cream/70 text-sm mb-6 leading-relaxed">
              Join our community for rituals, stories, and exclusive offers.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-cream hover:bg-cream/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-cream hover:bg-cream/10 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="mailto:hello@maasaielixir.com" 
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-cream hover:bg-cream/10 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-xs tracking-wide">
              © {new Date().getFullYear()} Maasai Elixir. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-cream/50">
              <span>Mombasa, Kenya</span>
              <span>•</span>
              <span>Serving clients worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
