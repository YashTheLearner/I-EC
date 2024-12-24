"use client";
import Link from "next/link";
import React from "react";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isResourceOpen, setIsResourceOpen] = React.useState(false);

  return (
    <div className="h-12  w-full bg-black flex border-b border-gray-200 items-center justify-between px-12">
      <div>Innovations@EC</div>
      <div className="flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/aboutus">About us</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/inventory">Inventory</Link>
        <div className="relative">
          <div
            onClick={() => setIsResourceOpen(!isResourceOpen)}
            className="flex items-center cursor-pointer"
          >
            Resources
            {isResourceOpen ? (
              <span className="ml-1">▲</span>
            ) : (
              <span className="ml-1">▼</span>
            )}
          </div>
          {isResourceOpen && (
            <div className="absolute top-full mt-3 flex flex-col border border-gray-200 bg-white">
              <div className="bg-slate-500 px-2 w-[111px] py-1">Resource 1</div>
              <div className="bg-slate-500 px-2 w-[111px] py-1">Resource 2</div>
              <div className="bg-slate-500 px-2 w-[111px] py-1">Resource 3</div>
              <div className="bg-slate-500 px-2 w-[111px] py-1">Resource 4</div>
            </div>
          )}
        </div>
        <Link href="/contact">Contact us</Link>
        {isAuthenticated ? (
          <div className="flex gap-3 items-center">
            <div className="bg-slate-200 h-6 w-6 rounded-full"></div>
            Yash
          </div>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>

          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
