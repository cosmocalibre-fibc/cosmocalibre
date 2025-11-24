import { Target, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Cosmo Holder</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Powered by Cosmo Calibre - We Care and Carry for You
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To have sustainable development and to assist our customers to achieve sustainable development through our product and service offerings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To assist customers to achieve their business objectives by providing High-Quality Products & Services with prompt Delivery and will go the extra mile to help with any situation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card border-2 border-border rounded-xl p-8 md:p-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Who We Are</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            COSMO HOLDER is a Jumbo bag brand of the company COSMO CALIBRE. We are deeply committed to ensuring the quality of our products right from inspecting the raw materials, their properties, purity, and adhering to all declared qualities in the factory. Our extensive inventory and perfect logistic management enable us to deliver our products to customers 24x7.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            In an ever-changing demand and market space, we work tirelessly to provide very competitive pricing to our traditional wholesalers and internet dealers. We have been exporting FIBCs to the global market since 2018. There will not be any necessity for our wholesalers, dealers, sub-dealers, and resellers to negotiate with our appropriate prices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
