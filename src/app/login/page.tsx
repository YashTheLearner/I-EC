'use client';
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const response = axios.post("/api/v1/login", {
      username: username,
      password: password
    });

  }
  
  return (
    <div className="min-h-screen w-full justify-center items-center flex flex-col">
      <div className=" border flex flex-col gap-4 w-[300px] p-4">
        <div className="text-2xl text-center">Login</div>
        <div>
          <div>Username</div>
          <input className="text-black" type="text" placeholder="Username" onChange={e =>{setUsername(e.target.value)}} />
        </div>
        <div>
          <div>Password</div>
          <input className="text-black" type="text" placeholder="Password"  onChange={e =>{setPassword(e.target.value)}} />
        </div>
        <div>
          <Link href="/signup">Don't have an account? Sign up</Link>
        </div>
        <div className="flex justify-between w-full px-1">
          <Link href="/" className="border px-2 py-1 ">Back</Link>
          <button className="border px-2 py-1 " onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default page;
