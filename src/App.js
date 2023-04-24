import React, {useState} from 'react';
import './App.css';
import Page from "./Page";



function App() {
  const [count, update] = useState(0)

  function addLetters(){
    if(count <= 9){
      update(prevCount => prevCount + 1);
    }
  }
  let vowels = ['A','E','I','O','U'];
  let consonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K','L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

  let acronym = ""
  function getRandomArbitrary(left, right){
    return Math.random() * (right - left +1) + left;
  }
  function vowelButton(){
    let rand_num = getRandomArbitrary(0,4);
    acronym = acronym + vowels[rand_num]; 
  }
  function consonantButton(){
    let rand_num = getRandomArbitrary(0,21);
    acronym = acronym + consonant[rand_num];
  }


  return (
    <div>
      <h1>WELCOME TO COUNTDOWN</h1>
      <Page 
      acronym = {{acronym}}
      />
      <button className='vowelButton' onPress={vowelButton} onclick={addLetters} title="Learn More" color= "#841584">VOWEL</button>
      <button className="consonantButton" onPress={consonantButton} onClick={addLetters}>CONSONANT </button>
    </div>
  );
}

export default App;
