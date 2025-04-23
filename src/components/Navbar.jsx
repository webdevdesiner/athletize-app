import React, { useState } from 'react';
import imgLogo from './../assets/logo.png';
import { Menu, X } from 'lucide-react';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-violet-500 p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <a href="/">
          <img src={imgLogo} alt="Logo" className="h-auto w-28 md:w-32 transition-transform duration-300 hover:scale-110" />
        </a>
        {/* Botão de menu hambúrguer - apenas no mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu - visível no desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="text-white text-lg hover:text-yellow-300 transition-transform hover:scale-110">Home</a></li>
          <li><a href="/produtos" className="text-white text-lg hover:text-yellow-300">Produtos</a></li>
          <li><a href="/adicionarproduto" className="text-white text-lg hover:text-yellow-300">Adicionar Produtos</a></li>
          <li><a href="/contato" className="text-white text-lg hover:text-yellow-300">Contato</a></li>
        </ul>
      </div>

      {/* Menu mobile - aparece quando menuOpen = true */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col mt-4 space-y-3 animate-slide-down">
          <li><a href="/" className="text-white text-lg hover:text-yellow-300">Home</a></li>
          <li><a href="/produtos" className="text-white text-lg hover:text-yellow-300">Produtos</a></li>
          <li><a href="/adicionarproduto" className="text-white text-lg hover:text-yellow-300">Adicionar Produtos</a></li>
          <li><a href="/contato" className="text-white text-lg hover:text-yellow-300">Contato</a></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
