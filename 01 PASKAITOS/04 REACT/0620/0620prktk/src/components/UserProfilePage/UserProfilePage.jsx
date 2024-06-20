import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; //padaro kad paimtu is adreso id
import axios from "axios";

const API_LINK = "https://jsonplaceholder.typicode.com/users";

export default function UserProfilePage() {
  const [user, setUser] = useState({});

  const params = useParams(); //grazina objekta kuriame bus visi parametrai
  const navigate = useNavigate()
  console.log(params);

  useEffect(() => {
    axios
      .get(`${API_LINK}/${params.id}`)
      .then((response) => setUser(response.data))
      .catch((err) => alert(err.message));
  }, []);

  function handleBackButton() {
    navigate(-1) //grizta pulsapi atgal. -2 griztu dar giliau
  }

  return (
    <div>
        <button onClick={handleBackButton}>GO BACK</button>
        {user.id ? (
    <>
      <p>USER ID: {user.id}</p>
      <p>USER NAME: {user.name}</p>
      <p>USERNAME: {user.username}</p>
      <p>USER EMAIL: <a href={user.email}>{user.email}</a> </p>
      <p>USER STREET: {user.address.street}</p>
      <p>USER SUITE: {user.address.suite}</p>
      <p>USER CITY: {user.address.city}</p>
      <p>USER ZIPCODE: {user.address.zipcode}</p>
      <p>USER LATTITUDE: {user.address.geo.lat}</p>
      <p>USER LONGTITUDE: {user.address.geo.lng}</p>
      <p>USER PHONE NUMBER: {user.phone}</p>
      <p>USER WEBSITE: <a href={user.website}>{user.website}</a> </p>
      <p>USER COMPANY NAME: {user.company.name}</p>
      <p>USER COMPANY CATCHPHRASE: {user.company.catchPhrase}</p>
      <p>USER COMPANY BS: {user.company.bs}</p>
      </>) : (<h1>Loading...</h1>)
        }
    </div>
  );
}
