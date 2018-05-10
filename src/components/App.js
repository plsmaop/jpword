import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../containers/navBar';
import Home from '../containers/home';
import UserName from '../containers/userName';
import Range from '../containers/range';
import Practice from '../containers/practice';
import Score from '../containers/score';
import Unfinished from './unfinished';


const App = () => (
  <div className="container text-center">
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/username" exact component={UserName} />
      <Route path="/range" exact component={Range} />
      <Route path="/practice" exact component={Practice} />
      <Route path="/score" exact component={Score} />
      <Route component={Unfinished} />
    </Switch>
  </div>
);

export default App;
