// src/components/NavBar.jsx
import React from 'react';
import imgLogo from './../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="bg-violet-500 p-4 flex justify-between items-center shadow-lg">
      <img src= {imgLogo} alt="Logo" className="h-auto w-30 transition duration-300 transform hover:scale-110" />
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white text-lg hover:text-yellow-300 hover:scale-110 ">Home</a>
        </li>
        <li>
          <a href="/produtos" className="text-white text-lg hover:text-yellow-300">Produtos</a>
        </li>
        <li>
          <a href="/contato" className="text-white text-lg hover:text-yellow-300">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
