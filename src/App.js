import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/home-page.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route path="/hat">
        <HatsPage />
      </Route>
      <Route path="/">
        <Homepage />
      </Route>
    </div>
  );
}

export default App;
