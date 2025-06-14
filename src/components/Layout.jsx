import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [navLinks, setNavLinks] = useState([
    'Home',
    'About',
    'Services',
    'Testimonials',
    'Contact',
  ]);

  return (
    <div className="h-screen flex flex-col">
      {/* Top navbar with toggle */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Static top nav bar */}
      <div className="bg-gray-200 shadow z-10 px-6 py-3 flex justify-center gap-6">
        {navLinks.map((page) => (
          <NavLink
            key={page}
            to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? 'text-blue-600 underline' : 'text-gray-700 hover:text-blue-500'
              }`
            }
          >
            {page}
          </NavLink>
        ))}
      </div>

      {/* Sidebar and main content area */}
      <div className="flex flex-1">
        {sidebarOpen && (
          <Sidebar navLinks={navLinks} setNavLinks={setNavLinks} />
        )}
        <main className="flex-grow p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
