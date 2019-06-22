import React from "react";
import "../App.css";
import configureStore from "../store";
import Posts from "../containers/Posts";
import SinglePost from "../containers/SinglePost";
import NewPost from "../containers/Newpost";
import EditPost from '../containers/Editpost';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link style={{ display: 'block', textAlign: 'center' }} to="/">Go home</Link>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:id" component={SinglePost} />
            <Route exact path="/newpost" component={NewPost} />
            <Route exact path="/edit/:id" component={EditPost} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
