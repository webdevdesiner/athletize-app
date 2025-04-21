import React from 'react';

export default function Contato() {
  return (
    <div className="bg-violet-50 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden max-w-6xl w-full flex flex-col lg:flex-row">
        {/* FOTO / INFORMAÇÕES */}
        <div className="lg:w-1/2 bg-violet-500 text-white p-10 flex flex-col justify-center items-center text-center">
          <div className="mb-6">
            {/* Substitua a imagem abaixo pela sua */}
            <img
              src="/src/assets/fer.png"
              alt="Sua Foto"
              className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">Fale comigo!</h2>
          <p className="text-violet-100 mb-6">
            Estou pronto para te ajudar com seu projeto. Preencha o formulário ao lado e vamos conversar.
          </p>
          <p className="text-sm opacity-70">Email: contato@fernandoguedes.com</p>
          <p className="text-sm opacity-70">WhatsApp: (18) 99608-0837</p>
        </div>

        {/* FORMULÁRIO */}
        <div className="lg:w-1/2 p-10">
          <h3 className="text-2xl font-semibold text-violet-700 mb-6">Entre em Contato</h3>

          <form
            action="https://formsubmit.co/contato@fernandoguedes.com"
            method="POST"
            className="space-y-5"
          >
            {/* Configurações extras do FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://fernandoguedes.com" />

            <div>
              <label className="block text-violet-700 font-medium mb-1">Nome</label>
              <input
                type="text"
                name="nome"
                required
                className="w-full border border-violet-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-violet-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-violet-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-violet-700 font-medium mb-1">Mensagem</label>
              <textarea
                name="mensagem"
                required
                rows="5"
                className="w-full border border-violet-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>
            <div className="flex gap-4 items-center mt-4">
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
            >
              Enviar Mensagem
            </button>
            <button onClick={() => window.location.href = '/'} className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">Voltar</button>
            </div>

          
          </form>
        </div>

      </div>
    </div>
  );
}
