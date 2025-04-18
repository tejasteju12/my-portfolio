"use client";

import { useEffect, useState, JSX } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import { Portfolio } from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { Briefcase, Layers, BookOpen, Mail } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  // Initial setup on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle function
  const toggleTheme = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const animatedBox = (Component: JSX.Element, icon: JSX.Element, title: string) => (
    <div className="rounded-2xl shadow-lg p-6 bg-white dark:bg-[#1f1f1f] transition-all duration-500 transform hover:scale-[1.01] w-full max-w-4xl">
      <div className="flex items-center gap-3 mb-4 text-2xl font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      {Component}
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "About": return animatedBox(<About />, <Briefcase />, "About");
      case "Resume": return animatedBox(<Resume />, <Briefcase />, "Resume");
      case "Portfolio": return animatedBox(<Portfolio />, <Layers />, "Portfolio");
      case "Blog": return animatedBox(<Blog />, <BookOpen />, "Blog");
      case "Contact": return animatedBox(<Contact />, <Mail />, "Contact");
      default: return animatedBox(<About />, <Briefcase />, "About");
    }
  };

  return (
    <main>
      <div className="bg-white text-black dark:bg-[#121212] dark:text-white min-h-screen transition-colors duration-300">
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} setActiveSection={setActiveSection} />
        <div className="flex px-6 py-8 gap-8">
          <div className="w-72 shrink-0">
            <Sidebar />
          </div>
          <section className="flex-1 flex justify-center items-start">
            {renderSection()}
          </section>
        </div>
      </div>
    </main>
  );
}
