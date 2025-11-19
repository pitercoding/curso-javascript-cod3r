import ReactDOM from "react-dom/client";

// import Bomdia from './componentes/BomDia';
// import { BoaTarde, BoaNoite } from "./componentes/Multiplos";
// import Saudacao from "./componentes/Saudacao";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Pai nome={"Paulo"} sobrenome={"Silva"} >
        <Filho nome={"Pedro"} sobrenome={"Silva" } />
        <Filho nome={"Ana"} sobrenome={"Silva" } />
        <Filho nome={"Gui"} sobrenome={"Silva" } />
    </Pai>
  </>
);
