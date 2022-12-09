import React from "react";
import "./Home.css";
import home from "../../assets/home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnglesDown} from "@fortawesome/free-solid-svg-icons";
import Typed from "react-typed";

const Home = () => {

  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <h1>THE VIRTUAL BARTENDER</h1>
      <div className="home">
        <div className="home-content">
          {
              <div>
                <div className="sentence">
                  <Typed
                    strings={[
                      "Need a cocktail recipe?"
                    ]}
                    typeSpeed={50}
                    onComplete={(self) => self.cursor.remove()} 
                  /><br/>
                  <Typed
                    strings={[
                      "Search for a drink by name, or ingredient,"
                    ]}
                    typeSpeed={50}
                    startDelay={2000} 
                    onComplete={(self) => self.cursor.remove()}
                  /><br/>
                  <Typed
                    strings={[
                      "or just browse through our selection of signature cocktails",
                    ]}
                    typeSpeed={50}
                    startDelay={5000} 
                    onComplete={(self) => self.cursor.remove()}
                  /><br/>
                  <Typed
                    strings={[
                      "and we'll show you how to make it!",
                    ]}
                    typeSpeed={50} 
                    startDelay={9000} 
                  /><br/>
                </div>
              </div>
          }
          <div className="search">
            <button className="search-button"><FontAwesomeIcon icon={faAnglesDown} size="2x" style={{ marginTop: seconds % 2 === 0 ? "0em" : "0.3em", transition: "ease-in-out", transitionProperty:"paddingTop" }} /></button>
          </div>
        </div>
        <div className="home-back">
          <img src= {home} alt = "" />
        </div>
      </div>
    </div>
  );
}

export default Home;