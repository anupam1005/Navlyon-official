import { MessageSquare, ClipboardList, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Requirement Discussion',
    description: 'We start by understanding your business, goals, and vision. This free consultation helps us propose the perfect solution.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planning & Proposal',
    description: 'We create a detailed project plan with timeline, features, and transparent pricing. You review and approve before we start.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Development',
    description: 'Our team builds your solution with regular updates and checkpoints. You stay involved throughout the process.',
  },
  {
    number: '04',
    icon: TestTube,
    title: 'Testing & QA',
    description: 'Rigorous testing ensures your website or app works flawlessly across all devices and scenarios.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch & Delivery',
    description: 'We deploy your project and provide complete handover including training and documentation.',
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description: 'Our relationship doesn\'t end at launch. We offer maintenance, updates, and support—with EMI flexibility.',
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-nav">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            How We Work Together
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            A proven process that delivers results on time and within budget. 
            Clear communication at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                {/* Number & Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-white/10">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-amber-warm/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-amber-warm" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector (hidden on last items of rows) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-amber-warm/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
