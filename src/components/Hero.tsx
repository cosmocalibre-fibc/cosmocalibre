import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm tracking-wide">FIBC MANUFACTURER IN INDIA 🇮🇳</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-secondary">Premium</span>
            <br />
            <span className="text-primary">Jumbo Bags</span>
            <br />
            <span className="text-foreground">for Your Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Customized FIBC bags with end-to-end handling from pickup to storage. Quality guaranteed, delivered on time.
          </p>
          
          <div className="mb-12">
            <p className="text-lg font-semibold text-secondary mb-2">COSMO HOLDER</p>
            <p className="text-sm text-primary tracking-widest">MUTUAL BENEFITS AT ITS BEST</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group"
            >
              Request Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => window.open("tel:+919025028532", "_self")}
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">2000kg</p>
              <p className="text-sm text-muted-foreground">Max Capacity</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Delivery Service</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">Since 2018</p>
              <p className="text-sm text-muted-foreground">Global Export</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
