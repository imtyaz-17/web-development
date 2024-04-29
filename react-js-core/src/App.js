import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const names = ['AA', 'BB', 'CC'];

  const products = [
    { name: 'laptop', price: 1500 },
    { name: 'mobile', price: 1000 },
    { name: 'watch', price: 500 },
  ]
  return (
    <div className="App">
      {
        names.map(name => <Person name={name}></Person>)
      }
      {/* <Person name={name[0]} desg="Developer"></Person>
      <Person name={name[2]} desg="cleaner"></Person> */}
      <br></br>

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <br></br>

      <Counter></Counter>
      <br></br>

      <ExternelUsers></ExternelUsers>

    </div>
  );
}
function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.desg}</p>
    </div>
  )
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

function ExternelUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>Externel Users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
      <p></p>
    </div >
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '15px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div >
  )
}
export default App;
