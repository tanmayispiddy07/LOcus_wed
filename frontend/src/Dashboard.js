// src/Dashboard.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <nav className="bg-sky-950 p-4 flex justify-between items-center">
      <ul className="flex justify-center space-x-8 mx-auto">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white underline-animation active text-lg font-semibold"
                : "text-white hover:bg-sky-950 underline-animation text-lg font-semibold"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive
                ? "text-white underline-animation active text-lg font-semibold"
                : "text-white hover:bg-sky-950 underline-animation text-lg font-semibold"
            }
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chats"
            className={({ isActive }) =>
              isActive
                ? "text-white underline-animation active text-lg font-semibold"
                : "text-white hover:bg-sky-950 underline-animation text-lg font-semibold"
            }
          >
            Chats
          </NavLink>
        </li>
      </ul>
      <div>
      <NavLink
              to="/settings"
              className="text-white hover:bg-blue-500 p-2 rounded-full"
            >
              <i className="bi bi-gear-fill text-lg"></i>
      </NavLink>
      <NavLink
            to="/signin"
            className="text-white bg-blue-950 hover:bg-white hover:text-blue-950 p-2 rounded"
          >
            Sign In
          </NavLink>
      </div>
    </nav>
  );
};

export default Dashboard;
