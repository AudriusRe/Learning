
export default function colorDiv() {

 
    return (
      <>
      <div>
        <div className="box" style={{ backgroundColor: getColor }}></div>
  
        <button onClick={setRed}>RED</button>
        <button onClick={setYellow}>YELLOW</button>
        <button onClick={setBlue}>BLUE</button>
      </div>
      </>
    )
  }