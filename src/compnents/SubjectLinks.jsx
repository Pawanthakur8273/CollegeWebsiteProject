import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SubjectLinks({ title, link }) {
  // useLocation hook to check if the current link is active
  const location = useLocation();
  const isActive = location.pathname === link; // Check if the current link is active

  return (
    <div className="min-w-80">
      <li className="Sub-item mx-5 p-2 text-white">
        <Link
          to={link}
          className={`group sidebar-link flex justify-center items-center border-solid border-2 border-customYellow h-12 px-3 text-xl ${
            isActive
              ? 'text-customYellow font-bold bg-slate-50 border-none'
              : 'hover:text-customYellow hover:border-customYellow hover:bg-slate-50 hover:font-bold'
          }`}
        >
          <span>{title}</span>
        </Link>
      </li>
    </div>
  );
}

export default SubjectLinks;
