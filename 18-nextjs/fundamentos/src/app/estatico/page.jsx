import Layout from "../../components/Layout";

export const dynamic = "force-static";

// Executado apenas no build
const numeroGerado = Math.random();

export default function Estatico() {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{numeroGerado}</div>
        </Layout>
    );
}