import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUpPage from "./pages/singin-signup/SignInSignUpPage";
import { auth } from './firebase/firebase.util';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
