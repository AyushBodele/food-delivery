import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 text-sm">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Swiggy One</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Swiggy Genie</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Help & Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Partner with us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Ride with us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">We Deliver To</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Nagpur</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Bangalore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Gurgaon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Hyderabad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Delhi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Mumbai</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Pune</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="text-xl font-bold text-orange-500">Swiggy</div>
              <span className="text-gray-400 text-sm text-center sm:text-left">
                © 2024 Bundl Technologies Pvt. Ltd
              </span>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
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
