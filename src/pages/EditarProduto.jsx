import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditarProduto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    
    nome: '',
    descricao: '',
    preco: '',
    estoque: '',
    foto: ''
  });

  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/produtos/${id}`)
      .then((res) => {
        setFormData(res.data);
        console.log('Produto carregado do banco para o imput de edição:');
      })
      .catch((err) => {
        console.error('Erro ao carregar produto:', err);
        setMensagem('Erro ao carregar produto');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'foto') {
      setFormData((prev) => ({
        ...prev,
        foto: files[0], // novo arquivo
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('nome', formData.nome);
    data.append('descricao', formData.descricao);
    data.append('preco', formData.preco);
    data.append('estoque', formData.estoque);
    if (formData.foto instanceof File) {
      data.append('foto', formData.foto); // só envia se for novo arquivo
    }

    try { console.log('ID recebido')
      await axios.put(`http://localhost:3000/api/produtos/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMensagem('Produto atualizado com sucesso!');
      setTimeout(() => navigate('/produtos'), 1500);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      setMensagem('Erro ao atualizar produto');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-violet-500 mb-6">Editar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={formData.descricao}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={formData.preco}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="number"
          name="estoque"
          placeholder="Estoque"
          value={formData.estoque}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="file"
          name="foto"
          onChange={handleChange}
          accept="image/*"
          className="..."
        />

        <div className="grid grid-cols-2 gap-4">
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Salvar Alterações
          </button>
          <button
            type="button"
            onClick={() => navigate('/produtos')}
            className="w-full py-2 mt-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Cancelar
          </button>
        </div>
      </form>
      {mensagem && <p className="mt-4 text-center text-violet-600">{mensagem}</p>}
    </div>
  );
};

export default EditarProduto;
