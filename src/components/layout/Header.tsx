import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Shop", path: "/products" },
  { label: "Our Rituals", path: "/ingredients" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-widest uppercase">
        Free Shipping on Orders Over $100
      </div>
      
      <div className="border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Centered Logo */}
          <div className="flex items-center justify-center py-6">
            <Link to="/" className="flex flex-col items-center group">
              <span className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-primary transition-colors group-hover:text-secondary">
                MAASAI ELIXIR
              </span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground mt-1 uppercase">
                African Botanical Skincare
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Below Logo */}
          <nav className="hidden md:flex items-center justify-center space-x-12 pb-4">
            <Link
              to="/"
              className={cn(
                "text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:text-secondary pb-1",
                location.pathname === "/"
                  ? "text-secondary border-b border-secondary"
                  : "text-foreground/70"
              )}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:text-secondary pb-1",
                  location.pathname === item.path
                    ? "text-secondary border-b border-secondary"
                    : "text-foreground/70"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute top-16 right-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 px-6 border-t border-border/50 animate-fade-in bg-background">
            <div className="flex flex-col items-center space-y-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium tracking-[0.15em] uppercase py-2 transition-colors duration-300",
                  location.pathname === "/"
                    ? "text-secondary"
                    : "text-foreground/70 hover:text-secondary"
                )}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium tracking-[0.15em] uppercase py-2 transition-colors duration-300",
                    location.pathname === item.path
                      ? "text-secondary"
                      : "text-foreground/70 hover:text-secondary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
