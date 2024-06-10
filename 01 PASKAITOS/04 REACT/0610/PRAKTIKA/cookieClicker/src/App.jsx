import { useState } from 'react'
import './App.css'

function App() {
  let [getPhoto, setPhoto] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYulq8yYmCvXb5UPWeWsx5r3Kf-QdjWQ_tw&s")
  let [score, setScore] = useState(0)
  let [count, setCount] = useState(1)
  let [getBackground, setBackground] = useState("blue")
  
  function getScore() {
    setScore(score + count);
  }

  function doubleCount() {
    if (score >= 50) {
          setScore(score - 50);
          setCount(2);
        }
  }

  function tripleCount() {
    if (score >= 100) {
          setScore(score - 100);
          setCount(3);
        }
  }

  function changeCookie() {
    if (score >= 50) {
      setScore(score - 50);
      setPhoto(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0ewcOwb-dXn8kgmXupDWuaOLIU0HAK_NbA&s"
      );
    }
  }

  function changeBackground() {
    if (score >= 50) {
      setScore(score - 50);
      setBackground("red");
    }
  }
  
  return (
    <>
      <div className='mainDiv' style={({ backgroundColor: getBackground})} >
       <div className='leftDiv'>
         <h1>Cookie Clicker</h1>
          <img 
          onClick={getScore} 
          src={getPhoto}
          alt="my name is cookie" />
         <h3>Your Score Is {score}</h3>
        </div>
        <div className='rightDiv'>
          <article 
          onClick={doubleCount} 
          >2 Points Per Click <br />
          Price: $50
          </article>
          <article 
          onClick={tripleCount} 
          >3 Points Per Click <br />
          Price: $100
          </article>
          <article 
          onClick={changeCookie} 
          >Change Cookie Image <br />
          Price: $50
          </article>
          <article 
          onClick={changeBackground} 
          >Change Background Color <br />
          Price: $50
          </article>
        </div>

      </div>

    </>
  )
}

export default App

