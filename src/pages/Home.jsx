// src/pages/Home.jsx
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import '../styles/index.css'; // Importando o CSS específico para a página Home

const Home = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-3xl mx-auto my-8 mt-0">
        <div className="w-full max-w-5xl mx-auto aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/b0Ezn5pZE7o"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
        </div>
        <h1 className="text-4xl font-bold text-center mt-4">Bem-vindo à nossa loja!</h1>
        <button onClick={() => window.location.href = '/produtos'} className="mt-4 bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600 transition duration-300 transform hover:scale-105">
          Explore nossos produtos
        </button>
      </div>

    </DefaultLayout>
  );
};

export default Home;
