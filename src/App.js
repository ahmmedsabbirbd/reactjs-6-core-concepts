import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Header from './component/Header/Header';

function App() {
  const [data, setData] = useState([]);
  useEffect( ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users	')
    .then(data=> setData(data.data));
  }, [])

  console.log(data)

  return (
    <div className="App">
        <Header></Header>
       
       <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
        </Routes>
    </div>
  );
}

export default App;
