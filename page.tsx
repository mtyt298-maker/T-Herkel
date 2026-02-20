export default function Home() {
  return (
    <main style={{fontFamily: 'Arial, sans-serif'}}>
      <header style={{display:'flex',justifyContent:'space-between',padding:'20px',boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
        <h1>T-Herkel</h1>
        <a href="https://wa.me/4915759042918" target="_blank" style={{background:'green',color:'white',padding:'10px 15px',borderRadius:'10px',textDecoration:'none'}}>
          WhatsApp Kontakt
        </a>
      </header>

      <section style={{padding:'40px',textAlign:'center'}}>
        <h2 style={{fontSize:'40px'}}>Kabelverlegung im Hochbau</h2>
        <p>Ihr zuverlässiger Partner für Bau- und Elektrohilfsarbeiten in Deutschland.</p>
      </section>

      <section style={{padding:'40px',background:'#f5f5f5'}}>
        <h3>Kontaktformular</h3>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{display:'flex',flexDirection:'column',maxWidth:'500px',margin:'auto',gap:'10px'}}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-Mail" required />
          <textarea name="message" placeholder="Ihre Nachricht" required />
          <button type="submit">Senden</button>
        </form>
      </section>

      <section style={{padding:'40px'}}>
        <h3>Impressum</h3>
        <p>
          T-Herkel<br/>
          Inhaber: Termanini Herkel<br/>
          Masurenring 13<br/>
          24149 Kiel<br/>
          Deutschland<br/><br/>
          Telefon: +49 15759042918<br/>
          E-Mail: mtyt298@gmail.com
        </p>
      </section>

      <footer style={{padding:'20px',textAlign:'center',background:'#111',color:'white'}}>
        © 2026 T-Herkel – Kabelverleger im Hochbau
      </footer>
    </main>
  )
}
