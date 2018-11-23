import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import articleStore from './stores/articleStore'
import 'normalize.css';
import './App.css';

const store = {
  articleStore,
}
class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <div className="App">
          <Header />
          <Router>
            <Switch>
              <Route exact={true} path='/blog' component={BlogList}/>
              <Route exact={true} path='/blog/:id' component={BlogDetail}/>
            </Switch>
          </Router>
        </div>
      </Provider>
      
    );
  }
}

export default App;
