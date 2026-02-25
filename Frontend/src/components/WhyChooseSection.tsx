import { Wallet, Lightbulb, MessageCircle, Award, Clock, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Wallet,
    title: 'Budget-Friendly Pricing',
    description: 'Enterprise-quality solutions at startup-friendly prices. We believe great technology should be accessible to all.',
  },
  {
    icon: Lightbulb,
    title: 'Startup-Focused Mindset',
    description: 'We understand the challenges of growing a business. Our solutions are designed to scale with your success.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'No middlemen or account managers. You work directly with the team building your project.',
  },
  {
    icon: Award,
    title: 'Corporate Professionalism',
    description: 'Professional processes, documented deliverables, and enterprise-grade quality in every project.',
  },
  {
    icon: Clock,
    title: 'Flexible EMI Options',
    description: 'Pay over 3, 6, or 9 months with our simple invoice-based EMI system. Start building today.',
  },
  {
    icon: Shield,
    title: 'Long-Term Partnership',
    description: 'We\'re invested in your success. Ongoing support and maintenance keeps your technology running smoothly.',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-nav">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
            Why Navlyon
          </span>
          <h2 className="section-title mt-3">
            The Smart Choice for Growing Businesses
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            We combine affordability with excellence, giving you the best of both worlds.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-amber-warm/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
