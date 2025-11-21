import Layout from "../../../../components/Layout";

export default function ClientePorCodigo({params}) {
    const  { codigo, filial } = params;
    
    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {codigo}</div>
            <div>Filial = {filial}</div>
        </Layout>
    )
}