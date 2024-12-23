import React from "react";

function Navbar() {
  return (
    <div className="h-12 w-full flex border-b border-gray-200 items-center justify-between px-12">
      <div>innovations@EC</div>
      <div className="flex gap-12">
        <div>Home</div>
        <div>Blogs</div>
        <div>Team</div>
        <div>Resources</div>
      </div>
    </div>
  );
}

export default Navbar;
