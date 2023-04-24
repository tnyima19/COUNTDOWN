import logo from './logo.svg';
import './App.css';
import Page from "./Page";
import VowelButton from "./VowelButton";
import ConsonantButton from "./ConsonantButton";

function App() {
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
      <Page 
      acronym = {{acronym}}
      />
      <button className="vowelButton" onClick={vowelButton}></button>
      <button className="consonantButton" onClick={consonantButton}></button>
    </div>
  );
}

export default App;
