import './App.css'
import Entregable from './components/Entregable'
import users from './data/users.json'
import { useState, useEffect } from 'react'
import {Shuffle} from 'react-bootstrap-icons'

function getRandomIndex(maxLimit) {
  return Math.floor(Math.random()*maxLimit)
}



function App() {
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]

  
  const [index,setIndex] = useState(getRandomIndex(users.length))

  useEffect(()=>{
    let color = colors[getRandomIndex(colors.length)]
    document.body.style = `background-color: ${color}; color: ${color};`
  }, [index])

  return (
    <div className="App">
      
      <Entregable 
      name={users[index].name}
      photo={users[index].picture.large}
      mail={users[index].email}
      phone={users[index].phone}
      location={users[index].location}
      />
      <button onClick={ ()=> setIndex(getRandomIndex(users.length)) }><Shuffle/></button>
    </div>
  )
}

export default App
