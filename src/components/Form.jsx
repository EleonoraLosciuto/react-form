import './Form.css'
import { useState } from 'react'

const Form = (props) => {

    const { articles, setArticles } = props; // ricezione di variabile stato articoli da props

    const [formData, setFormData] = useState({ // variabile di stato formData per gestione del form multi-input
        titolo: "",
        autore: "",
        data: "",
        isPublic: null,
        descrizione: "",
    });

    const handleInput = (e) => {

        // uso destrutturazione per estrarre i campi che mi interessano da e.target
        const { name, type, value, checked } = e.target;
        let inputValue;

        // gestione checkbox
        if (type === "checkbox") inputValue = checked
        if (type !== "checkbox") inputValue = value

        // setFormData per modificare il valore con inputValue
        setFormData({
            ...formData,
            [name]: inputValue
        });
    }

    const handleSubmit = (e) => {

        // preventDefault per evitare ricarica della pagina
        e.preventDefault();

        // nuovo articolo
        const newArticle = {
            id: crypto.randomUUID(),
            titolo: formData.titolo,
            autore: formData.autore,
            data: formData.data,
            isPublic: formData.isPublic,
            descrizione: formData.descrizione
        };


        // setArticles per aggiungere nuovo articolo
        setArticles([...articles, newArticle]);

        // cancello gli input dal form dopo aver aggiunto il nuovo articolo 
        setFormData({
            titolo: "",
            autore: "",
            data: "",
            isPublic: false,
            descrizione: "",
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Aggiungi nuovo articolo: </label>
            <input type="text" name="titolo" placeholder="Aggiungi Titolo dell'articolo" value={formData.titolo} onChange={handleInput} />

            <label>Aggiungi autore: </label>
            <input type="text" name="autore" placeholder="Aggiungi Autore dell'articolo" value={formData.autore} onChange={handleInput} />

            <label>Data articolo: </label>
            <input type='date' name="data" placeholder="Data" value={formData.data} onChange={handleInput} />

            <label>Pubblico?</label>
            <input type="checkbox" name="isPublic" value={formData.isPublic} onChange={handleInput} />

            <label>Riassunto dell'articolo </label>
            <textarea name="descrizione" placeholder="Aggiungi Descrizione dell'articolo" value={formData.descrizione} onChange={handleInput} />

            <button type="submit">Invia</button>
        </form>

    )
};


export default Form;