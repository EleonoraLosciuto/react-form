import './Form.css'
import { useState } from 'react'

const Form = (props) => {

    const { articles, setArticles } = props;

    const [formData, setFormData] = useState({
        titolo: "",
        autore: "",
        data: "",
        descrizione: "",
    });

    const handleInput = (e) => {
        const { name, type, value, checked } = e.target
        const inputValue = type == "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArticle = {
            id: crypto.randomUUID(),
            titolo: formData.titolo,
            autore: formData.autore,
            data: formData.data,
            descrizione: formData.descrizione
        };
        setArticles([...articles, newArticle])
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Aggiungi nuovo articolo: </label>
            <input type="text" name="titolo" placeholder="Aggiungi Titolo dell'articolo" value={formData.titolo} onChange={handleInput} />

            <label>Aggiungi autore: </label>
            <input type="text" name="autore" placeholder="Aggiungi Autore dell'articolo" value={formData.autore} onChange={handleInput} />

            <label>Data articolo: </label>
            <input type='date' name="data" placeholder="Data" value={formData.data} onChange={handleInput} />

            <label>Riassunto dell'articolo </label>
            <textarea name="descrizione" placeholder="Aggiungi Descrizione dell'articolo" value={formData.descrizione} onChange={handleInput} />

            <button type="submit">Invia</button>
        </form>

    )
};


export default Form;