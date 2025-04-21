import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import AdicionarProduto from './pages/AdicionarProduto';
import EditarProduto from './pages/EditarProduto';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/adicionarproduto" element={<AdicionarProduto />} />
      <Route path="/editarproduto/:id" element={<EditarProduto />} />
      <Route path="*" element={<h1 className="text-center mt-10 text-violet-500 font-semibold">Página não encontrada</h1>}/>
    </Routes>
  );
}
