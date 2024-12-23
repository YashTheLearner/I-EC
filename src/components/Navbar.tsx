"use client";
import React from "react";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <div className="h-12 w-full flex border-b border-gray-200 items-center justify-between px-12">
      <div>innovations@EC</div>
      <div className="flex gap-12">
        <div>Home</div>
        <div>Blogs</div>
        <div>Team</div>
        <div>Resources</div>
        <div>Contact us</div>
        {isAuthenticated ?
        <div className="flex gap-4 items-center">
          <div className="bg-slate-200 h-6 w-6 rounded-full"></div>
          yash
        </div>:<>
        <div onClick={()=>{
            setIsAuthenticated(true)
        }}>Login</div>
        <div onClick={()=>{
            setIsAuthenticated(true)
        }}>Register</div>
        </>
        }
      </div>
    </div>
  );
}

export default Navbar;
