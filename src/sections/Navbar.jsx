import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-100 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Ajinkya
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex gap-5 items-center hidden">
            <a
              href="https://docs.google.com/document/d/1Vb6wn3lvEvYHOX3P8ltXEZfa6H5hZPQ4AN9Z0RkI6uk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative px-3 py-1.5 text-sm font-semibold text-white transition duration-300 ease-in-out transform bg-orange-600 rounded-md shadow-lg hover:scale-105 group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-40 blur-md group-hover:opacity-100 transition duration-300 ease-in-out"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 to-orange-400 opacity-70 rounded-md"></span>
                <span className="relative">My Resume</span>
              </button>
            </a>
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
