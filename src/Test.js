import "./Test.css";
import headerIcon from "./img/header_icon.svg";
import navLogo from "./img/nav_logo.svg";
import searchLogo from "./img/search_logo.svg";
import cloudImg from "./img/cloud2.svg";
import mainTopContainerImg from "./img/main_top_container_img.png";
import flowerImg from "./img/flower.svg";
function Test() {
    return (
        <>
            <div className="header">
                <div className="header_icon_container">
                    <img src={headerIcon} className="header_icon" />
                    <img src={navLogo} className="buddy_bee" />
                </div>
                <div className="searchbar_createBtn_container">
                    <input
                        type="text"
                        className="header_searchbar searchbar_createBtn_container_item"
                    />
                    <img src={searchLogo} className="search_logo" />
                    <button className="header_createBtn searchbar_createBtn_container_item">
                        만들기
                    </button>
                    <img
                        src={mainTopContainerImg}
                        classNameName="header_createBtn_container_item"
                    />
                </div>
            </div>
            <div className="main">
                <div className="main_top_container">
                    <img
                        src={mainTopContainerImg}
                        classNameName="main_top_container_img.png"
                    ></img>
                    <div>
                        <p className="main_top_container_title">
                            용감한 버디비
                        </p>
                        <p className="main_top_container_desc">
                            안녕하세요! 저는 '용감한 버디비'입니다. 저는 항상
                            긍정적이고 활기찬 태도로 새로운 도전을 즐기며, 주변
                            사람들에게 도움이 되고자 노력합니다. 작은 일상에서도
                            행복을 찾고 나누는 것이 제 모토입니다.
                        </p>
                    </div>
                    <img src={cloudImg} className="cloud_img" />
                </div>
                <div className="main_aside_rightContainer_wrapper">
                    <div className="main_aside">
                        <p className="main_aside_word main_aside_word_profileSetting">
                            프로필 설정
                        </p>
                        <p className="main_aside_word">작성한 글</p>
                        <p className="main_aside_word">진행중인 프로젝트</p>
                        <p className="main_aside_word">좋아요</p>
                        <div className="main_aside_setting_deleteId_wrapper">
                            <p className="main_aside_setting">설정</p>
                            <p className="main_aside_deleteId">회원탈퇴</p>
                        </div>
                    </div>
                    <div className="main_right_container">
                        <div className="main_right_container_userInfo_wrapper">
                            <label>
                                닉네임
                                <input
                                    type="text"
                                    value="용감한 버디비"
                                    className="main_right_container_userInfo_input"
                                />
                            </label>
                            <label>
                                비밀번호
                                <input
                                    type="password"
                                    value="********"
                                    className="main_right_container_userInfo_input"
                                />
                            </label>
                            <label>
                                연락처
                                <input
                                    type="number"
                                    value="01012345678"
                                    className="main_right_container_userInfo_input"
                                />
                            </label>
                            <label>
                                계좌정보
                                <input
                                    type="text"
                                    value="홍* 동 KB국민은행 123456-78-900000"
                                    className="main_right_container_userInfo_input"
                                />
                            </label>
                        </div>
                        <img
                            src={mainTopContainerImg}
                            classNameName="main_right_container_profile_edit_img"
                        />
                        <div className="main_right_container_introductionLetterBox">
                            최대 50자
                            <img
                                src={flowerImg}
                                alt=""
                                className="main_right_container_flowerImg"
                            />
                        </div>
                        <div className="main_right_container_btn_wrapper">
                            <button className="main_right_container_btn main_right_container_cancelBtn">
                                취소
                            </button>
                            <button className="main_right_container_btn main_right_container_saveBtn">
                                저장
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">footer</footer>
        </>
        // <script>
        //     const main = document.querySelector(".main");
        //     main.style.background = "url(img/grid_temp2-18.svg)";
        //     main.style.backgroundSize = "cover";
        //     main.style.backgroundColor = "#c4a1ff";
        // </script>
    );
}

export default Test;
