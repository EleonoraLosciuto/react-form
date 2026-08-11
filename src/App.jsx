import { useState } from 'react'
import './App.css'
import initialArticles from './assets/articles'
import Form from './components/Form.jsx'

function App() {
  // variabile di stato articles gestita qui a livello globale - passata al Form con props
  const [articles, setArticles] = useState(initialArticles); // valore iniziale initialArticles importata da DB
  console.log(articles);

  // funzione cancel article 
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
          articles.map((article, i) =>  // map articoli per rendering dinamico - checkbox gestito con classe e operatore ternario
            <li key={article.id}>
              <a href="#">
                <h2>{article.titolo}</h2>
              </a>
              <p className={article.isPublic ? 'public-label public' : 'public-label non-public'}> {article.isPublic ? "pubblico" : "non pubblico"}</p>
              <button onClick={() => cancelArticle(i)}>
                <i className='bi bi-trash-fill'></i>
              </button>
            </li>

          )
        }
      </ul>
      <Form articles={articles} setArticles={setArticles} />
    </div>
  )
}

export default App
