import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import 'normalize.css';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact={true} path='/blog' component={BlogList}/>
            <Route exact={true} path='/blog/:id' component={BlogDetail}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
