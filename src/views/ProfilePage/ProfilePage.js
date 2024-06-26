// src/views/ProfilePage/ProfilePage.js
import { Route, Routes, Link, useMatch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Common/Sidebar";
import MyProfile from "./MyProfile";
import MyPosts from "./MyPosts";
import Bookmarks from "./Bookmarks";
import "./ProfilePage.css";

const ProfilePage = () => {
  let match = useMatch("/profile/*");

  return (
    <Layout>
      <div className="profile-page">
        <Sidebar>
          <ul>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/profile/posts">My Posts</Link>
            </li>
            <li>
              <Link to="/profile/bookmarks">Bookmarks</Link>
            </li>
          </ul>
        </Sidebar>
        <div className="profile-content">
          <Routes>
            <Route exact path="/profile" element={<MyProfile />} />
            <Route path="/profile/posts" element={<MyPosts />} />
            <Route path="/profile/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
