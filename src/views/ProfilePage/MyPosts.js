import React from "react";

const MyPostsRightContainer = () => {
    return (
        <div className="main_right_container">
            <div className="main_right_container_userInfo_wrapper">
                <label>
                    닉네임
                    <input
                        type="text"
                        className="main_right_container_userInfo_input"
                    />
                </label>
                <label>
                    비밀번호
                    <input
                        type="password"
                        className="main_right_container_userInfo_input"
                    />
                </label>
                <label>
                    연락처
                    <input
                        type="text"
                        className="main_right_container_userInfo_input"
                    />
                </label>
                <label>
                    계좌정보
                    <input
                        type="text"
                        className="main_right_container_userInfo_input"
                    />
                </label>
            </div>
        </div>
    );
};

const MyPosts = () => {
    return (
        <div>
            <h2>내 게시물</h2>
            <ul>
                <li>첫 번째 게시물</li>
                <li>두 번째 게시물</li>
                <li>세 번째 게시물</li>
            </ul>
            <MyPostsRightContainer />
        </div>
    );
};

export default MyPosts;
