import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/CustomNavbar';
import Footer from './components/layout/Footer';
import Normer from './components/normer/Normer';
import Council from './components/council/Council';
import Values from './components/values/Values';
import Goals from './components/goals/Goals';
import Quality from './components/quality/Quality';
import Mission from './components/mission/Mission';
import Home from './components/home/Home';
import SickCare from './components/sickcare/SickCare';
import Comments from './components/comments/Comments';
import SpecialFood from './components/specialfood/SpecialFood';
import Pedagogik from './components/pedagogik/Pedagogik';
import Departments from './components/departments/Departments';
import Personal from './components/personal/Personal';
import Queue from './components/queue/Queue';
import Contact from './components/contact/Contact';
import GDPR from './components/gdpr/GDPR';

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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
