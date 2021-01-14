import React from 'react';
import MainComp from '../mainComp/mainComp';

import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers/root';
import thunk from 'redux-thunk';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {

  console.log(`action with type ${action.type} was fired with payload: ${action.payload}`);
  return next(action);

}

const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

class MyToDoList extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainComp/>
      </Provider>
    )
  }
}

export default MyToDoList;
