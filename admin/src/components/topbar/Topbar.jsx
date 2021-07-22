import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel: Carlos Botero-Vargas</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">15</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://media-exp3.licdn.com/dms/image/C5603AQH_n0XmKn7aIg/profile-displayphoto-shrink_800_800/0/1624645036602?e=1632355200&v=beta&t=EsGAj6cdqwWjvMWAWxm84LvjlNV9rEbS9jjx-FTWcpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
