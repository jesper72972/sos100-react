import { useState } from 'react'
import './App.css'

function App() {
  const [Formaner, setFormaner] = useState([])

  function FetchFormaner() {
    fetch('http://localhost:5028/Formaner')
    .then((response) => response.json())
    .then((data) =>setFormaner(data))
  }

  return (
    <>
     
      <h1>Förmånsportal</h1>
      <div className="card">
        <button onClick= {FetchFormaner}>
        Hämta förmånerna
        </button>
       
       
         
        <div>
          {Formaner.map((item, index) => (
            <div key = {index}>
              <h1>{item.title}</h1>
              <h2>{item.categorie}</h2>
              <p>{item.description}</p>
              </div>
          ))}
        </div>
       




      </div>
      
    </>
  )
}

export default App
