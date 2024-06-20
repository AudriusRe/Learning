import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; //padaro kad paimtu is adreso id
import axios from "axios";

const API_LINK = "https://jsonplaceholder.typicode.com/posts";

export default function PostPage() {
  const [post, setPost] = useState({});

  const params = useParams(); //grazina objekta kuriame bus visi parametrai
  const navigate = useNavigate()
  console.log(params);

  useEffect(() => {
    axios
      .get(`${API_LINK}/${params.id}`)
      .then((response) => setPost(response.data))
      .catch((err) => alert(err.message));
  }, []);

  function handleBackButton() {
    navigate(-1) //grizta pulsapi atgal. -2 griztu dar giliau
  }

  return (
    <div>
        <button onClick={handleBackButton}>GO BACK</button>
        {post.id ? (
    <>
      <p>{post.userId}</p>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
      </>) : (<h1>Loading...</h1>)
        }
    </div>
  );
}
