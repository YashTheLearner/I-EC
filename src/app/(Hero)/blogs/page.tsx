"use client";
import React from "react";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Understanding Next.js",
      description: "A deep dive into server-side rendering and static generation with Next.js.",
    },
    {
      id: 2,
      title: "The Future of React",
      description: "Exploring the new features in React 18 and beyond.",
    },
    {
      id: 3,
      title: "Tailwind CSS Tips",
      description: "Learn how to effectively style your projects with Tailwind CSS.",
    },
    {
      id: 4,
      title: "WebSockets for Real-Time Apps",
      description: "How to implement real-time features in your web apps using WebSockets.",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Blogs</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border-b border-gray-200 pb-4">
            <h2 className="text-lg font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
