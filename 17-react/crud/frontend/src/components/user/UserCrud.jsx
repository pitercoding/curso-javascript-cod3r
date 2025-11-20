import { useState, useEffect } from "react";
import Main from "../template/Main";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
};

const baseUrl = "http://localhost:3001/users";
const initialUser = { name: "", email: "" };

export default function UserCrud() {
  const [user, setUser] = useState(initialUser);
  const [list, setList] = useState([]);

  // Carrega lista de usuários ao montar o componente
  useEffect(() => {
    axios.get(baseUrl).then(resp => setList(resp.data));
  }, []);

  // Atualiza campos do formulário
  const updateField = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Limpa formulário
  const clear = () => setUser(initialUser);

  // Salva ou atualiza usuário
  const save = () => {
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    axios[method](url, user).then(resp => {
      const updatedList = getUpdatedList(resp.data);
      setUser(initialUser);
      setList(updatedList);
    });
  };

  // Atualiza a lista de usuários
  const getUpdatedList = (user) => {
    const filteredList = list.filter(u => u.id !== user.id);
    filteredList.unshift(user);
    return filteredList;
  };

  // Remove usuário
  const remove = (user) => {
    axios.delete(`${baseUrl}/${user.id}`).then(() => {
      setList(list.filter(u => u.id !== user.id));
    });
  };

  return (
    <Main {...headerProps}>
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={user.name}
                onChange={updateField}
                placeholder="Digite o nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={user.email}
                onChange={updateField}
                placeholder="Digite o e-mail..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary me-2" onClick={save}>
              Salvar
            </button>
            <button className="btn btn-secondary ml-2" onClick={clear}>
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <hr />
      <h4>Lista de Usuários</h4>
      <ul className="list-group">
        {list.map(u => (
          <li
            key={u.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {u.name} ({u.email})
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => setUser(u)}>
                Editar
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => remove(u)}>
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Main>
  );
}