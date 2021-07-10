import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../service/api";
import { FiArrowRight } from "react-icons/fi";
import Logo from "../../assets/img/logo.svg";
import "./style.css";

export default function HomeIncident() {
    const [incidents, setIncident] = useState([]);
    // const [total setTotal] = useState(0);
    useEffect(() => {
        api.get("all")
            .then(response => {
                setIncident(response.data)
            });
    }, []);

  return (
    <div className="profile-container">
        <header>
            <img src={Logo} alt="Be The Hero" />
            <div className="signin">
                <Link to="/logon" className="button">
                    Entrar
                </Link>
                <Link to="/register" className="button">
                    Cadastrar-e
                </Link>
            </div>
        </header>
        <div className="meeting">
            <h2>Bem vindo :)</h2>
            <p>Escolha um dos casos abaixo e seja um herói</p>
            <span>Total de: 0 casos</span>
        </div>
        <ul>
            {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>Caso</strong>
                    <p>{incident.title}</p>
                    <strong>Valor</strong>
                    <p>{Intl.NumberFormat("pt-AO", {style: "currency", currency: "Akz"}).format(incident.value)}</p>
                    <strong>Ong</strong>
                    <p>{incident.name}</p>
                    <Link to={`/details/`+incident.id} className="">
                        Ver mais detalhes
                        <FiArrowRight size={16} color="E02041"/>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    );
}