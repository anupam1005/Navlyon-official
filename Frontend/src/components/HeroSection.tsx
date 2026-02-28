import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import teamImg from '@/assets/team-office.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden pt-20">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-primary/[0.04] rounded-bl-[100px] hidden md:block" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-60 h-60 bg-accent/[0.06] rounded-full blur-3xl" />

      <div className="container-nav relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6 animate-fade-up">
              <span className="text-primary text-xs sm:text-sm font-semibold">
                Affordable Tech Solutions with Easy EMI
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.15] mb-5 animate-fade-up animation-delay-100">
              Navigating Your Business Beyond Limits{' '}
              <br className="hidden sm:block" />
              with Easy EMI
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md leading-relaxed animate-fade-up animation-delay-200">
              Navlyon builds Premium Websites, scalable Mobile Applications, and Modern Digital Solutions for growing businesses worldwide
            </p>

            {/* Pricing Cards */}
            <div className="flex gap-8 sm:gap-12 mb-8 animate-fade-up animation-delay-200">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-primary">₹20,000+</span>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Websites Starting From</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-primary">₹50,000+</span>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Mobile Apps Starting From</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-up animation-delay-300">
              <Button variant="default" size="lg" className="rounded-xl text-sm sm:text-base">
                Build Your Website or App with Easy EMI
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl text-sm sm:text-base">
                <Phone className="w-4 h-4" />
                Free Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-5 animate-fade-up animation-delay-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-muted-foreground text-xs sm:text-sm">No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-muted-foreground text-xs sm:text-sm">Transparent Invoicing</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image + Floating Card */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50">
              <img
                src={teamImg}
                alt="Navlyon team collaborating in a modern office"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            {/* Floating EMI Card */}
            <div className="absolute -bottom-5 left-4 sm:left-8 bg-card rounded-xl shadow-elevated border border-border/50 p-4 flex items-center gap-3 animate-fade-up animation-delay-400">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Flexible EMI Plans</p>
                <p className="text-muted-foreground text-xs">3, 6, or 9 Months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
