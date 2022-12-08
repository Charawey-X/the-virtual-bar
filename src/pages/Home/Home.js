import React from "react";
import "./Home.css";
import home from "../../assets/home.jpg";


class Home extends React.Component {
  render() {

    const content = "";

    return (
      <div>
         <h1>THE VIRTUAL BARTENDER</h1>
        <div className="home">
          <div className="home-content">
            {content}
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