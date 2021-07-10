import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Logo from "../../assets/img/logo.svg";

import "./style.css";

export default function NewIncident() {
    const [titulo, setTitulo] = useState("")
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói e resolver o problema.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="E02041"/>
                        Voltar para o home
                    </Link>
                </section>
                <form>
                    <input 
                    placeholder="Titulo do caso" 
                    autoComplete="false" 
                    required
                    value={titulo}
                    onChange={e =>setTitulo(e.target.value)}
                />
                    <textarea placeholder="Descrição" required/>
                    <input placeholder="Valor em Kz" required/>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}