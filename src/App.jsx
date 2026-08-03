import { useState } from 'react'
import './App.css'
import initialArticles from './assets/articles'

function App() {

  const [articles, setArticles] = useState(initialArticles)
  const [newArticle, setNewArticle] = useState("");

  const handleInput = (e) => {
    setNewArticle(e.target.value);
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    setArticles([...articles, newArticle]);
  };

  const cancelArticle = i => {
    setArticles(
      articles.filter((article, index) => index !== i)
    )
  };


  return (
    <div className='container'>
      <h1>Giornale del Web</h1>
      <ul>
        {
          articles.map((article, i) =>
            <li key={i}>
              <a href="#">
                <h2>{article}</h2>
              </a>
              <button onClick={() => cancelArticle(i)}>
                <i className='bi bi-trash-fill'></i>
              </button>
            </li>
          )
        }
      </ul>
      <form onSubmit={addNewArticle}>
        <label htmlFor="titolo">Aggiungi nuovo articolo: </label>
        <input onChange={handleInput} type="text" label="titolo" placeholder="Aggiungi Titolo dell'articolo" />
        <button type="submit">Invia</button>
      </form>
    </div>
  )
}

export default App
