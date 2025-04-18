"use client";

import React from "react";
import { BookOpen, CalendarDays } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Flutter vs. Flock: Cross-Platform Evolution",
    date: "Nov 18, 2024",
    description:
      "Explore the differences between Flutter and Flock, a new fork focused on faster development and community-driven growth.",
  },
  {
    id: 2,
    title: "The Future of Flutter in 2025",
    date: "Nov 13, 2024",
    description:
      "Discover Flutter’s rising role in mobile and web dev in 2025, and how it’s reshaping the app ecosystem.",
  },
  {
    id: 3,
    title: "Top UI Frameworks to Watch in 2025",
    date: "Nov 5, 2024",
    description:
      "From Flutter to SwiftUI and Jetpack Compose, here’s what’s trending in UI frameworks for modern devs.",
  },
  {
    id: 4,
    title: "Building Scalable Apps: Architectures that Work",
    date: "Oct 29, 2024",
    description:
      "Dive into the best practices in software architecture for building scalable, maintainable applications.",
  },
  {
    id: 5,
    title: "React vs Vue: Which One Should You Learn in 2025?",
    date: "Oct 20, 2024",
    description:
      "We compare React and Vue, focusing on performance, community support, and developer experience.",
  },
  {
    id: 6,
    title: "10 Tips for Clean Code Every Developer Should Know",
    date: "Oct 10, 2024",
    description:
      "Writing clean code is a skill. Here are 10 essential tips to make your code more readable and maintainable.",
  },
];

export default function Blog() {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 bg-[#1a1a1a] min-h-screen text-white">
      <h2 className="text-4xl font-bold mb-8">Latest Blogs</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#262626] p-5 rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <BookOpen size={16} />
              <span>Blog Post</span>
              <span className="flex items-center gap-1 ml-auto">
                <CalendarDays size={16} />
                {blog.date}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-300">{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
