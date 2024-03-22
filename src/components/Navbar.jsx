import { useState } from "react";
import SpecialCharacter from "./utils/SpecialCharacter.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed w-full top-0 px-8 md:px-16 py-3 backdrop-blur-sm bg-transparent border-b border-gray-800/40 shadow-md z-10 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold montserrat">
          <SpecialCharacter tag={1} />
          NandaXy <SpecialCharacter tag={2} />
        </h1>
        <div className="block md:hidden">
          <span id="menuBtn" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
              />
            </svg>
          </span>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-4 poppins text-white font-semibold">
            <a href="#" className="py-2 hover:text-teal-400 rounded">
              Home
            </a>
            <a href="#about" className="py-2 hover:text-teal-400 rounded">
              About
            </a>
            <a href="#skill" className="py-2 hover:text-teal-400 rounded">
              Skill set
            </a>
            <a href="#certificat" className="py-2 hover:text-teal-400 rounded">
              Certifications
            </a>
            <a href="#contact" className="py-2 hover:text-teal-400 rounded">
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        ></div>
      )}
      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white shadow-lg transform transition-transform ease-in-out duration-300 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col mt-2 px-2 poppins">
          <a href="#" className="py-2 px-4 hover:bg-gray-700 rounded">
            Home
          </a>
          <a href="#about" className="py-2 px-4 hover:bg-gray-700 rounded">
            About
          </a>
          <a href="#skill" className="py-2 px-4 hover:bg-gray-700 rounded">
            Skill set
          </a>
          <a href="#certificat" className="py-2 px-4 hover:bg-gray-700 rounded">
            Certifications
          </a>
          <a href="#contact" className="py-2 px-4 hover:bg-gray-700 rounded">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
