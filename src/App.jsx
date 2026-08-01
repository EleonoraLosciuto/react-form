import { useState } from 'react'
import './App.css'
import initialArticles from './assets/articles'

function App() {

  const [articles, setArticles] = useState([initialArticles])

  return (
    <div className='container'>
      <h1>Giornale del Web</h1>
      <ul>
        {
          initialArticles.map((article) =>
            <li key={article.id}>
              <a href="#">
                <h2>{article.titolo}</h2>
              </a>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default App
