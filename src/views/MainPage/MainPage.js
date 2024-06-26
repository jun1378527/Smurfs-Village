import Layout from "../../components/Layout/Layout";
import MatterComponent from "../../components/MatterComponent/MatterComponent";
import "./MainPage.css";

const MainPage = () => {
  return (
    <Layout>
      <div className="main-page">
        <div className="left-section">
          <h1>Buddy Bee</h1>
          <div className="box-container">
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
        <div className="right-section">
          <MatterComponent />
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
