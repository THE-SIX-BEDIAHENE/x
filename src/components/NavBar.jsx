import { useState } from 'react';
import logo from '/logo.png';

function Navbar() {
  const [active, setActive] = useState('Home');

  const menuItems = ['Home', 'About', 'Projects', 'Blogs', 'Contact'];

  return (
    <nav className="w-full flex items-center justify-between px-8 bg-[#ffffff73] shadow-md fixed ">
      {/* Logo aligned left */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" width={150} />
      </div>

      {/* Menu centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-5 text-white font-medium p-4">
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${
              active === item
                ? 'bg-[#672D90] text-white'
                : 'bg-gray-100 text-[#672D90] hover:bg-[#672D90] hover:text-white'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
