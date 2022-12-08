import React from "react";
import "./Home.css";
import home from "../../assets/home.jpg";


class Home extends React.Component {
  render() {

    const content = "Need a cocktail recipe?\nSearch for a drink by name, or ingredient,\nand we'll show you what you need to make it.\nYou can make signature cocktails right from your home,\n and save your favorites for later.";

    return (
      <div>
         <h1>THE VIRTUAL BARTENDER</h1>
        <div className="home">
          <div className="home-content">
            {
              content.split("\n").map((item, key) => (
                <div key={key}>
                  <div className="sentence">{item}</div>
                </div>
              ))
            }
            <div className="search">
            </div>
          </div>
          <div className="home-back">
            <img src= {home} alt = "" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;