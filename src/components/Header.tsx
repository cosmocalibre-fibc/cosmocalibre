import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logoImg from "@/assets/logo-card.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <img src="/cosmocalibre/cosmo.png" alt="Cosmo Calibre" className="h-14 md:h-20 object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              Products
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              Why Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              Contact
            </button>
            <ThemeToggle />
            <Button onClick={() => scrollToSection("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-semibold text-lg py-3">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-semibold text-lg py-3">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-semibold text-lg py-3">
              Products
            </button>
            <button onClick={() => scrollToSection("why-us")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-semibold text-lg py-3">
              Why Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-semibold text-lg py-3">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-3">
              Request Quote
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
