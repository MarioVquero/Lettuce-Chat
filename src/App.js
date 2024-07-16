import { useEffect, useState } from 'react';
import './App.css';

const URL = ''

function App() {
  const [collection,setCollection] = useState([]);
  
  // Fetching initial data to be passed down 
  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) =>  setCollection(data));
  }, [])

  const onSubmit  = (newgame) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newgame),
      // here we are posting the actual newgame data into our JSON file
    })
      .then((response) =>  response.json())
      .then((game) => setCollection([...collection, game]))
      // we are getting the response back and setting the newgame into the current collection  
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
