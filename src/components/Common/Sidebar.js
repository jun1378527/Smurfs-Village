// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_menu">
        <Link to="/profile" className="sidebar_link">
          내 프로필
        </Link>
        <Link to="/profile/posts" className="sidebar_link">
          내 게시물
        </Link>
        <Link to="/profile/bookmarks" className="sidebar_link">
          즐겨찾기
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
