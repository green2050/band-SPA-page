import bass from '../images/bass.jpg'

export default function Bass() {
  return (
    <div>
        <h2 style={
          {fontFamily: "fantasy",
        color:"azure",
        padding:"3rem",
        fontSize:"xx-Large" }}>
          John Paul Jones (bassist)</h2>
        <img className='bass' src={bass} alt='bass'></img>
    </div>
  )
}
