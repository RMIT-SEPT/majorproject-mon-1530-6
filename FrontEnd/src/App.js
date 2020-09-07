import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCustomerComponent from './components/ListCustomerComponent';
import Register from './components/auth/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogIn from './components/auth/LogIn';
import Booking from './components/Booking';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit);


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Booking}></Route>
          <Route exact path="/customer" component={ListCustomerComponent}></Route>
          <Route exact path="/register" component={Register}></Route>

          <Route exact path="/login" component={LogIn} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
