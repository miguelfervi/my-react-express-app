// console.log("Hello World");

import { store } from './store';

// console.log(store.getState());
import React from 'react'
import ReactDOM from 'react-dom';
import { Main } from '../app/components/Main';

ReactDOM.render(
  <Main></Main>,
  document.getElementById("app")
)