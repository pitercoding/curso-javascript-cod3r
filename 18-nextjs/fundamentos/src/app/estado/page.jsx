"use client";

import { useState } from "react";
import Layout from "../../components/Layout";

export default function Estado(){
    const [ numero, setNumero ] = useState(0) //React Hooks

    function incrementar(){
        setNumero(numero + 1)
    }

    function decrementar(){
        setNumero(numero - 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar} >Decrementar</button>
        </Layout>
    )
}