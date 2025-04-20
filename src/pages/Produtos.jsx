import React from 'react';
import logo from '../assets/logo.png'; // Imagem corretamente importada
import DefaultLayout from '../layouts/DefaultLayout'; // Importando o layout padrão

export default function Produtos() {
  return (
    <DefaultLayout>
      <div className="w-full h-full p-4 bg-violet-500 text-white flex flex-col flex-grow items-center justify-center">
      
      <img src={logo} alt="Logo" className="w-70 h-auto mt-10 p-1 " />
      
      <h1 className="text-2xl font-bold mb-1">Em Breve</h1>
      <p>Estamos em desenvolvimento.</p>
      <p> Por favor, aguarde.</p>

      <button onClick={() => window.location.href = '/'} className="mt-4 bg-white text-violet-500 py-2 px-4 rounded hover:bg-violet-600 transition duration-300 transform hover:scale-105">voltar</button>
    </div>
    </DefaultLayout>
  );
}
