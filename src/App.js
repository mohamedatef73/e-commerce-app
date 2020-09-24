import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ContactUs from './pages/contact/ContactUs';
import nav from './pages/home/nav'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/ContactUs'component={ContactUs}/>
      </Switch>
    </div>
  );
}

export default App;
