import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-nav">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="section-title mt-3">
              Let's Build Something Great Together
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to start your project? Have questions about our services or EMI plans? 
              We'd love to hear from you. Reach out and let's discuss how we can help 
              your business grow.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">navlyonofficial@navlyon.com</p>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-warm/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-warm" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call or WhatsApp</h4>
                  <p className="text-muted-foreground">+91 6297667981</p>
                  <p className="text-sm text-muted-foreground">Mon-Sun</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">India</p>
                  <p className="text-sm text-muted-foreground">Serving clients nationwide</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up animation-delay-200">
            <form onSubmit={handleSubmit} className="card-elevated p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Request a Free Consultation
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-amber-warm focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-amber-warm focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-amber-warm focus:border-transparent transition-all"
                    placeholder="Your Number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-amber-warm focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="backend">Backend & API Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="growth">Business Growth Assistance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-amber-warm focus:border-transparent transition-all resize-none"
                    placeholder="Brief description of what you want to build..."
                  />
                </div>

                <Button variant="accent" size="lg" className="w-full" type="submit">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted about your inquiry. 
                  We respect your privacy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
