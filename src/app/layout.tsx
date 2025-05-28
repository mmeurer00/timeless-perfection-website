import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Timeless Perfection | Modern Beauty & Wellness in Cleveland',
  description: 'Holistic beauty and wellness services including hair care, nail care, and massage therapy in a peaceful Cleveland setting.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800 m-0 p-0">
        {/* Header Navigation */}
        <header className="fixed top-0 left-0 w-full z-50 bg-brand-teal text-white px-4 sm:px-8 py-2 md:py-3 m-0 transition-all duration-300">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <a href="/" className="flex items-center space-x-3 group">
  <Image
    src="/flower.svg"
    alt="Timeless Perfection Logo"
    width={50}
    height={50}
    className="transition-transform duration-300 group-hover:scale-105"
  />
  <h1 className="text-xl font-[Cormorant_Garamond] font-light text-white">
    Timeless Perfection
  </h1>
</a>

            </div>
            <nav className="flex space-x-4 sm:space-x-8 text-sm">
              <a href="/services" className="hover:text-brand-yellow transition-colors">Services</a>
              <a href="/schedule" className="hover:text-brand-yellow transition-colors">Book Now</a>
            </nav>
          </div>
        </header>
        
        <main className="m-0 p-0 min-h-screen pt-16">{children}</main>
        
        {/* Footer */}
        <footer className="bg-brand-teal text-white py-12">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8">
                    <Image
                      src="/logo-white.svg"
                      alt="Timeless Perfection Logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <Image
                    src="/flower.svg"
                    alt="Timeless Perfection Logo"
                    width={50}
                    height={50}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="text-xl font-[Cormorant_Garamond] text-white">Timeless Perfection</span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed max-w-md">
                  Modern beauty care meets timeless wellness practices. Experience personalized treatments designed to restore balance, reduce stress, and promote your natural beauty.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-4 text-brand-yellow">Services</h5>
                <div className="text-sm text-gray-200 space-y-2">
                  <p>Hair Care & Styling</p>
                  <p>Nail Care & Manicures</p>
                  <p>Therapeutic Massage</p>
                  <p>Wellness Consultations</p>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4 text-brand-yellow">Contact</h5>
                <div className="text-sm text-gray-200 space-y-2">
                  <p>Central & South Florida</p>
                  <p>By Appointment Only</p>
                  <div className="pt-2">
                    <a href="mailto:hello@anzawellness.com" className="hover:text-brand-yellow transition-colors">
                      info@timelessperfection.com
                    </a>
                  </div>
                  <div>
                    <a href="tel:216-555-0123" className="hover:text-brand-yellow transition-colors">
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-brand-blue/30 mt-8 pt-8 flex flex-col md:flex-col md:flex-row justify-between items-center text-sm text-gray-300">
              <p>&copy; 2024 Timeless Perfection. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">Facebook</a>
                <a href="/privacy-policy" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}