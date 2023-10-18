import React from 'react';
import './App.css';
import Contato from './Contato';

function App() {
  const contatos = [
    {
      nome: 'José',
      sobrenome: 'João',
      cpf: '000.000.000-00',
      telefone: '(84) 00000-0001',
      email: 'jj1@email.com',
    },
    {
      nome: 'Maria',
      sobrenome: 'Silva',
      cpf: '111.111.111-11',
      telefone: '(84) 00000-0002',
      email: 'ms@email.com',
    },
    {
      nome: 'João',
      sobrenome: 'Pereira',
      cpf: '222.222.222-22',
      telefone: '(84) 00000-0003',
      email: 'jp@email.com',
    },
    {
      nome: 'Ana',
      sobrenome: 'Santos',
      cpf: '333.333.333-33',
      telefone: '(84) 00000-0004',
      email: 'as@email.com',
    },
    {
      nome: 'Pedro',
      sobrenome: 'Ferreira',
      cpf: '444.444.444-44',
      telefone: '(84) 00000-0005',
      email: 'pf@email.com',
    },
  ];

  return (
    <div className="App">
      <h1>Contatos</h1>
      {contatos.map((contato, index) => (
        <Contato
          key={index}
          nome={contato.nome}
          sobrenome={contato.sobrenome}
          cpf={contato.cpf}
          telefone={contato.telefone}
          email={contato.email}
        />
      ))}
    </div>
  );
}

export default App;
