import React from "react";

export default function Pai({ nome, sobrenome, children }) {
  return (
    <div>
      <h1>{nome} {sobrenome}</h1>
      <h2>Filhos</h2>
      <ul>
        {React.Children.map(children, child =>
          React.cloneElement(child, { sobrenome })
        )}
      </ul>
    </div>
  );
}
