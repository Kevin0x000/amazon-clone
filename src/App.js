import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">

            <Checkout />
          </Route>
          <Route path="/">

            <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
