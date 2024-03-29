import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1> React Router DOM example</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/topics">Topics</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/Topics">
        <Topics></Topics>
      </Route>
      <Route path="/Contact">
        <Contact></Contact>
      </Route>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
