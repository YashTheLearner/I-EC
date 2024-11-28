'use client'
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <p className="text-2xl font-bold text-yellow-400">
            Innovation @ EC
          </p>
        </Link>

        {/* Menu for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about">
            <p className="hover:text-yellow-400 transition">About Us</p>
          </Link>
          <Link href="/projects">
            <p className="hover:text-yellow-400 transition">Projects</p>
          </Link>
          <Link href="/events">
            <p className="hover:text-yellow-400 transition">Events</p>
          </Link>
          <Link href="/gallery">
            <p className="hover:text-yellow-400 transition">Gallery</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-yellow-400 transition">Contact</p>
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="block md:hidden text-yellow-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 space-y-2 px-6 py-4">
          <Link href="/about">
            <p className="block hover:text-yellow-400 transition">About Us</p>
          </Link>
          <Link href="/projects">
            <p className="block hover:text-yellow-400 transition">Projects</p>
          </Link>
          <Link href="/events">
            <p className="block hover:text-yellow-400 transition">Events</p>
          </Link>
          <Link href="/gallery">
            <p className="block hover:text-yellow-400 transition">Gallery</p>
          </Link>
          <Link href="/contact">
            <p className="block hover:text-yellow-400 transition">Contact</p>
          </Link>
        </div>
      )}
    </nav>
  );
}
