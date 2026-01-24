import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/products";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavItems = [
  { label: "About", path: "/about" },
  { label: "Our Ingredients", path: "/ingredients" },
  { label: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-[0.2em] uppercase">
        Premium African Botanical Skincare
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
          <nav className="hidden md:flex items-center justify-center space-x-10 pb-4">
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
            
            {/* Shop Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "flex items-center gap-1 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:text-secondary pb-1 outline-none",
                location.pathname.startsWith("/products")
                  ? "text-secondary border-b border-secondary"
                  : "text-foreground/70"
              )}>
                Shop
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/products" className="w-full cursor-pointer">
                    <span className="text-xs tracking-[0.1em] uppercase">All Products</span>
                  </Link>
                </DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link to={`/products?category=${category.id}`} className="w-full cursor-pointer">
                      <span className="text-xs tracking-[0.1em] uppercase">{category.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {mainNavItems.map((item) => (
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
              
              {/* Mobile Shop Section */}
              <div className="flex flex-col items-center space-y-2 py-2">
                <Link
                  to="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300",
                    location.pathname === "/products"
                      ? "text-secondary"
                      : "text-foreground/70 hover:text-secondary"
                  )}
                >
                  Shop All
                </Link>
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-secondary transition-colors px-2 py-1"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {mainNavItems.map((item) => (
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
