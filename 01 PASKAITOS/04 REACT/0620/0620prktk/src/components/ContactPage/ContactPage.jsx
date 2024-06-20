import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div>
        <Link to={"/home"}>Go Home</Link>
    <h1>Contacts</h1>    
    <ul>
        <li>UAB Apsuka</li>
        <li>TELEFONAS: Raudonas</li>
        <li>MEILAS: Prisimenamas</li>
        <li>ADRESAS: Už kampo</li>
        </ul>
    </div>
  )
}
