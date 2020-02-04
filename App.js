/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {createStore} from 'redux';
import loginReducer from './src/screens/reducers/LoginReducer';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import MainNavigator from './src/navigator/MainNavigator';

const rootReducer = combineReducers({
  login:loginReducer
});
const store = createStore(rootReducer);



export default function App (){
  return(
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );

}
