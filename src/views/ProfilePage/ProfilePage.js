import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Common/Sidebar";
import MyProfile from "./MyProfile";
import MyPosts from "./MyPosts";
import Bookmarks from "./Bookmarks";
import "./ProfilePage.css";

const ProfilePage = () => {
  let { path, url } = useRouteMatch();

  return (
    <Layout>
      <div className="profile-page">
        <Sidebar>
          <ul>
            <li>
              <Link to={`${url}`}>My Profile</Link>
            </li>
            <li>
              <Link to={`${url}/posts`}>My Posts</Link>
            </li>
            <li>
              <Link to={`${url}/bookmarks`}>Bookmarks</Link>
            </li>
          </ul>
        </Sidebar>
        <div className="profile-content">
          <Switch>
            <Route exact path={path} component={MyProfile} />
            <Route path={`${path}/posts`} component={MyPosts} />
            <Route path={`${path}/bookmarks`} component={Bookmarks} />
          </Switch>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
