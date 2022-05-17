import vocals from '../images/vocals.jpg'

export default function Vocals() {
  return (
    <div>
        <main style={{ textAlign: "center" }}>
        <h2 style={
          {fontFamily: "fantasy",
          color:"azure",
          padding:"3rem",
          fontSize:"xx-Large" }}>
            Robert Plant (vocalist)</h2>
    <img className='vocals' src={vocals} alt='vocals'></img>
    </main>
    </div>
  )
}
