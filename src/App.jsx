import { useState } from 'react'
import './App.css'
import initialArticles from './assets/articles'
import Form from './components/Form.jsx'

function App() {

  const [articles, setArticles] = useState(initialArticles);
  console.log(articles);

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
            <li key={article.id}>
              <a href="#">
                <h2>{article.titolo}</h2>
              </a>
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
