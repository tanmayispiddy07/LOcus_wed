// src/Home.js
import React, { useState } from 'react';

const Home = () => {
  const [region, setRegion] = useState('');
  const [place, setPlace] = useState('');
  const [radius, setRadius] = useState('');
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(`Region: ${region}, Place: ${place}, Radius: ${radius}, Post: ${postContent}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-sky-200 p-4">
      <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="region" className="block text-lg font-semibold mb-2 text-gray-700">Select Region</label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a region</option>
              <option value="region1">Region 1</option>
              <option value="region2">Region 2</option>
              <option value="region3">Region 3</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="place" className="block text-lg font-semibold mb-2 text-gray-700">Select Place</label>
            <select
              id="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-950"
            >
              <option value="">Select a place</option>
              <option value="place1">Place 1</option>
              <option value="place2">Place 2</option>
              <option value="place3">Place 3</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="radius" className="block text-lg font-semibold mb-2 text-gray-700">Radius (m)</label>
            <input
              id="radius"
              type="number"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
              placeholder="Enter radius"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="postContent" className="block text-lg font-semibold mb-2 text-gray-700">Post Content</label>
            <textarea
              id="postContent"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
              placeholder="Write your post here..."
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
