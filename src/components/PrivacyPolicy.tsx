import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-[15px] font-sans text-secondary leading-relaxed">
          <p>Effective Date: January 1, {new Date().getFullYear()}</p>
          <p>
            At AutoVerse India, we hold your privacy in the highest regard. This Privacy Policy details our approach to collecting, utilizing, and safeguarding your personal information when you interact with our platform and services.
          </p>
          
          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us when expressing interest in our premium vehicles, registering for test drives, or subscribing to our newsletters. This may include your name, contact details, driving preferences, and financial information if you choose to explore tailored financing options.
          </p>
          <p>
            Additionally, we automatically collect basic usage data—such as IP addresses, browser types, and navigation paths—to continuously refine and optimize our digital showroom experience.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">2. How We Use Your Information</h2>
          <p>
            The information we gather is exclusively used to elevate your automotive journey. We utilize your data to facilitate seamless test drives, process secure transactions, provide dedicated relationship management, and communicate exclusive previews or service updates that align with your interests.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">3. Data Security and Sharing</h2>
          <p>
            We implement stringent, industry-leading security protocols to protect your data against unauthorized access. AutoVerse India does not sell or rent your personal information to third parties. We only share necessary data with trusted partners (such as financing institutions or certified logistics providers) strictly to fulfill the services you have requested, and only under strict confidentiality agreements.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">4. Your Rights</h2>
          <p>
            You retain full control over your personal data. You have the right to access, modify, or request the deletion of your information at any time. If you wish to update your preferences or opt out of marketing communications, you may do so through your account settings or by contacting our Privilege Support team.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">5. Contact Us</h2>
          <p>
            For any inquiries regarding this Privacy Policy or our data practices, please reach out to our dedicated privacy officers at <strong className="text-primary">privacy@autoverse.com</strong> or visit our corporate office at Nariman Point, Mumbai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
