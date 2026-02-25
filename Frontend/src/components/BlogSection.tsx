import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: '5 Reasons Your Startup Needs a Professional Website in 2024',
    excerpt: 'In today\'s digital-first world, your website is often the first impression potential customers have of your business. Here\'s why investing in a professional website matters.',
    category: 'Business Growth',
    date: 'Feb 1, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Mobile App vs. Website: Which Should Your Business Build First?',
    excerpt: 'Both mobile apps and websites have their place in your digital strategy. Learn how to decide which one to prioritize based on your business goals and audience.',
    category: 'Technology',
    date: 'Feb 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Understanding EMI for Business Technology Investments',
    excerpt: 'Breaking down the benefits of EMI-based payment options for technology investments. How startups can access enterprise-grade solutions without upfront capital.',
    category: 'Finance',
    date: 'Feb 20, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-nav">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 animate-fade-up">
          <div>
            <span className="text-amber-warm font-semibold text-sm uppercase tracking-wider">
              From Our Blog
            </span>
            <h2 className="section-title mt-3">
              Insights for Growing Businesses
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group card-elevated overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-amber-warm text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
