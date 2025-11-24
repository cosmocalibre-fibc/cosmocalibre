import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-secondary tracking-tight">COSMO</span>
              <span className="text-xs text-primary font-semibold tracking-widest">CALIBRE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-foreground hover:text-primary transition-colors font-medium">
              Why Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Products
            </button>
            <button onClick={() => scrollToSection("why-us")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Why Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Request Quote
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
