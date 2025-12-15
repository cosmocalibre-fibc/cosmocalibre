import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: "/bbo.png", alt: "BBQ Product" },
    { src: "/bag.png", alt: "Premium Jumbo Bags" },
    { src: "/contain.png", alt: "Cosmo Bag 3" },
    { src: "/bag4.png", alt: "Bag 4" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
         
          
          <div className="mb-8 flex justify-center items-center gap-0 relative px-4">
            {/* Full width carousel container */}
            <div className="relative w-full max-w-7xl h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
              {/* Carousel images - previous image smaller on left, main image on right */}
              {images.map((image, index) => {
                let position = index - currentImageIndex;
                if (position < -1) position += images.length;
                if (position > 1) position -= images.length;

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 ${
                      position === 0
                        ? 'left-1/4 top-0 bottom-0 right-0 z-20 opacity-100'
                        : position === -1
                        ? 'left-0 top-0 bottom-0 w-1/4 z-10 opacity-75 scale-90 origin-left'
                        : 'opacity-0 z-0'
                    }`}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                );
              })}

              {/* Left arrow button */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white/60"
                aria-label="Previous image"
                type="button"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>

              {/* Right arrow button */}
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white/60"
                aria-label="Next image"
                type="button"
              >
                <ChevronRightIcon size={24} className="text-white" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-6 right-6 z-30 bg-black/70 px-4 py-2 rounded-full">
                <p className="text-white font-semibold text-sm tracking-wide">
                  {currentImageIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
          
          {/* Image Indicators */}
          <div className="flex justify-center gap-2 mb-12 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentImageIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground hover:bg-primary/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
                type="button"
              />
            ))}
          </div>
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-gray-800 dark:text-primary font-semibold text-sm tracking-wide">JUMBO BAG MANUFACTURER IN INDIA</span>
          </div>
          <div className="mb-12">
            <p className="text-2xl md:text-4xl font-bold mb-2">
              <span className="text-secondary">COSMO&nbsp;</span>
              <span className="text-primary">HOLDER</span>
            </p>
            <p className="text-sm tracking-widest text-black dark:text-white">Customizes FIBC Bags to your preferences.</p>
            <p className="text-sm tracking-widest text-black dark:text-white">It assures you end to end handling of goods, from pickup, transportation &amp; all your storage needs.</p>
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
