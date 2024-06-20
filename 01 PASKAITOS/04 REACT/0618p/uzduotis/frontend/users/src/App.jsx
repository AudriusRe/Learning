import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import UsersContainer from './components/UsersContainer/UsersContainer';



function App() {

  const [users, setUsers] = useState([]);

    useEffect(() => {
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data)
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    }, []);

  return (
<div>
    <UsersContainer users={users} />
</div>
  )
}

export default App
