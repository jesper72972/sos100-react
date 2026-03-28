import { useState } from 'react'
import './App.css'

function App() {
  const [Formaner, setFormaner] = useState([])

  function FetchFormaner() {
    fetch('https://app-sos100-formaner.azurewebsites.net/Formaner')
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
              <h1 id="titel">{item.title}</h1>
              <p class="formanerna" id="categorie">{item.categorie} <br></br> {item.description}</p>   
            
              </div>
          ))}
        </div>
       
       




      </div>
      
    </>
  )
}

