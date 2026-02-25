import { Shield, Clock, FileText, CheckCircle, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const emiPlans = [
  {
    months: 3,
    label: '3 Months',
    description: 'Quick payment, lower interest',
    example: 'For a ₹60,000 project: ~₹20,000/month',
    popular: false,
  },
  {
    months: 6,
    label: '6 Months',
    description: 'Balanced flexibility',
    example: 'For a ₹60,000 project: ~₹10,000/month',
    popular: true,
  },
  {
    months: 9,
    label: '9 Months',
    description: 'Maximum flexibility',
    example: 'For a ₹60,000 project: ~₹6,700/month',
    popular: false,
  },
];

const EMISection = () => {
  return (
    <section id="emi" className="section-padding bg-background">
      <div className="container-nav">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
              Flexible Payments
            </span>
            <h2 className="section-title mt-3">
              Build Now, Pay in Easy Installments
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Don't let budget constraints delay your digital transformation. Our flexible 
              EMI options let you start building your website or app today and pay over time.
            </p>

            {/* How It Works */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Simple Invoice-Based System</h4>
                  <p className="text-muted-foreground text-sm">
                    We send you monthly invoices via email or WhatsApp. No complicated payment 
                    gateways or hidden fees.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-warm/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-warm" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Choose Your Timeline</h4>
                  <p className="text-muted-foreground text-sm">
                    Pick a 3, 6, or 9 month plan that fits your cash flow. Work continues 
                    as you pay.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Transparent & Trustworthy</h4>
                  <p className="text-muted-foreground text-sm">
                    No hidden charges, no surprises. The price you agree on is the price you pay.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-success" />
                No hidden charges
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-success" />
                No credit check required
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-success" />
                Flexible payment dates
              </div>
            </div>
          </div>

          {/* EMI Plans Cards */}
          <div className="space-y-4 animate-fade-up animation-delay-200">
            {emiPlans.map((plan) => (
              <div
                key={plan.months}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-amber-warm bg-gradient-to-r from-amber-warm/5 to-amber-light/5 shadow-glow'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 bg-amber-warm text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{plan.label}</h3>
                  <Calculator className="w-6 h-6 text-muted-foreground" />
                </div>

                <p className="text-muted-foreground mb-3">{plan.description}</p>

                <div className="text-sm font-medium text-primary bg-primary/5 rounded-lg px-3 py-2">
                  {plan.example}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <Button variant="accent" size="lg" className="w-full">
                Get Your Custom EMI Quote
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                We'll create a payment plan tailored to your project and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMISection;
