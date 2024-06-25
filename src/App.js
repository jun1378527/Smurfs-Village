import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import ProjectListPage from "./views/ProjectListPage/ProjectListPage";
import ProjectDetailPage from "./views/ProjectDetailPage/ProjectDetailPage";
import CreateFundingProjectPage from "./views/CreateProjectPage/CreateFundingProjectPage";
import CreateWithProjectPage from "./views/CreateProjectPage/CreateWithProjectPage";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/projects" exact component={ProjectListPage} />
        <Route
          path="/projects/:id"
          render={props => (
            <ProjectDetailPage {...props} projectType="funding" />
          )}
        />
        <Route
          path="/create-funding-project"
          component={CreateFundingProjectPage}
        />
        <Route path="/create-with-project" component={CreateWithProjectPage} />
      </Switch>
    </Router>
  );
};

export default App;
