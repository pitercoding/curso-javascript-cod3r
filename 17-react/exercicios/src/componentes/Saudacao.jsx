import { useState } from "react";

export default function Saudacao({ tipo: tipoInicial, nome: nomeInicial }) {
  const [tipo, setTipo] = useState(tipoInicial);
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h1>
        {tipo} {nome}!
      </h1>
      <hr />
      <input type="text" placeholder="Tipo..." value={tipo} onChange={(e) => setTipo(e.target.value)} />
      <input type="text" placeholder="Nome..." value={nome} onChange={(e) => setNome(e.target.value)} />
    </div>
  );
}
