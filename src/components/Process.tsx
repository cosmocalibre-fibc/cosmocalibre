import extrusionImg from "@/assets/process/extrusion.jpg";
import laminationImg from "@/assets/process/lamination.jpg";
import printingImg from "@/assets/process/printing.jpg";
import inspectionImg from "@/assets/process/inspection.jpg";

const processSteps = [
  { step: "01", title: "PP Granules", description: "High-quality raw materials selection" },
  { step: "02", title: "Extrusion", description: "Converting granules into fabric", image: extrusionImg },
  { step: "03", title: "Lamination", description: "Adding protective coating layers", image: laminationImg },
  { step: "04", title: "Weaving", description: "Creating strong fabric structure" },
  { step: "05", title: "Cutting", description: "Precise cutting to specifications" },
  { step: "06", title: "Printing", description: "Custom branding and labels", image: printingImg },
  { step: "07", title: "Stitching", description: "Expert assembly and construction" },
  { step: "08", title: "Inspection", description: "Rigorous quality control checks", image: inspectionImg },
  { step: "09", title: "Packing", description: "Secure packaging for delivery" },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Production <span className="text-primary">Process</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From raw materials to finished product - every step ensures premium quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((process, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 bg-card"
            >
              {process.image ? (
                <div className="relative h-48 overflow-hidden bg-muted/30">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                </div>
              ) : (
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-8xl font-bold text-primary/20">{process.step}</div>
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
