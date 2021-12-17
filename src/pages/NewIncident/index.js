import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import Logo from "../../assets/img/logo.svg";

import "./style.css";

export default function NewIncident() {

    const history = useHistory();
    let [title, setTitulo] = useState("");
    let [description, setDescription] = useState("");
    let [value, setValue] = useState("");
    const ongId = localStorage.getItem("OngId");
    // const { id } = useParams();

    if (!ongId) {
        history.push("/");
    }
    
    // useEffect(() => {
    //     async function getIncident(){
    //         const response = await api.get("incidents/edit/"+id)
    //         setTitulo(response.data.title);
    //         setValue(response.data.value);
    //         setDescription(response.data.value);
    //         console.log(response);
    //     }
    //     getIncident();
    // }, [id]);

    // async function handleUpdate(e) {
    //     e.preventDefault();
    //     const data = {
    //         title,
    //         description,
    //         value
    //     }
    //     console.log("Update", data);
    // }

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post("incidents", data, {
                headers:{
                    Authorization: ongId
                } 
            });

            alert("Cadastro realizado com sucesso! :)");
            history.push("/profile");
        } catch (error) {
            alert("Opsss... :( Parece que houve um problema ao cadastrar."
                +"\nPor favor, tente novamente :)");
        }
    }

    // const action = (!pid ? handleNewIncident : handleUpdate)
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
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso" 
                        autoComplete="false" 
                        required
                        value={title}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <input 
                        placeholder="Valor em Kz"
                        value={value} 
                        onChange={e => setValue(e.target.value)}
                        required
                    />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
