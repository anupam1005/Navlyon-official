import { Users, Target, Handshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-nav">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
              About Navlyon
            </span>
            <h2 className="section-title mt-3">
              Building Digital Success Stories Since Day One
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Navlyon was founded with a clear mission: to make professional technology 
              solutions accessible to every ambitious business in India. We believe that 
              budget constraints should never hold back a great idea.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Led by founder <strong className="text-foreground">Anupam Das</strong>, our team combines 
              technical expertise with genuine care for client success. We don't just 
              build websites and apps—we build partnerships that help businesses thrive 
              in the digital age.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Client-First</h3>
                <p className="text-sm text-muted-foreground">
                  Your goals drive every decision we make
                </p>
              </div>
              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-amber-warm/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-amber-warm" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Result-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  We measure success by your growth
                </p>
              </div>
              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Transparent</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden costs, clear communication
                </p>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="card-elevated p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">14+</div>
                  <p className="text-muted-foreground text-sm">Projects Delivered</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-bold text-amber-warm mb-2">100%</div>
                  <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-bold text-success mb-2">3+</div>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground text-sm">Support Available</p>
                </div>
              </div>

              {/* Founder Note */}
              <div className="mt-8 pt-8 border-t border-border">
                <blockquote className="text-muted-foreground italic">
                  "Every business deserves technology that works for them, not against 
                  their budget. That's why we built Navlyon."
                </blockquote>
                <p className="mt-4 font-semibold text-foreground">
                  — Anupam Das, Founder
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 rounded-xl bg-gradient-to-br from-amber-warm/20 to-primary/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
