import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducers,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        serialize: true
      })
    )
  )
}
