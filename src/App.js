import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/home-page.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOut from "./pages/sign-in-and-out/sign-in-and-out";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const auth = getAuth();
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user }, () => {
        console.log("state set", this.state);
      });
      console.log("test", user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignOut />} />
        </Routes>
      </div>
    );
  }
}

export default App;
