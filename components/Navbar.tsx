"use client";

import { Sun, Moon, User, FileText, Image, Pen, Mail } from "lucide-react";

export default function Navbar({ toggleTheme, darkMode, setActiveSection }: any) {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-sm border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black font-poppins transition-all duration-300">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white select-none">

      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-6">
        {[
          { label: "About", icon: <User size={18} /> },
          { label: "Resume", icon: <FileText size={18} /> },
          { label: "Portfolio", icon: <Image size={18} /> },
          { label: "Blog", icon: <Pen size={18} /> },
          { label: "Contact", icon: <Mail size={18} /> },
        ].map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActiveSection(label)}
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
          >
            {icon}
            {label}
          </button>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}