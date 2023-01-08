import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Drinks from "./components/Drinks";


function App() {

  const [dataDrinks, setDataDrinks] = useState([]);
  const [name , setName] = useState ("margarita")

  useEffect ( () =>{
    getData()
  }, [name])
  const getData = () =>{
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp =>{
      console.log(resp.data.drinks)
      setDataDrinks(resp.data.drinks)
    })
    .catch(error => console.log(error))

  }
  const searchDrink = (e) =>{
    e.preventDefault()
    setName(e.target[0].value.toLowerCase())
  }

  return (
    <div className="App">
      <form onSubmit={(e) => searchDrink(e)}>
        <input type="text" placeholder="Search by name" />
        <button type="submit">Search</button>
      </form>
      {
        dataDrinks.map( (drinks, index)=> 
        <Drinks 
        key={`drinks-${index}`}
        data={drinks}
        /> )
      }
    </div>
  );
}

export default App;
