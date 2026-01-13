// qui iniziamo ad aggiungere funzionalità ai bottoni
console.log('FOGLIO JS FUNZIONANTE!')

// selettore CSS per prendere il primo button all'interno di un btn-group
const firstButton = document.querySelector('.btn-group .btn:nth-of-type(1)')
console.log('PRIMO BOTTONE', firstButton)

firstButton.addEventListener('click', function () {
  console.log('CLICCATO')
  // primo test: facciamo scomparire la prima card
  // -> recuperiamo un riferimento al primo cane

  const firstCard = document.getElementById('firstcard')
  //   const firstCard = document.querySelector('.card:nth-of-type(1)')
  console.log('FIRSTCARD', firstCard)

  // la facciamo scomparire
  //   firstCard.remove()
  //   firstCard.classList.add('d-none')
  //   firstCard.classList.add('invisible') // visibility: 'hidden'
})

// ORA CON UN CICLO ASSEGNIAMO IL COMPORTAMENTO AI 4 BOTTONI IN UN COLPO SOLO
// primo step: prendo TUTTI i bottoni
const allTheButtons = document.querySelectorAll('.btn-group .btn') // NodeList con 4 elementi (bottoni)
console.log('BOTTONI', allTheButtons)
// allTheButtons ha lunghezza n -> l'ultimo elemento avrà indice [n-1]

// per fare in modo che nel mio ciclo for possa associare il primo bottone alla prima card,
// il secondo bottone alla seconda card etc. devo creare un array parallelo a quello dei bottoni
// che però contenga tutte le CARD della pagina (class="card")
const allTheCards = document.querySelectorAll('.card')
// allTheCards è un array di TUTTE le cards della pagina
// in alternativa
// const allTheCards = document.getElementsByClassName('card')

// ora cicliamo questi 4 bottoni: ognuno di essi dovrà "intervenire" su una delle prime 4 cards

// FOR
// for (let i = 0; i < allTheButtons.length; i++) {
//   // i è un numero che vale 0, 1, 2 o 3 a seconda dell'iterazione di questo for
//   // -> allTheButtons[0] al primo giro, allTheButtons[1] al secondo giro etc.
//   const currentButton = allTheButtons[i] // questo è il bottone corrente per questa iterazione del for
//   const currentCard = allTheCards[i]
//   currentButton.addEventListener('click', function () {
//     // i vale lo stesso valore per tutta la durata dell'iterazione
//     // currentCard è la prima card al primo giro, la seconda al secondo etc. etc.

//     // METODO MANUALE
//     // if (currentCard.classList.contains('invisible')) {
//     //   currentCard.classList.remove('invisible')
//     // } else {
//     //   currentCard.classList.add('invisible')
//     // }

//     // METODO TOGGLE
//     currentCard.classList.toggle('invisible')
//   })
// }

// FOREACH
allTheButtons.forEach((button, i) => {
  // button è come il "vecchio" allTheButtons[i] o currentButton
  button.addEventListener('click', function () {
    // il primo bottone deve aggiungere una classe alla prima card
    // il secondo bottone deve aggiungere una classe alla seconda card
    // etc.
    // come faccio con il primo bottone a raggiungere la prima card senza "i"?
    // i -> 0, 1, 2 o 3
    const currentCard = allTheCards[i]
    currentCard.classList.toggle('invisible')
  })
})

const frutti = ['mela', 'pera', 'banana']
// vorrei trasformare questo array di frutti in un altro array con solo le iniziali di ogni frutto
// -> ['m', 'p', 'b']

const result = []
frutti.forEach((f) => {
  result.push(f.slice(0, 1))
})
// ho dovuto creare inizialmente un array vuoto, e per ogni elemento ho dovuto fare un'operazione
// di push

const result2 = frutti.map((f) => {
  return f.slice(0, 1)
})
// map permette di TRASFORMARE un array in un altro, elemento per elemento, ritornando da ogni f
// il valore che volete ottenere. Questi valori verranno inseriti automaticamente nell'array
// che viene ritornato dal map.
// NB: map ritorna sempre un array di PARI LUNGHEZZA a quello su cui è stato invocato
