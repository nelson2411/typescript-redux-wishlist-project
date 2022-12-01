import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './pages/products/Products';
import GlobalStyle from './components/global-styles/GlobalStyle';
import Home from './pages/home/Home';
import './App.css';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products' component={Products} />
      </Switch>
    </div>
  );
}

export default App;
