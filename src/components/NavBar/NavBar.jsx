import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        {/* Logo Section */}
        <div className="text-xl md:text-2xl font-bold text-[#111827] tracking-tight">
          CS — <span className="text-[#7C3AED]">Ticket System</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 text-gray-500 font-medium text-[15px]">
            {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-[#7C3AED] transition-colors cursor-pointer relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7C3AED] transition-all group-hover:w-full"></span>
                </li>
              ),
            )}
          </ul>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all active:scale-95 shadow-md shadow-purple-100">
            <span className="text-xl font-light">+</span> New Ticket
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 p-2 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl font-bold">✕</span>
            ) : (
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 p-6 shadow-xl animate-fadeIn">
          <ul className="flex flex-col gap-5 text-gray-600 font-medium mb-6">
            {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-purple-600 transition-all border-b border-gray-50 pb-2"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
          <button className="w-full bg-[#7C3AED] text-white py-3 rounded-lg font-bold">
            + New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
