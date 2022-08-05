import React from "react";
import "./App.css";
import Header from "./Header";
import requests from "../Js/request";
import Article from "./Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Article fetchUrl={requests.fetchTopStories} fetchSideUrl={requests.fetchTopFacebookShares} title={"Most Popular"} />
    </div>
  );
}

export default App;
