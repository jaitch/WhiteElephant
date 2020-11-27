import './App.css';
import LivingRoom from './components/LivingRoom';
import elephant from './elephant.png';
import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
} from "react-router-dom";


function App() {
  return (
      <Router className="App">
          {/*<Link to="/livingRoom">*/}
          {/*    <img src={elephant} className="logo" alt="elephant"/>*/}
          {/*</Link>*/}
    <div className="App">
      <body className="App-body">
      <Link to="/livingRoom">
          <img src={elephant} className="logo" alt="elephant"/>
      </Link>
          <Switch>
              {/*<Route path="/">*/}

              {/*</Route>*/}
              <Route path="/livingRoom">
                  <LivingRoom url="http://localhost:3000/livingRoom"/>
              </Route>
              </Switch>
      </body>
    </div>
      </Router>
  );
}


export default App;
