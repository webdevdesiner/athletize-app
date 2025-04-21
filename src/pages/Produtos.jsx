import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import axios from 'axios';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/produtos')
      .then(res => res.json())
      .then(data => {
        setProdutos(data);
        setCarregando(false);
      })
      .catch(err => {
        console.error('Erro ao buscar produtos:', err);
        setCarregando(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await axios.delete(`http://localhost:3000/api/produtos/${id}`);
        setProdutos(produtos.filter(p => p.id !== id)); // remove da lista local
      } catch (error) {
        console.error('Erro ao excluir produto:', error);
      }
    }
  };

  if (carregando) return <p className="text-center mt-10 text-violet-500 font-semibold">Carregando produtos...</p>;

  return (
    <DefaultLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-violet-500 mb-6">Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.map(produto => (
            <div key={produto.id} className="bg-white border border-violet-200 rounded-2xl shadow p-4">
              {produto.foto && (
                <img
                  src={produto.foto}
                  alt={produto.nome}
                  className="w-full h-40 object-contain rounded-xl mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-violet-600 mb-1">{produto.nome}</h3>
              <p className="text-gray-600 text-sm mb-2">{produto.descricao}</p>
              <p className="text-gray-800 font-medium mb-1">R$ {parseFloat(produto.preco).toFixed(2)}</p>
              <p className="text-gray-700 text-sm">Estoque: {produto.estoque}</p>
              <button
                onClick={() => handleDelete(produto.id)}
                className="mt-4 text-sm text-red-500 hover:underline"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Produtos;
