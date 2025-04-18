import { FaCode, FaServer, FaPaintBrush, FaPlug } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full bg-[#2a2a2a] p-6 rounded-xl shadow">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400">About Me</h3>
      <p className="mb-4">
        I am S Teja, a passionate Fullstack Developer with strong expertise in building scalable web applications. I specialize in both frontend technologies like React, Next.js and backend tools like Node.js, Express, and MongoDB.
      </p>
      <p className="mb-4">
        I enjoy crafting intuitive, elegant UIs with responsive layouts, and robust backend logic to power real-world apps. I believe in clean code, consistent delivery, and collaborating to bring ideas to life.
      </p>
      <p className="mb-6">Let’s create something impactful together!</p>

      <h4 className="text-xl font-semibold mb-4 text-white">What I'm Doing</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3">
          <FaCode className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">Frontend Development</h5>
            <p>Creating beautiful and interactive UIs using React, Next.js, and Tailwind CSS.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3">
          <FaServer className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">Backend Development</h5>
            <p>Developing APIs and server-side logic using Node.js and Express.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3">
          <FaPaintBrush className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">UI/UX Design</h5>
            <p>Designing clean, modern user interfaces with a focus on usability.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3">
          <FaPlug className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">API Integration</h5>
            <p>Connecting and consuming external services through RESTful APIs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
