"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brands } from "../data/brands"; // adjust path if needed

export default function NavBar() {
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState("");

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/products", label: "products" },
    { href: "/signup", label: "signup" },
  ];

  const filteredBrands = searchInput
    ? brands.filter((brand) =>
        brand.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  return (
    <header className="bg-gray-900 p-10 text-white relative">
      <nav className="flex justify-around gap-3 text-2xl items-center relative">
        <Link href="/">
          <img
            className="w-[150px] cursor-pointer "
            src="https://www.cycleofsamsara.com/_next/static/media/logo.028a7fc8.png"
          />
        </Link>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="search brands"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="border-blue-500 border rounded-[8px] placeholder:pl-3 w-full p-2 text-white pr-10"
          />

          {/* 📷 Camera Icon */}
          <label className="absolute right-2 top-2.5 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  alert(`You selected: ${file.name}`);
                  // You can call your image search logic here
                }
              }}
              className="hidden"
            />
            {/* You can replace with a real SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 bg text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2l-.586-.586A2 2 0 0012.172 4H7.828a2 2 0 00-1.414.586L6 5H4zm6 10a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </label>

          {searchInput && (
            <ul className="absolute z-10 bg-white text-black mt-1 w-full rounded shadow overflow-y-auto">
              {filteredBrands.length > 0 ? (
                filteredBrands.map((brand, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-200">
                    {brand}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">
                  No matching brands found
                </li>
              )}
            </ul>
          )}
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`capitalize ${
              pathname === link.href
                ? "text-blue-400 underline"
                : "hover:text-gray-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
