import { Post } from "@/types";
import React from "react";

// Define the props for the BlogDetails component
type BlogDetailsProps = {
  blog: Post;
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-96 object-cover rounded-lg mb-6"
        src={blog.image}
        alt={blog.title}
      />

      <span className="inline-block bg-purple-200 text-purple-800 text-sm px-3 py-1 rounded-full uppercase font-semibold tracking-wide">
        {blog.type}
      </span>

      <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2">
        {blog.title}
      </h1>

      <div className="flex items-center mt-4 mb-6">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={blog.avatar}
          alt={blog.author}
        />
        <div>
          <p className="text-gray-900 font-semibold">{blog.author}</p>
          <p className="text-gray-600 text-sm">{blog.readTime}</p>
        </div>
      </div>

      <p className="text-gray-700 text-lg mb-6">{blog.shortDescription}</p>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.blogData }}
      ></div>

      <div className="flex items-center justify-between mt-8 border-t pt-6">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">{blog.likes}</span>
            <svg
              className="w-6 h-6 text-red-500"
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

          <div className="flex items-center space-x-2">
            <span className="text-gray-600">{blog.dislikes}</span>
            <svg
              className="w-6 h-6 text-blue-500"
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

          <div className="flex items-center space-x-2">
            <span className="text-gray-600">{blog.comments}</span>
            <svg
              className="w-6 h-6 text-green-500"
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
  );
};

export default BlogDetails;