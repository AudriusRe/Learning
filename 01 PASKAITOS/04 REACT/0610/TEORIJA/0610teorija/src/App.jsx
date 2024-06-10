import {useState} from 'react'
import './App.css'

function App() {

  //COLOR
  // const [getColor, setColor] = useState("white")



 //RANDOM LETTER
  // const [getLetter, setLetter] = useState("A")


//COLOR
  // function setRed() {
  //   setColor("red")
  // }
  // function setYellow() {
  //   setColor("yellow")
  // }
  // function setBlue() {
  //   setColor("blue")
  // }

  // // RANDOM LETTER
  // function updateLetter() {
  //   const abc = "ABCDEFGHIJKLMNOPRSTUVZ"
  // const randomLetter = abc[Math.floor(Math.random()*abc.length)]

  // setLetter(randomLetter)
  // }

  const [getPhoto, setPhoto] = useState("")

  function showDog() {
    setPhoto("data:image/jpeg;base64,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")
  }

  function showCat() {
    setPhoto("data:image/jpeg;base64,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")
  }

  return (
    <>
{/* COLOR */}
    {/* <div>
      <div className="box" style={{ backgroundColor: getColor }}></div>

      <button onClick={setRed}>RED</button>
      <button onClick={setYellow}>YELLOW</button>
      <button onClick={setBlue}>BLUE</button>
    </div> */}

{/* RANDOM LETTER */}
    {/* <h1>{getLetter}</h1>
    <button onClick={updateLetter}>Update</button> */}

    <div>
      <img src={getPhoto} alt="photo" /> <br />
      <button onClick={showDog} >SHOW DOG</button>
      <button onClick={showCat} >SHOW CAT</button>
    </div>
    </>
  )
}

export default App