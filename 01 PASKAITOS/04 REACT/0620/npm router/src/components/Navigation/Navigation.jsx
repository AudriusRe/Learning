import { Link } from "react-router-dom";

export default function Navigation() {

    return (
    <div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/Contacts"}>Contacts</Link>
        <Link to={"/Posts"}>Posts</Link>
    </div>
  )
}
