
import { ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';

function Navbar({ toggleSidebar }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = {
    Pages: ['Home', 'About', 'Services'],
    Design: ['Themes', 'Layout', 'Colors'],
    Settings: ['Profile', 'Security', 'Notifications'],
    Domain: ['Custom Domain', 'SSL', 'DNS']
  };

  return (
    <header className="bg-gray-800 text-white flex items-center px-4 py-3 justify-between relative">
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-xl font-bold">HUB portal</span>
      </div>

      <div className="flex space-x-6 relative">
        {Object.keys(menuItems).map((menu) => (
          <div key={menu} className="relative">
            <button
              onClick={() => toggleDropdown(menu)}
              className="hover:underline flex items-center gap-1"
            >
              {menu}
              <ChevronDown className="w-4 h-4" />
            </button>

            {openDropdown === menu && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                {menuItems[menu].map((item) => (
                  <button
                    key={item}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
