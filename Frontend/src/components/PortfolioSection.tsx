import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Mathematico',
    category: 'Mobile Application',
    description: 'Advanced mathematical computation platform with equation solving, graphing capabilities, and collaborative problem-solving features.',
    tech: ['TypeScript', 'React Native', 'Node.js'],
    image: '/mathematico.jpeg',
  },
  {
    title: 'HomeFood',
    category: 'Mobile Application',
    description: 'Food delivery and restaurant management app with real-time tracking, menu ordering, and customer loyalty features.',
    tech: ['JavaScript', 'React Native', 'Firebase'],
    image: '/HomeFood.jpg',
  },
  {
    title: 'CONQUEST-WARRIORS',
    category: 'Web Development',
    description: 'Action-packed multiplayer conquest game with strategic gameplay and real-time battle mechanics.',
    tech: ['TypeScript', 'Html', 'css'],
  },
  {
    title: 'Mathematico-web',
    category: 'Web Platform',
    description: 'Web-based version of Mathematico with enhanced UI/UX and cloud synchronization features.',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL'],
    image: '/mathematico.jpeg',
  },
  {
    title: 'cosmos-login-site',
    category: 'Authentication System',
    description: 'Secure authentication platform with multi-provider login and advanced security features.',
    tech: ['TypeScript', 'React', 'Auth0'],
  },
  {
    title: 'starshine-hub',
    category: 'Social Platform',
    description: 'Community hub platform with social features, content sharing, and user engagement tools.',
    tech: ['TypeScript', 'Vue.js', 'Node.js'],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
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
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-lg font-medium">
                      {project.title}
                    </span>
                  </div>
                )}
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
            Want to see your demo? Check out our work in action!
          </p>
          <div className="mb-6">
            <img 
              src="/demo-pic.jpg" 
              alt="Demo screenshot" 
              className="mx-auto rounded-lg shadow-lg max-w-md"
            />
          </div>
          <Button variant="default" size="lg">
            View Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
