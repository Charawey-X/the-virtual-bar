import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends React.Component {
  render() {
    return (
        <Router>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/likes" element={<Likes/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/saved" element={<Saved/>} />
                </Routes>
            </Sidebar>
        </Router>
    );
  }
}


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);