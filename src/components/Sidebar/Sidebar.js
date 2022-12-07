import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIgloo, faHeart, faUser, faBars} from "@fortawesome/free-solid-svg-icons";
import { Icon as MaterialIcon } from "@mdi/react";
import { mdiFolderMultiplePlus } from "@mdi/js"; 
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";


const Sidebar = ({children}) => {

    const [sidebar, setSidebar] = React.useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faIgloo} size = {"2x"} />,
            name: "Home",
            path: "/"

        },
        {
            icon: <FontAwesomeIcon icon={faHeart} size = {"2x"} />,
            name: "Likes",
            path: "/likes"

        },
        {
            icon: <MaterialIcon path = {mdiFolderMultiplePlus} 
                    size = {1.3}
                  />,
            name: "Saved",
            path: "/saved"

        },
        {
            icon: <FontAwesomeIcon icon={faUser} size = {"2x"} />,
            name: "Profile",
            path: "/profile"

        }
    ];

    return (
        <div className = "sidebar-container">
            <div className = "sidebar" style={{width: sidebar ? "300px" : "55px"}}>
                <div className = "top-side">
                    <div className="logo">
                        <img id='logo' src={logo} alt='' style={{display: sidebar ? "block" : "none", padding: sidebar ? "20px" : "0"}}/>
                    </div>
                    <div className = "bars">
                        <FontAwesomeIcon icon={faBars} size = {"2x"} onClick = {showSidebar}  style={{padding: sidebar ? "20px" : "12px"}}/>
                    </div>
                </div>
                <div className = "bottom-side">
                    { 
                        menuItems.map((item, index) => (
                                <NavLink to = {item.path} key = {index} className = "link" activeclassName = "active">
                                    <div className = "menu-icon">{ item.icon }</div>
                                    <div className = "menu-name" style={{display: sidebar ? "block" : "none"}}>{ item.name }</div>
                                </NavLink>
                        )) 
                    }
                </div>
            </div>
            <main>{children}</main> 
        </div>
    );
};

export default Sidebar;