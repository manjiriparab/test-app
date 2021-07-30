import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Home} from './component/Home';
import Login from './component/Login';
import {Header} from './component/Header';
import { Dashboard } from './component/Dashboard';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router >
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/test-app" component={Dashboard}/>
          <Route path="/test-app/home" component={Home}/>
          <Route path="/test-app/login"><Login /></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;