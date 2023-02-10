function getInfoFetch() {

    const button = document.querySelector('#random-quote')
    const quote = document.querySelector('#quote')
    const author = document.querySelector('#author')
    
  
    button.addEventListener('click', () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(res => res.json())
      .then(data => {
        let textQuote = data[0].quote
        let textAuthor = data[0].character
        
        quote.textContent = textQuote
        author.textContent = '--' + textAuthor
  
        //Veikia, bet vis pridedapo nauja kito personazo nuotrauka
  
        // let authorImg = document.createElement('img')
        // authorImg.src = data[0].image
        // document.body.appendChild(authorImg);
        
  
        let authorImg = document.querySelector('img')
  
          if (authorImg) {
            authorImg.src = data[0].image
  
          } else {
            authorImg = document.createElement('img')
            document.body.appendChild(authorImg)
            authorImg.src = data[0].image
          }
  
      })
    })
  }
  getInfoFetch()
  