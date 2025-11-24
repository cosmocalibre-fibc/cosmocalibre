import { CheckCircle2, Clock, Award, Users, TrendingUp, Wrench, DollarSign, Zap } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Highly Customizable",
    description: "Tailor-made solutions for your specific needs",
  },
  {
    icon: Award,
    title: "Quality Consistency",
    description: "Strict quality control at every stage",
  },
  {
    icon: Clock,
    title: "Less Lead Time",
    description: "Fast turnaround for urgent requirements",
  },
  {
    icon: TrendingUp,
    title: "High Supply Capacity",
    description: "Large-scale production capabilities",
  },
  {
    icon: Users,
    title: "Highly Skilled Team",
    description: "Experienced professionals at your service",
  },
  {
    icon: DollarSign,
    title: "Reasonable Price",
    description: "Competitive pricing without compromise",
  },
  {
    icon: CheckCircle2,
    title: "Brand Maintenance",
    description: "Consistent quality for your brand reputation",
  },
  {
    icon: Zap,
    title: "Punctual Delivery",
    description: "On-time delivery, every time",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Cosmo Holder</span>?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We deliver excellence through quality, reliability, and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
