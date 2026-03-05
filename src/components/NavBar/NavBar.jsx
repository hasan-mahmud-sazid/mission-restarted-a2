import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-16 py-5 bg-white border-b border-gray-100 shadow-sm">
        <div className="text-2xl font-bold text-[#111827]">
          CS — <span className="text-[#111827]">Ticket System</span>
        </div>

        <div className="flex items-center gap-10">
          <ul className="flex gap-8 text-gray-500 font-medium text-[15px]">
            <li className="hover:text-purple-600 cursor-pointer">Home</li>
            <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
            <li className="hover:text-purple-600 cursor-pointer">Changelog</li>
            <li className="hover:text-purple-600 cursor-pointer">Blog</li>
            <li className="hover:text-purple-600 cursor-pointer">Download</li>
            <li className="hover:text-purple-600 cursor-pointer">Contact</li>
          </ul>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-purple-100">
            <span className="text-xl">+</span> New Ticket
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
