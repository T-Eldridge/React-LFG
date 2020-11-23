import React from 'react';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Navigation from './containers/navigation'
import SearchForm from './components/searchForm'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Navigation />
        <SearchForm/>
        <Router />
        </BrowserRouter>
      </Provider>
   
    </div>
  );
}

export default App;
