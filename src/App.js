import './App.css';


import NavBar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList exact path="/" countries={countries} />
          <Router>
            <Route
              path="/countries/:countryCode" component={CountryDetails}
            />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
