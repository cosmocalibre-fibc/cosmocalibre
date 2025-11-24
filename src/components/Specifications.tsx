import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const specifications = [
  {
    title: "Loops",
    options: ["1 loop", "2 loops", "4 loops", "Cross-corner", "Ancillary", "Stevedore", "Tunnel"],
  },
  {
    title: "Liners",
    options: ["Baffle", "Conductive", "Without Liner"],
  },
  {
    title: "Lamination",
    options: ["Coated", "Uncoated"],
  },
  {
    title: "Printing",
    options: ["Up to 4 colors", "Unprinted"],
  },
  {
    title: "Inlet Options",
    options: ["Fully open", "Skirt", "Spout", "Pyjama", "Flap", "With Tie"],
  },
  {
    title: "Outlet Options",
    options: ["Closed", "Spout", "Pyjama", "Flap", "With Tie"],
  },
  {
    title: "Fabric Color",
    options: ["White", "Peach", "Custom colors available"],
  },
  {
    title: "Safety Factor",
    options: ["5:1", "6:1", "7:1"],
  },
];

const Specifications = () => {
  return (
    <section id="specifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            FIBC <span className="text-primary">Specifications</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive customization options to meet your exact requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specifications.map((spec, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {spec.options.map((option, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                      {option}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Safe Working Load</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-2">500 - 2000 kg</p>
              <p className="text-muted-foreground">Customizable based on your requirements</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-muted-foreground">Fully customizable to your specifications</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
