import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'GreenMart E-Commerce',
    category: 'Website Development',
    description: 'Complete e-commerce platform for an organic grocery store with payment integration, inventory management, and delivery tracking.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'FitTrack Mobile App',
    category: 'Mobile Development',
    description: 'Fitness tracking application with workout plans, progress analytics, and social features for a Bangalore-based gym chain.',
    tech: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'CloudBooks SaaS',
    category: 'Full Stack',
    description: 'Cloud-based accounting software for small businesses with invoicing, expense tracking, and GST compliance features.',
    tech: ['Vue.js', 'Django', 'AWS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'MedConnect Portal',
    category: 'Healthcare',
    description: 'Patient appointment booking and teleconsultation platform for a multi-specialty clinic with 15+ doctors.',
    tech: ['Next.js', 'Prisma', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'EduLearn LMS',
    category: 'Education',
    description: 'Learning management system with live classes, assignments, and progress tracking for a coaching institute.',
    tech: ['React', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'QuickServe Restaurant',
    category: 'Restaurant Tech',
    description: 'Digital ordering system with QR menus, kitchen display, and POS integration for a restaurant chain.',
    tech: ['Flutter', 'Firebase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background hidden">
      <div className="container-nav">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="section-title mt-3">
            Projects That Drive Results
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Real solutions for real businesses. Here's a selection of projects 
            we're proud to have delivered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group card-elevated overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="heroOutline" size="sm" className="w-full">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-amber-warm uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-6">
            Want to see your project join this gallery?
          </p>
          <Button variant="default" size="lg">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
