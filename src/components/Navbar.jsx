import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white backdrop-blur-md">
      <div className="hidden md:flex gap-8 text-black bg-blue max-w-7xl mx-auto p-4 flex-row justify-center items-center">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#awards">Awards</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
