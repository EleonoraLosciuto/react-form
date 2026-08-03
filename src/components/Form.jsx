import './Form.css'

const Form = (props) => {

    const { addNewArticle, handleInput } = props;

    return (
        <form onSubmit={addNewArticle}>
            <label htmlFor="titolo">Aggiungi nuovo articolo: </label>
            <input onChange={handleInput} type="text" label="titolo" placeholder="Aggiungi Titolo dell'articolo" />
            <button type="submit">Invia</button>
        </form>

    )
};


export default Form;