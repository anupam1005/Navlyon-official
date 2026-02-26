import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src="/MyPic.png" 
                  alt="Navlyon Professional" 
                  className="w-full rounded-lg shadow-lg object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold mb-6">About Navlyon</h1>
              <p className="text-lg leading-relaxed mb-6">
                Navlyon (OPC) Private Ltd. is a company incorporated under the provisions of the Companies Act, 2013 (India) as a One Person Company (OPC).
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The company operates as a technology solutions provider, offering structured digital development services including website development, custom web applications, and administrative software systems.
              </p>
              <p className="text-lg leading-relaxed">
                Navlyon functions as an independent corporate entity and does not claim affiliation, endorsement, or partnership with any external organization unless formally documented.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
            <p className="mb-4">We provide:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom website development</li>
              <li>Web application engineering</li>
              <li>Admin panel and dashboard systems</li>
              <li>Deployment and hosting configuration support</li>
              <li>Technical consultation services</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              All services are delivered strictly under defined scope, written agreements, and mutually approved project documentation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Legal Status</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p><strong>Legal Name:</strong> Navlyon (OPC) Private Ltd.</p>
              <p><strong>CIN:</strong> U**************</p>
              <p><strong>Registered Office:</strong> Deganga, Barasat, West Bengal - 743423</p>
              <p><strong>Country of Incorporation:</strong> India</p>
            </div>
            <p className="mt-4">
              As a One Person Company, Navlyon operates as a separate legal entity distinct from its director and shareholder.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Contact</h2>
            <p><strong>Official Email:</strong> navlyonofficial@navlyon.com</p>
            <p className="mt-4">
              For business inquiries, please contact us through the official communication channels listed above.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
