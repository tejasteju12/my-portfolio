import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Sidebar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="bg-[#2b2b2b] fixed top-6 left-6 h-[92vh] w-72 rounded-2xl p-6 text-center shadow-lg overflow-y-auto z-10">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div
            onClick={() => setShowProfile(true)}
            className="bg-gray-800 p-4 rounded-xl mb-4 cursor-pointer hover:scale-105 transition"
          >
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>

          {/* Name + Role */}
          <h2 className="text-xl font-semibold">S Teja</h2>
          <p className="text-gray-400 text-sm">Fullstack Developer</p>

          {/* Contact Info */}
          <h3 className="text-lg font-semibold mt-6 mb-3">Contact</h3>
          <div className="flex flex-col gap-2 mb-6 items-center">
            <a
              href="mailto:tejasteju22541v@gmail.com"
              className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
            >
              <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaEnvelope /> Email
              </h4>
              <p className="text-xs text-gray-300 break-all">
                tejasteju22541v@gmail.com
              </p>
            </a>

            <a
              href="tel:8639890645"
              className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
            >
              <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaPhone /> Phone
              </h4>
              <p className="text-xs text-gray-300">8639890645</p>
            </a>

            <a
              href="https://www.google.com/maps/place/Tumakuru,+Karnataka,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
            >
              <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaMapMarkerAlt /> Location
              </h4>
              <p className="text-xs text-gray-300">Tumakuru, India</p>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaLinkedin className="text-[#1e1e1e] text-base" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaGithub className="text-[#1e1e1e] text-base" />
            </a>
            <a
              href="https://www.instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaInstagram className="text-[#1e1e1e] text-base" />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaTwitter className="text-[#1e1e1e] text-base" />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowProfile(false)}
        >
          <img
            src="/profile.jpg"
            alt="Full Profile"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border-4 border-yellow-500"
          />
        </div>
      )}
    </>
  );
}
