import React from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-360 mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-800 pb-12">
          {/* Logo & Description Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-6">CS-Ticket System</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Our Mission
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact Saled
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Products & Services
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Customer Stories
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Download Apps
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">
              Social Links
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer group">
                <span className="bg-gray-800 p-1.5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <FaXTwitter size={14} />
                </span>
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer group">
                <span className="bg-gray-800 p-1.5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <FaLinkedinIn size={14} />
                </span>
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer group">
                <span className="bg-gray-800 p-1.5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <FaFacebookF size={14} />
                </span>
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer group">
                <span className="bg-gray-800 p-1.5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <MdOutlineEmail size={14} />
                </span>
                support@cst.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center text-white text-sm italic">
          © 2026 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
