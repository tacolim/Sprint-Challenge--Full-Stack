import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Accounts, AccountDetail, NewAccountForm } from './components';

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Budget</h1>
        </header>
        <Route exact path='/' component={Accounts} />
        <Route exact path='/accounts/:id' component={AccountDetail} />
        <Route exact path='/newAccountForm' component={NewAccountForm} />
      </div>
    );
}

export default App;
