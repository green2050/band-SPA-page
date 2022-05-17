import guitar from '../images/guitar.jpg'

export default function Guitar() {
  return (
    <div>
        <main style={{ textAlign: "center" }}></main>
        <h2 style={{fontFamily:
          "fantasy", 
          color:"azure", 
          padding:"3rem",
          fontSize:"xx-Large" }}>
            Jimmy Page (guitarist)</h2>
        <img className='guitar' src={guitar} alt='guitar'></img>
    </div>
  )
}
