import ReactDOM from "react-dom/client";

// import Bomdia from './componentes/BomDia';
import { BoaTarde, BoaNoite } from "./componentes/Multiplos";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BoaTarde nome={"Ana"} />
    <BoaNoite nome={"Bia"} />
  </>
);
