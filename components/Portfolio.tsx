"use client";

import { useState } from "react";
import {
  Smartphone,
  Code2,
  Palette,
  LayoutDashboard,
  Rocket,
  TerminalSquare,
  Globe2,
  MonitorSmartphone,
  AppWindow,
} from "lucide-react";

const portfolioItems = [
  { title: "Nagarik App", category: "Application" },
  { title: "Ambition Guru", category: "Application" },
  { title: "Sociair", category: "Application" },
  { title: "Tokma", category: "Application" },
  { title: "Saara", category: "Application" },
  { title: "Ifood", category: "Application" },
  { title: "MeroDate", category: "Application" },
  { title: "Weather App", category: "Web development" },
  { title: "Music Player", category: "UI/UX" },
];

const categories = ["All", "Applications", "Web development", "UI/UX"];

const icons = [
  <Smartphone size={28} />,
  <Code2 size={28} />,
  <Palette size={28} />,
  <LayoutDashboard size={28} />,
  <Rocket size={28} />,
  <TerminalSquare size={28} />,
  <Globe2 size={28} />,
  <MonitorSmartphone size={28} />,
  <AppWindow size={28} />,
];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-sm font-medium border-b-2 px-3 pb-1 transition ${
              selectedCategory === cat
                ? "text-yellow-400 border-yellow-400"
                : "text-gray-400 border-transparent hover:text-yellow-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] rounded-2xl p-6 flex flex-col items-start justify-start shadow-md hover:scale-[1.02] transition-transform duration-300 space-y-3"
          >
            <div className="text-yellow-400">{icons[idx % icons.length]}</div>
            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
