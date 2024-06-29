import { Route, Routes, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Common/Sidebar";
import MyProfile from "./MyProfile";
import MyPosts from "./MyPosts";
import Bookmarks from "./Bookmarks";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="profile-page">
        <Sidebar>
          <ul>
            <li>
              <Link to="/profile">내 프로필</Link>
            </li>
            <li>
              <Link to="/profile/posts">내 게시물</Link>
            </li>
            <li>
              <Link to="/profile/bookmarks">즐겨찾기</Link>
            </li>
          </ul>
        </Sidebar>
        <div className="profile-content">
          <Routes>
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/profile/posts" element={<MyPosts />} />
            <Route path="/profile/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
