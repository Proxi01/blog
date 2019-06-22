import React from 'react';
import '../App.css';
import configureStore from '../store';
import Posts from '../containers/Posts';
import SinglePost from '../containers/SinglePost'
import NewPost from '../containers/Newpost'

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';


const store = configureStore();


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/posts/:id' component={SinglePost} />
            <Route exact path='/newpost' component={NewPost} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
