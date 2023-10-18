import React from 'react';

function Contato(props) {
  return (
    <div className="contato">
      <p><strong>Nome:</strong> {props.nome} {props.sobrenome}</p>
      <p><strong>CPF:</strong> {props.cpf}</p>
      <p><strong>Contato:</strong> {props.telefone}</p>
      <p><strong>Email:</strong> {props.email}</p>
    </div>
  );
}

export default Contato;
