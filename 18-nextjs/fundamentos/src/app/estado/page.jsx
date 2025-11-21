"use client";

import { useState } from "react";
import Layout from "../../components/Layout";
import styles from "./Estado.module.css";

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
            <button onClick={incrementar} className={styles.botao}>Incrementar</button>
            <button onClick={decrementar} className={styles.botao}>Decrementar</button>
        </Layout>
    )
}