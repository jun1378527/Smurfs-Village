import "./MyProfile.css";
import { useState, useRef } from "react";
import editProfileImg from "../../img/edit_profile_img.svg";
import flowerImg from "../../img/flower.svg";
import cloudImg from "../../img/cloud2.svg";
import profileImg from "../../img/profile_img.svg";

const MainTop = () => {
    return (
        <div className="main_top_container">
            <img src={profileImg} className="main_top_container_img" />
            <div>
                <p className="main_top_container_title">용감한 버디비</p>
                <p className="main_top_container_desc">
                    안녕하세요! 용감한 버디비입니다. 저는 긍정적이고 활기찬
                    태도로 새로운 도전을 즐깁니다.
                </p>
            </div>
            <img src={cloudImg} className="cloud_img" />
        </div>
    );
};

const MainAside = () => {
    return (
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
    );
};

const MainRightContainer = () => {
    let nicknameRef = useRef();
    let passwordRef = useRef();
    let contactInfoRef = useRef();
    let accountInfoRef = useRef();
    let introRef = useRef();

    const [nickname, setNickname] = useState("용감한 버디비");
    const [password, setPassword] = useState(12345678);
    const [contactInfo, setContactInfo] = useState("01012345678");
    const [accountInfo, setAccountInfo] = useState(
        "홍*동 KB국민은행 123456-789"
    );
    const [intro, setIntro] = useState("");

    const onChangeNicknameValue = event => {
        setNickname(event.target.value);
    };
    const onChangePasswordValue = event => {
        setPassword(event.target.value);
    };
    const onChangeContactInfoValue = event => {
        setContactInfo(event.target.value);
    };
    const onChangeAccountValue = event => {
        setAccountInfo(event.target.value);
    };
    const onChangeIntroValue = event => {
        setIntro(event.target.value);
    };

    return (
        <div className="main_right_container">
            <div className="main_right_container_userInfo_wrapper">
                <label>
                    닉네임
                    <input
                        type="text"
                        value={nickname}
                        className="main_right_container_userInfo_input"
                        ref={nicknameRef}
                        onChange={onChangeNicknameValue}
                    />
                </label>
                <label>
                    비밀번호
                    <input
                        type="password"
                        value={password}
                        className="main_right_container_userInfo_input"
                        ref={passwordRef}
                        onChange={onChangePasswordValue}
                    />
                </label>
                <label>
                    연락처
                    <input
                        type="text"
                        value={contactInfo}
                        className="main_right_container_userInfo_input"
                        ref={contactInfoRef}
                        onChange={onChangeContactInfoValue}
                    />
                </label>
                <label>
                    계좌정보
                    <input
                        type="text"
                        value={accountInfo}
                        className="main_right_container_userInfo_input"
                        ref={accountInfoRef}
                        onChange={onChangeAccountValue}
                    />
                </label>
            </div>
            <img
                src={editProfileImg}
                className="main_right_container_profile_edit_img"
            />
            <input
                className="main_right_container_introductionLetterBox"
                placeholder="최대 50자"
                value={intro}
                ref={introRef}
                onChange={onChangeIntroValue}
            />
            <img src={flowerImg} className="main_right_container_flowerImg" />
            <form className="main_right_container_btn_wrapper">
                <button className="main_right_container_btn main_right_container_cancelBtn">
                    취소
                </button>
                <button className="main_right_container_btn main_right_container_saveBtn">
                    저장
                </button>
            </form>
        </div>
    );
};

const MyProfile = () => {
    return (
        <div className="MyProfile_container">
            <div className="main">
                <MainTop />
                <div class="main_aside_rightContainer_wrapper">
                    <MainAside />
                    <MainRightContainer />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
