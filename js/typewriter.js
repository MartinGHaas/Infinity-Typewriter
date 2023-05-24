// GET ELEMENT FROM DOM
const typewriter = document.getElementById('typewriter');

// CREATES WORDS TO BE USED
let words = ['JavaScript', '!Css', '!HTML', '!Python', '!Java'];

// CREATE AN ARRAY TO BE USED FOR STORING WORD's LENGTH
let arrWord = words[0].split('')

// SORT A RANDOM WORD FROM WORDS
const randomWord = () => {
  let random = Math.floor(Math.random() * words.length);
  return words[random];
}

// CREATES FIRST WORD
arrWord.forEach((letra, i) => {
  setTimeout(() => {
    typewriter.innerHTML += letra;
  }, 75 * i)
})

setTimeout(() => {
  arrWord.forEach((element, i) => {
    setTimeout(() => {
      typewriter.innerHTML = typewriter.innerHTML.slice(0, -1);
    }, 75 * i)
  })
}, 5000)


let lastWord = words[0];  // store the first word used for loop

// CREATES A 'INFINITY' LOOP WHICH PUTS AND REMOVES WORDS FROM DOM
setInterval(() => {
  let newWord = randomWord(); // defines a new word every time
  
  // NEW WORD CAN'T BE LAST WORD |avoid repetitions|
  while(newWord === lastWord){
    newWord = randomWord();
  }
  lastWord = newWord;
  arrWord = newWord.split('');

  // ADD TO DOM THIS NEW WORD
  arrWord .forEach((letra, i) => {
    setTimeout(() => {
      typewriter.innerHTML += letra;
    }, 75 * i)
  })

  setTimeout(() => {
  arrWord.forEach((element, i) => {
    setTimeout(() => {
      typewriter.innerHTML = typewriter.innerHTML.slice(0, -1);
      }, 75 * i)
    })
  }, 5000)

}, 7000)
