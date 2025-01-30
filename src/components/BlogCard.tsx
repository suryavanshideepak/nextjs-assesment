import { Post } from "@/types";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  blog: Post;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/posts/${blog.id}`}>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={blog.image}
        alt={blog.title}
      />

      <div className="px-6 py-4">
        <span className="inline-block bg-purple-200 text-purple-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          {blog.type}
        </span>

        <h2 className="font-bold text-xl mb-2 mt-3 text-gray-800">
          {blog.title}
        </h2>

        <p className="text-gray-600 text-base">{blog.shortDescription}</p>
      </div>

      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={blog.avatar}
            alt={blog.author}
          />
          <div>
            <p className="text-gray-900 font-semibold">{blog.author}</p>
            <p className="text-gray-600 text-sm">{blog.readTime} read</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="text-gray-600">{blog.likes}</span>
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>

          <div className="flex items-center space-x-1">
            <span className="text-gray-600">{blog.dislikes}</span>
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              ></path>
            </svg>
          </div>

          <div className="flex items-center space-x-1">
            <span className="text-gray-600">{blog.comments}</span>
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;