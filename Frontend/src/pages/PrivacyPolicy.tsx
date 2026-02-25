import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          
          <div className="text-sm text-muted-foreground mb-8">
            <p><strong>Effective Date:</strong> 24-02-2026</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Privacy Policy explains how Navlyon (OPC) Private Ltd. ("Company", "we", "our", "us") collects, uses, and safeguards information.
            </p>
            <p className="mb-4">
              This policy is framed in accordance with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Information Technology Act, 2000</li>
              <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect the following information voluntarily provided by users:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number (if provided)</li>
              <li>Business Information (if shared)</li>
              <li>Messages or inquiries</li>
            </ul>
            <p className="mb-4">
              Additionally, limited technical data may be collected automatically through server logs:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              We do not collect financial or payment information through this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Purpose of Collection</h2>
            <p className="mb-4">
              Information is collected solely for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to inquiries</li>
              <li>Providing contracted services</li>
              <li>Business communication</li>
              <li>Website security and maintenance</li>
            </ul>
            <p className="mt-4 font-medium">
              We do not sell, trade, or rent personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              The Company implements reasonable security practices to protect collected data. However, no electronic transmission is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p>
              Data is retained only for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>The duration necessary to fulfill its purpose</li>
              <li>Legal or contractual obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Infrastructure</h2>
            <p className="mb-4">
              The website may be hosted on third-party servers. Such providers may process technical data as part of normal hosting operations.
            </p>
            <p className="text-sm text-muted-foreground">
              No marketing or advertising trackers are used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. User Rights</h2>
            <p className="mb-4">
              Users may request:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Access to their data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of personal information</li>
            </ul>
            <p>
              Requests can be sent to: navlyonofficial@navlyon.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Policy Updates</h2>
            <p>
              The Company reserves the right to update this Privacy Policy. Updates will be reflected with a revised effective date.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
