import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import AdoptPage from './AdoptPage';
import NavBar from './NavBar'
import {Switch,Route} from "react-router-dom";
import Gallerypics from './Gallerypics';
import React from 'react';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
     
      <Switch>
         <Route exact path="/">
          <HomePage />
          </Route>
          <Route exact path="/home">
          <HomePage />
          </Route>
          <Route exact path="/adopt">
          <AdoptPage />
          </Route>
          <Route exact path="/gallery">
          <Gallerypics />
          </Route>
          <Route component={HomePage}/>
        </Switch>
     
      <div className="foot">
     <Footer />
     </div>
    </div>
  );
}

export default App;
