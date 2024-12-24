import React from "react";

function page() {
  return (
    <div className="min-h-screen w-full flex ">
      <div className="bg-slate-500 pt-[60px] w-1/4 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Inventory</h1></div>
      <div className="bg-gray-900 min-h-screen flex-grow">
        <div className="mt-[60px] mx-8">
          <div>
          <input className="text-black rounded-full px-3 py-2" type="text" name="search" id="search" placeholder="search" />
          <button className="bg-blue-500 text-white px-3 py-2 rounded-full">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
