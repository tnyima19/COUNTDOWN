import React, {useState} from 'react';
import './App.css';
import Page from "./Page";


function App() {
  let vowels = ["A","E","I","O","U"];
  let consonant = ["B", "C", "D", "F", "G", "H", "J", "K","L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

  const [acronym, addLetters] = useState("")
  

  
  function getRandomArbitrary(left, right){
    return Math.random() * (right - left +1) + left;
  }
  function vowelButton(){
    let rand_num = getRandomArbitrary(0,4);
    let int_num = Math.floor(rand_num);
    let letter =vowels[int_num];
    console.log(int_num)
    addLetters(acronym + letter)
  }
  function consonantButton(){
    let rand_num = getRandomArbitrary(0,21);
    let int_num = Math.floor(rand_num);
    let letter = consonant[int_num];
    console.log(int_num)
    console.log(letter)
    addLetters(acronym + letter)
  }


  return (
    <div>
      <h1>Hello Countydown</h1>
      <h1>{acronym}</h1>
      <Page acronym = {{acronym}}/>
      <button onClick={vowelButton}>VowelButton</button>
      <button onClick={consonantButton}>ConsonantButton</button>
    </div>
  );
}

export default App;
