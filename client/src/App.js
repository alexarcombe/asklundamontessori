import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Layout/CustomNavbar';
import Home from './components/Home';
import Footer from './components/Layout/Footer';

// first navbar column
import Normer from './components/Normer';
import Council from './components/Council';
import Values from './components/Values';
import Goals from './components/Goals';
import Quality from './components/Quality';
import Mission from './components/Mission';

// second navbar column
import SickCare from './components/Sickcare';
import Comments from './components/Comments';
import SpecialFood from './components/SpecialFood';
import FoodPolicy from './components/FoodPolicy';

// thirs navbar column
import Pedagogik from './components/Pedagogik';
import Departments from './components/Departments';
import Personal from './components/Personal';
import Queue from './components/Queue';
import GDPR from './components/GDPR';
import Contact from './components/Contact';

// last navbar column
import Offensive from './components/Offensive';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="filler" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/normer" component={Normer} />
        <Route exact path="/council" component={Council} />
        <Route exact path="/values" component={Values} />
        <Route exact path="/goals" component={Goals} />
        <Route exact path="/quality" component={Quality} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/sickcare" component={SickCare} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/specialfood" component={SpecialFood} />
        <Route exact path="/pedagogik" component={Pedagogik} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gdpr" component={GDPR} />
        <Route exact path="/offensive" component={Offensive} />
        <Route exact path="/foodpolicy" component={FoodPolicy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
