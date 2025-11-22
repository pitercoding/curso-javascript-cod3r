import Layout from "../../../../components/Layout";

export default function ClientePorCodigo({params}) {
    const  { codigo, filial } = params;
    
    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Filial = {filial}</div>
            <div>Código = {codigo}</div>
        </Layout>
    )
}