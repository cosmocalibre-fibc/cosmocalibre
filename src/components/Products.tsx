import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import uPanelImg from "/cosmo-bags-rebrand/assets/products/u.jpeg";
import fullImg from "/cosmo-bags-rebrand/assets/products/fulloop.png";
import baffleImg from "/cosmo-bags-rebrand/assets/products/baffle.jpg";
import ventilatedImg from "/cosmo-bags-rebrand/assets/products/ventil.jpeg";
import circularImg from "/cosmo-bags-rebrand/assets/products/circular.png";

const products = [
   {
    name: "Circular ",
    image: circularImg,
    description: "Tubular construction offering excellent shape retention and uniform load distribution for various materials.",
  },
  {
    name: "U Panel ",
    image: uPanelImg,
    description: "Versatile and cost-effective design with three fabric panels forming a U-shape. Ideal for a wide range of applications.",
  },
  {
    name: "Full loop ",
    image: fullImg,
    description: "Features lifting loops integrated into the bag body for enhanced strength and durability during transportation.",
  },
  {
    name: "Baffle",
    image: baffleImg,
    description: "Internal baffles maintain cubic shape, maximizing storage space and improving stability during stacking.",
  },
  {
    name: "Ventilated ",
    image: ventilatedImg,
    description: "Breathable design with ventilation strips, perfect for products requiring air circulation like agricultural goods.",
  },
 
];

const Products = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">FIBC Products</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Premium quality jumbo bags customized to your specific requirements. From 500 kgs to 2000 kgs capacity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden bg-muted/30 h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary text-secondary-foreground rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg mb-6 opacity-90">
            We offer fully customizable FIBC bags tailored to your exact specifications
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
