import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
};

export default function UserCrud() {
  return (
    <Main {...headerProps}>
      Cadastro de Usuário
    </Main>
  );
}