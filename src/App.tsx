import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import GlobalStyle from './components/global-styles/GlobalStyle';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import About from './pages/about/About';
import Cart from './pages/cart/CartPage';
import './App.css';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <HelmetProvider>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products' component={Products} />
          <Route exact path='/product/:id'>
            <Product />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/about' component={About} />
        </HelmetProvider>
      </Switch>
    </div>
  );
}

export default App;
