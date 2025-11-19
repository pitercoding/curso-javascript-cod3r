import ReactDOM from "react-dom/client";

// import Bomdia from './componentes/BomDia';
// import { BoaTarde, BoaNoite } from "./componentes/Multiplos";
import Saudacao from "./componentes/Saudacao";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Saudacao tipo= "Bom dia" nome="João" />
  </>
);
