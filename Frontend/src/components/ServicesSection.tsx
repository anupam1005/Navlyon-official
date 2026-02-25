import { Globe, Smartphone, Server, Palette, Wrench, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    price: '₹20,000',
    description: 'Custom-built, responsive websites that convert visitors into customers. From landing pages to full e-commerce platforms.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    price: '₹50,000',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
    features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Submission'],
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    price: 'Custom Quote',
    description: 'Robust server-side solutions and APIs that power your applications with security and scalability.',
    features: ['RESTful APIs', 'Database Design', 'Cloud Hosting', 'Security First'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    price: '₹15,000',
    description: 'User-centered design that looks beautiful and works intuitively. From wireframes to final polish.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Consistency'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    price: '₹5,000/mo',
    description: 'Keep your digital assets running smoothly with our ongoing maintenance and technical support.',
    features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Performance Optimization'],
  },
  {
    icon: TrendingUp,
    title: 'Business Growth Assistance',
    price: 'Custom Quote',
    description: 'Tech-driven strategies to accelerate your business growth, from analytics to automation.',
    features: ['Analytics Setup', 'Automation Tools', 'Growth Strategy', 'Marketing Tech'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-nav">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="section-title mt-3 mx-auto">
            Everything You Need to Go Digital
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            From concept to launch and beyond, we provide end-to-end technology solutions 
            tailored to your business needs and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated p-6 lg:p-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-amber-warm/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title & Price */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Starting Price */}
              <div className="price-tag mb-4">
                Starting from {service.price}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-warm" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="w-full group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-6">
            Not sure which service you need? Let's discuss your project.
          </p>
          <Button variant="accent" size="lg">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
