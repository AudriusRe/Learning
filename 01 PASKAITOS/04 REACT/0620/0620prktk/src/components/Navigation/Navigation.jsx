import { Link } from "react-router-dom";

export default function Navigation() {

    return (
    <div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/users/:userId"}>UserProfile</Link>
    </div>
  )
}
