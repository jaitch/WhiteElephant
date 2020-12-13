import './App.css';
// import LivingRoom from './components/LivingRoom';
import elephant from './elephant.png';
import React from "react";
import List from "./components/List";
import Gifts from "./components/Gifts";




function App() {
  return (
    <main className="App">
        <header className="App-header">
            <img src={elephant} className="logo" alt="elephant"/>
            <h1>A Very Merry Yenta Christmas</h1>
        </header>
      <div className="room">
        <List />
        <Gifts />
      </div>
    </main>

  );
}


export default App;
