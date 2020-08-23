import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import Customer from './components/Customer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit);




class App extends Component {



  render() {






    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/customer" component={Customer} />

            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
