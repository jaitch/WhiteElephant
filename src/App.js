import './App.css';
// import LivingRoom from './components/LivingRoom';
import elephant from './elephant.png';
import React from "react";
import List from "./components/List";




function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={elephant} className="logo" alt="elephant"/>
            <h1>A Very Merry Yenta Christmas</h1>
        </header>
      <body className="room">
<List />
      </body>
    </div>

  );
}


export default App;
