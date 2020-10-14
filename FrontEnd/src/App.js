import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogIn from './components/auth/LogIn';
import Receipt from './components/Receipt';
import BoardRoster from "./components/RosterBoard";
import BoardAddEmployee from "./components/addEmployeeBoard";
import Booking from './components/Booking';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Profile from "./components/ProfileComponent";
import Error from "./components/Error";
library.add(faEdit);


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/booking" component={Booking} />
          <Route path="/roster" component={BoardRoster} />
          <Route path="/addemployee" component={BoardAddEmployee} />
          <Route path="/receipt" component={Receipt} />
          <Route path="/error" component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
