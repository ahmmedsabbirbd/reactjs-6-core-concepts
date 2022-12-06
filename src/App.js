import logo from './logo.svg';
import './App.css';
import { multiple, sum } from './utility/fuction';
import { useEffect, useState } from 'react';

function App() {
  const a = 5;
  const b = 3;
  const total = sum(a, b);
  const totalMultiple = multiple(a, b);

  const [user, setUser] = useState([]);

  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);

  console.log(user);

  return (
    <div className="App">
        <h2>you sum: {total}</h2>
        <h2>you multiple: {totalMultiple}</h2>
        {}
    </div>
  );
}

export default App;
