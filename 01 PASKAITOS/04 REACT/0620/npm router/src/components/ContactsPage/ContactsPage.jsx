import { Link } from "react-router-dom";

export default function ContactsPage() {
  return (
    <div>
        <Link to={"/home"}>GO TO HOME</Link>
    <h1>Contacts</h1>    
    <ul>
        <li>TELEFONAS</li>
        <li>MEILAS</li>
        <li>ADRESAS</li>
        <li>BATU DYDIS</li>
        <li>NAGU SPALVA</li>
    </ul>
    </div>
  )
}
