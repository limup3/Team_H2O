import React from 'react';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/dist/base.css";
import "./helpers/styles/globalStyles.css";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {loginReducer} from './pages/Account'
import Page from './Page';
import AdminPage from './AdminPage';
//rootReducer
const rootReducer = combineReducers({
  loginReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))
const App = () => (
    <BrowserRouter>
    <Provider store={store}>
      <Page />
      <AdminPage/>
    </Provider>
    </BrowserRouter>
);

export default App;
