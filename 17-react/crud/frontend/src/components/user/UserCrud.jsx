import { useState, useEffect } from "react";
import Main from "../template/Main";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: []
};

export default function UserCrud() {
  const [user, setUser] = useState(initialState.user);
  const [list, setList] = useState(initialState.list);

  // Carregar lista de usuários ao montar o componente
  useEffect(() => {
    axios.get(baseUrl).then(resp => setList(resp.data));
  }, []);

  const clear = () => setUser(initialState.user);

  const save = () => {
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    axios[method](url, user).then(resp => {
      const updatedList = getUpdatedList(resp.data);
      setUser(initialState.user);
      setList(updatedList);
    });
  };

  const getUpdatedList = (user) => {
    const filteredList = list.filter(u => u.id !== user.id);
    filteredList.unshift(user);
    return filteredList;
  };

  return (
    <Main {...headerProps}>
      Cadastro de Usuário
    </Main>
  );
}