import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Terms of Service</h1>
        <div className="space-y-6 text-[15px] font-sans text-secondary leading-relaxed">
          <p>Effective Date: January 1, {new Date().getFullYear()}</p>
          <p>
            Welcome to AutoVerse India. By accessing our platform, visiting our showrooms, or utilizing our services, you agree to be bound by the following Terms of Service. Please read them carefully as they govern your relationship with us.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>
            These terms constitute a legally binding agreement between you and AutoVerse India. Your continued use of our website and services indicates your acknowledgment and acceptance of these conditions. If you do not agree with any part of these terms, you must refrain from using our platform.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">2. Vehicle Information and Pricing</h2>
          <p>
            We strive to ensure that all vehicle specifications, availability, and pricing details displayed on our platform are accurate and up-to-date. However, the automotive market is dynamic. Prices, features, and availability are subject to change without prior notice. AutoVerse India reserves the right to correct any errors or omissions and to cancel orders arising from such inaccuracies.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">3. Purchases and Financing</h2>
          <p>
            All vehicle purchases are subject to separate formal agreements and documentation. The tailored financing options presented on our platform are illustrative and contingent upon credit approval by our financial partners. Final terms, interest rates, and loan structures will be outlined in your final financial agreement.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">4. Intellectual Property</h2>
          <p>
            All content on the AutoVerse India platform—including but not limited to branding, imagery, text, and digital design—is the exclusive property of AutoVerse India or our respective manufacturing partners. You may not reproduce, distribute, or commercially exploit this material without our explicit written consent.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">5. Limitation of Liability</h2>
          <p>
            While we are committed to providing an exceptional digital and physical experience, AutoVerse India shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our website, interruptions in service, or reliance on the information provided herein.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">6. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
