import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FaUser,FaPlus   } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { NavLink } from 'react-router-dom';
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts.json');
        setPosts(response.data);
      } catch (error) {
        setError('Error fetching posts');
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100  to-white p-4">
      <div className="flex justify-start mb-4">
        <NavLink to="/" className="flex shawdow-md bg-blue-500 text-white p-2 rounded-md space-x-2">
        <FaPlus className="m-2"/>
        <div className="text-xl">New</div>
        </NavLink>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-2">
              <FaUser className="text-blue-500" />
              <span className="font-semibold text-lg text-blue-950">{post.username}</span>
            </div>
            <p className="text-gray-700 mb-2">{post.content}</p>
            <div className="flex space-x-4 mx-3">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
              <i className="bi bi-reply"></i>
                <span>Reply</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
              <i className="bi bi-chat-dots"></i>
                <span>Chat with</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
              <i className="bi bi-x-circle"></i>
                <span>Ignore</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
