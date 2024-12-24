"use client";
import React, { useState } from "react";

function SingleBlog() {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto border border-gray-200 rounded">
      {/* Blog Header */}
      <div>
        <h1 className="text-2xl font-bold">Understanding Next.js</h1>
        <p className="text-gray-600 text-sm">by Yash · Dec 23, 2024</p>
      </div>

      {/* Blog Content */}
      <div className="mt-4">
        <p>
          Next.js is a powerful React framework that allows for server-side
          rendering and static site generation. It's optimized for
          performance and developer experience.
        </p>
      </div>

      {/* Upvote/Downvote Section */}
      <div className="mt-4 flex items-center gap-4">
        <button
          className="flex items-center gap-2 text-green-500 hover:text-green-600"
          onClick={() => setUpvotes(upvotes + 1)}
        >
          ▲ Upvote
          <span className="font-semibold">{upvotes}</span>
        </button>
        <button
          className="flex items-center gap-2 text-red-500 hover:text-red-600"
          onClick={() => setDownvotes(downvotes + 1)}
        >
          ▼ Downvote
          <span className="font-semibold">{downvotes}</span>
        </button>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Comments</h2>
        <div className="mt-4 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded p-2"
              >
                {comment}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
        <div className="mt-4 flex gap-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="border border-gray-300 rounded px-4 py-2 flex-grow"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
