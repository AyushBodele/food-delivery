import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Swiggy One</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Swiggy Genie</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help & Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partner with us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ride with us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* We deliver to */}
          <div>
            <h3 className="text-lg font-semibold mb-4">We deliver to</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bangalore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gurgaon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hyderabad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Delhi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mumbai</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pune</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="text-2xl font-bold text-orange-500">Swiggy</div>
              <span className="text-gray-400">© 2024 Bundl Technologies Pvt. Ltd</span>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;