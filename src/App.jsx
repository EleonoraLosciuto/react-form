import { useState } from 'react'
import './App.css'
import initialArticles from './assets/articles'
import { v4 as uuidv4 } from 'uuid'

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

  let artID;

  return (
    <div className='container'>
      <h1>Giornale del Web</h1>
      <ul>
        {
          articles.map((article) =>
            <li key={uuidv4()}>
              <a href="#">
                <h2>{article}</h2>
              </a>
            </li>
          )
        }
      </ul>
      <form onSubmit={addNewArticle}>
        <input onChange={handleInput} type="text" label="titolo" />
        <button type="submit">Invia</button>
      </form>
    </div>
  )
}

export default App
