import React from 'react';
import { SidebarData } from './SidebarData';
import "../App.css"
import "./Sidebar.css";


function Sidebars() {
    return (

        <div className="Sidebar">
            <h1 className="heading">Reviewpit</h1>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li className="row" key={key}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );


}
export default Sidebars;
