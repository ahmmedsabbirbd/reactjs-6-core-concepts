import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const names = ['sabbir', 'oishi', 'dola', 'nodi']

  return (
    <div className="App">
        <h1>React 6 CORE CONCEPTS</h1>
        <h2>1. JSX</h2>
        <Componnet></Componnet>
        <Props core="3. Props"></Props>

        {
          names.map(name =>  <Props core={name}></Props>)
        }

        <Props core="4. useState()"></Props>
        <UseState></UseState>

        <Props core="5. add eventhanderler"></Props>
        <Props core="6. External Data loaded"></Props>
        <Props core="useState() & useEffect()"></Props>
        <UsersData></UsersData>
    </div>
  );
}

function Componnet(){
  return (
    <h2>2. Componnent</h2>
  )
}

function Props(props){
  return (
    <h2>{props.core}</h2>
  )
}

function UseState(){
  const [number, setNumber] = useState(1);

  const numberPlus = ()=> setNumber(number + 1);
  const numberMinus = ()=> setNumber(number - 1);
  return (
    <div>
      <div>{number}</div>
      <button onClick={numberPlus}>Plus</button>
      <button onClick={numberMinus}>Minus</button>
    </div>
  )
}

function UsersData() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);

  return(
    <div>
      <h2>UsersShow</h2>
      {
        users.map(user => <DisplayDataShow name={user.name} username={user.username} email={user.email}></DisplayDataShow>)
      }
    </div>
  )
}

function DisplayDataShow(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <span>username: {props.username}</span>
      <span>email: {props.email}</span>
    </div>
  )
}

export default App;
