import React from 'react';
import MainComp from '../mainComp/mainComp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers/root';

const store = createStore(rootReducer);

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
