import drums from '../images/drums.jpeg'

export default function Drums() {
  return (
    <div>
        <h2 style={
          {fontFamily: "fantasy",
          color:"azure",
          padding:"3rem",
          fontSize:"xx-Large" }}>
            John Bonham(drummer)</h2>
        <img className='drums' src={drums} alt='drums'></img>
    </div>
  )
}
