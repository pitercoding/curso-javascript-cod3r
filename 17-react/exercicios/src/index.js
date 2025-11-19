import ReactDOM from "react-dom/client";

// import Bomdia from './componentes/BomDia';
// import { BoaTarde, BoaNoite } from "./componentes/Multiplos";
// import Saudacao from "./componentes/Saudacao";
import Pai from "./componentes/Pai";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Pai nome={"Paulo"} sobrenome={"Silva"} />
  </>
);
