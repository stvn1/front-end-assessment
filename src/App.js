import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//pages
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import Payment from './pages/Payment'

//test
import Burger from './components/HamburgerMenu'




//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} ></Route>
          <Route exact path='/pricing' component={PricingPage} ></Route>
          <Route exact path='/payment/:plan' component={Payment} ></Route>
          
        </Switch>
      </Router>
  


    </div>
  );
}

export default App;
