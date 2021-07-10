import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../service/api";
import { FiPower, FiTrash2, FiEdit2} from "react-icons/fi"
import Logo from "../../assets/img/logo.svg";
import "./style.css";

export default function Profile() {
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem("OngName");
    const ongId = localStorage.getItem("OngId");

    if (!ongId) {
        history.push("/");
    }

    useEffect(() => {
        api.get("profile", {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);


    async function handleDeleteincident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert("Opsss... :(  Parece que houve um erro ao deletar, por favor tente novamente! :)");
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push("/");
    }
    
    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Be The Hero" />
                <span>Bem vinda, {ongName} :)</span>
                <Link to="/incidents/new" className="button">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident=>(
                    <li key={incident.id}>
                        <strong>Caso</strong>
                        <p>{incident.title}</p>
                        <strong>Descrição</strong>
                        <p>{incident.description}</p>
                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat("pt-AO", {style: "currency", currency: "Akz"}).format(incident.value)}</p>
                        <button type="button" title="Deletar" className="iconsIncidents" onClick={()=>handleDeleteincident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                        <button type="button" title="Editar" className="iconsIncidents">
                            <Link to={`incidents/edit/${incident.id}`}><FiEdit2 size={20} color="#E02041"  border="none"/></Link> 
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
