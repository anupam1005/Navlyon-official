import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dipanjan Chaterjee',
    role: 'Founder, Mathematico',
    company: 'Teaching',
    content: 'Navlyon transformed my Teaching Career into a thriving online System. The EMI option made it possible for us to invest in technology without straining our budget.',
    rating: 4,
  },
  {
    name: 'Rahul Mehta',
    company: 'Student',
    content: 'The Project they built for us has become our biggest differentiator. Anupam and his team truly understood our vision and delivered beyond expectations. Professional yet affordable.',
    rating: 5,
  },
  {
    name: 'Dr. Sunita Patel',
    company: 'Student',
    content: 'During COVID, we needed to go digital fast. Navlyon delivered our teleconsultation platform in just 6 weeks. The 6-month EMI plan helped us manage cash flow during a difficult time.',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'Owner, QuickBites Restaurant',
    company: 'F&B',
    content: 'The QR ordering system has reduced our order processing time by 40%. What impressed me most was their ongoing support—they\'re always a WhatsApp message away.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-nav">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="section-title mt-3">
            Trusted by Growing Businesses
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Don't just take our word for it. Here's what our clients say about 
            working with Navlyon.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated p-6 lg:p-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-amber-warm/30 mb-4" />

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-warm text-amber-warm" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
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

export default TestimonialsSection;
