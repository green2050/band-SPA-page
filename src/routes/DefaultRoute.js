import led from '../images/led.jpg'

export default function DefaultRoute() {
  return (
    <main style={{textAlign: "center"}}>
            
              <h1 style={{fontFamily: "fantasy", backgroundColor: "white", padding:"2rem",fontSize:"xx-Large" }}>Led Zeppelin</h1>
              <img className='led' src={led} alt='led'></img>
              <p style={{textAlign: "center", margin:"50px 100px", color: "azure", fontSize:"larger"}}>Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry.</p>
          </main>
  )
}
