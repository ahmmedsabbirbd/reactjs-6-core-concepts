import logo from './logo.svg';
import './App.css';
import { multiple, sum } from './utility/fuction';
import { useEffect, useState } from 'react';
import { addData, removeData, deleteCart } from './utility/fakedata';

function App() {
  const a = 5;
  const b = 3;
  const total = sum(a, b);
  const totalMultiple = multiple(a, b);

  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  console.log(users);

  return (
    <div className="App">
        <h2>you sum: {total}</h2>
        <h2>you multiple: {totalMultiple}</h2>
		<button onClick={deleteCart}>Delete All cart</button>
		
        {
          users.map((user) => <User id={user.id}></User>)
        }
    </div>
  );
}

const add =(id) => {
	addData(id);
}

const remove =(id) => {
	removeData(id);
}
 
const User = (props) => {
  return (
    <div>
      <h2>{props.id}</h2>
      <button onClick={()=> add(props.id)}>add</button>
      <button onClick={()=> remove(props.id)}>remove</button>
    </div>
  );
}; 

export default App;
