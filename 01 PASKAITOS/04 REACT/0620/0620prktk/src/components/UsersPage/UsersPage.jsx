import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_LINK = "https://jsonplaceholder.typicode.com/users";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(API_LINK)
      .then((response) => setUsers(response.data))
      .catch((err) => alert(err.message));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <Link to={`/user/${user.id}`} >More Info</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}
