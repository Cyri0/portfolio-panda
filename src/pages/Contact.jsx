const Contact = () => {
  return (
    <div>

      <h1>Vedd fel velem a kapcsolatot!</h1>

      <form id="contactForm">
        <div>
          <label htmlFor="name">Név:</label>
          <input type="text" id="name" /> <br/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" /> <br/>
        </div>
        
        <div>
          <label htmlFor="message">Üzenet:</label>
          <textarea name="" id="message"></textarea>
          <br/>
          <button type="submit">Elküld</button>
        </div>
      </form>

      <img src="https://randomfox.ca/images/82.jpg" 
           style={{width: "100%"}} />
    </div>
  )
}

export default Contact