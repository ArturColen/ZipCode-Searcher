import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [zipCode, setZipCode] = useState({});
  
  async function handleSearch() {
    if (input === '') {
      alert('Digite algum CEP!');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setZipCode(response.data);
      setInput('');
    }
    catch {
      alert('Erro ao buscar CEP!');
      setInput('');
    }
  }
  return (
    <div id="container">
      {/* === Title === */}
      <h1 id="title">Buscador de CEP</h1>
      {/* === Insert Data === */}
      <div id="container-input">
        <input type="text" placeholder="Digite seu CEP" value={input} onChange={(e) => setInput(e.target.value)} />
        <button id="button-search" onClick={handleSearch}><FiSearch size={25} color="#fff" /></button>
      </div>
      {/* === Information === */}
      {Object.keys(zipCode).length > 0 && (
        <main>
          <h2>CEP: {zipCode.cep}</h2>
          <span>Rua: {zipCode.logradouro}</span>
          <span>Complemento: {zipCode.complemento}</span>
          <span>{zipCode.bairro}</span>
          <span>{zipCode.localidade} - {zipCode.uf}</span>
        </main>
      )}
    </div>
  ); 
}

export default App;
