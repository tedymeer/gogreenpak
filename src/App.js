import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import AdoptPage from './AdoptPage';
import NavBar from './NavBar'
import {Switch,Route} from "react-router-dom";




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
        </Switch>
     
     
    </div>
  );
}

export default App;
