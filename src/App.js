import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ContactUs from './pages/contact/ContactUs';
import About from './pages/about/About';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import Shoes from './pages/products-categories/Shoes';
import GymTools from './pages/products-categories/GymTools';
import Supplements from './pages/products-categories/Supplements';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About}/>

        <Route path='/contact'component={ContactUs}/>
        <Route path='/shopping-cart' component={ShoppingCart} />
        <Route path='/shoes' component={Shoes}/>
        <Route path='/gym' component={GymTools}/>
        <Route path='/supplements' component={Supplements}/>
      </Switch>
    </div>
  );
}

export default App;
