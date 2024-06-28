import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MatterComponent from "../../components/MatterComponent/MatterComponent";
import Slider from "react-slick";
import birthdayImage from "../../img/birthday1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainPage.css";
import header_icon from "../../img/header_icon.svg";
import section1_bee from "../../img/section1_bee.svg";
import section1_cloud from "../../img/section1_cloud.svg";
import section1_flower from "../../img/section1_flower.svg";
import scrap_yes from "../../img/scrap_yes.svg";
import scrap_none from "../../img/scrap_none.svg";

const MainPage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
    pauseOnHover: true,
    variableWidth: true,
  };

  const [scrapStates, setScrapStates] = useState({});

  const toggleScrap = index => {
    setScrapStates(prevStates => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };

  const createCard = (type, index) => (
    <div className="card" key={index}>
      <div className="card-image-wrapper">
        <img src={birthdayImage} alt="Sample" className="card-image" />
        <img
          src={scrapStates[index] ? scrap_yes : scrap_none}
          alt="Scrap"
          className="scrap-icon"
          onClick={() => toggleScrap(index)}
        />
      </div>
      <div className="card-content">
        <div className="card-line-1">
          <h3>{type} 구합니다!</h3>
          <span>작성자: 나비123</span>
        </div>
        <p>조회수: 1,373</p>
        <p className="card_desc">
          안녕하세요. 이번에 OO와서 함께할 {type}을(를) 찾습니다.
        </p>
        <div className="hashtags">
          <span className="hashtag">#{type}</span>
          <span
            className={`hashtag ${index % 2 === 0 ? "alternate-color" : ""}`}
          >
            #지원
          </span>
          <span className="hashtag">#버디비</span>
        </div>
      </div>
    </div>
  );

  const recruitmentCards = [...Array(7)].map((_, index) =>
    createCard("동행", index)
  );
  const fundingCards = [...Array(7)].map((_, index) =>
    createCard("펀딩", index)
  );

  const rankingKeywords = ["버디", "버디버디", "멈머", "슈머", "현머", "서머"];

  return (
    <Layout>
      <div className="main-page">
        <div className="main-section">
          <div className="left-section">
            <div>
              <div className="left_bee_icon">
                <div>
                  <h1 className="h1_buddy">BUDDY </h1>
                  <h1 className="h1_bee">BEE</h1>
                </div>
                <img
                  src={header_icon}
                  alt="Header Icon"
                  className="header-icon"
                />
              </div>

              <h2>Be My Buddy! </h2>
              <p className="left_p">
                욕망은 욕심보다 모호한 단어다. 마음 심을 쓰는 욕심과 달리 욕망의
                '망'은 바랄 망을 쓴다. 희망의 '망'과도 같은 한자다. 그래서
                욕망은 내가 무엇을 바라는지 알지 못하면 잘 모를 수밖에 없는
                영역이다.
              </p>
            </div>
            <div className="button-container">
              <button className="main-button">
                Find Buddy <p>동행구하기</p>
              </button>
              <button className="main-button">
                Find Funding <p>펀딩구하기</p>
              </button>
            </div>
          </div>
          <div className="right-section">
            <MatterComponent />
          </div>
        </div>
        <div className="text-container">
          <div className="text-up-section">
            <div className="text-section">
              <h2>Be My Buddy!</h2>
              <h1>BUDDY BEE</h1>
              <p>우리...진실게임 하자. 친해지고 싶은 버디비 있어?</p>
              <img src={section1_flower} alt="Flower" className="flower-icon" />
              <img src={section1_cloud} alt="Cloud" className="cloud-icon" />
              <img src={section1_bee} alt="Bee" className="bee-icon" />
            </div>
          </div>
        </div>
        <div className="recruitment-section">
          <h2>#동행 모집</h2>
          <Slider {...settings}>{recruitmentCards}</Slider>
        </div>
        <div className="funding-section">
          <h2>#펀딩 모집</h2>
          <Slider {...settings}>{fundingCards}</Slider>
        </div>
        <div className="ranking-section">
          <h2>현재 많은 버디비들이 보고 있어요!</h2>
          <div className="ranking-keywords">
            {rankingKeywords.map((keyword, index) => (
              <div key={index} className="keyword">
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
