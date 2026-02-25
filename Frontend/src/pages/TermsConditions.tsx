import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>
          
          <div className="text-sm text-muted-foreground mb-8">
            <p><strong>Effective Date:</strong> 24-02-2026</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance</h2>
            <p>
              By accessing this website, you agree to comply with these Terms & Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Company Identity</h2>
            <p className="mb-4">
              This website is owned and operated by:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Navlyon (OPC) Private Ltd.</strong></p>
              <p>Incorporated under the Companies Act, 2013 (India)</p>
              <p><strong>CIN:</strong> [Insert CIN]</p>
              <p><strong>Registered Office:</strong> Deganga, Barasat, West Bengal - 743423</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Nature of Services</h2>
            <p className="mb-4">
              The Company provides technology development services on a contractual basis.
            </p>
            <p className="mb-4">
              Each service engagement is governed by a separate written agreement outlining:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scope</li>
              <li>Deliverables</li>
              <li>Timelines</li>
              <li>Payment terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. No Online Transactions</h2>
            <p>
              This website does not facilitate online payments. All financial transactions are conducted separately through formal agreements and invoicing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content displayed on this website, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Company name</li>
              <li>Logo</li>
              <li>Design</li>
              <li>Text</li>
              <li>Source code (excluding client-owned work)</li>
            </ul>
            <p className="font-medium">
              is the intellectual property of the Company.
            </p>
            <p className="mt-2">
              Unauthorized reproduction or distribution is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted under Indian law, the Company shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Indirect or consequential damages</li>
              <li>Loss of business or revenue</li>
              <li>Website downtime beyond reasonable control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p>
              The Company reserves the right to restrict or terminate access if terms are violated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms shall be governed by the laws of India.
            </p>
            <p>
              Any disputes shall be subject to the exclusive jurisdiction of courts located in [Insert Your State], India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Amendments</h2>
            <p>
              The Company reserves the right to modify these Terms at any time. Continued use of the website constitutes acceptance of updated terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
