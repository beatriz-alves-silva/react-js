import React from 'react';
import "./StylesExamples.css";
import styles from './StylesExample.module.css'

const StylesExamples = () => {
    // inline
    const inlineStyle = {
        color: "blue",
        fontSize: "20px"
    }

    return (
    <div>
        {/* INLINE */}
        <h2 style={inlineStyle}>Estilos inline</h2>

        {/* ARQUIVO DE ESTILOS */}
        <p className="text">Meu CSS</p>

        {/* CSS MODULES */}
        <p className={styles.textPurple}>Meu CSS Modules</p>
    </div>
    )
}

export default StylesExamples