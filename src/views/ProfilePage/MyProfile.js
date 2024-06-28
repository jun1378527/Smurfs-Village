const Myprofile = () => {
    return (
        <div class="pageContainer">
            <header class="header">
                <form class="form_container">
                    <img src="/img/딸기.jpg" alt="" class="header_logo" />
                    <input type="text" class="searchbar" />
                    <button class="btn btn1">만들기</button>
                    <button class="btn btn2">버튼2</button>
                </form>
            </header>
            <div class="content_container">
                <div class="title_container">
                    <div class="logo_edit_container">
                        <img
                            src="img/flower.jpg"
                            alt="imgLogo"
                            class="imgLogo"
                        />
                        <button class="editBtn">수정</button>
                    </div>
                    <div class="titleBox">
                        <h2>슈가룬123</h2>
                        <p>
                            안녕하세요! 저는 슈가룬123입니다. 저는 항상
                            긍정적이고 활기찬 태도로 새로운 도전을 즐기며, 주변
                            사람들에게 도움이 되고자 노력합니다. 작은 일상에서도
                            행복을 찾고 나누는 것이 제 모토입니다.
                        </p>
                    </div>
                </div>
                <main class="main">
                    <aisde class="aside">
                        <div class="aside_word">마이페이지</div>
                        <div class="aside_word">프로필 설정</div>
                        <div class="aside_word">진행중인 프로젝트</div>
                        <div class="aside_word">좋아요</div>
                        <div class="setting_out_container">
                            <div class="setting_word">설정</div>
                            <div class="deleteId_word">회원탈퇴</div>
                        </div>
                    </aisde>
                    <div class="rightBox">
                        <div>
                            <b>닉네임</b> 용감한 버디비
                        </div>
                        <hr />
                        <div>
                            <b>비밀번호</b> ***********
                        </div>
                        <hr />
                        <div>
                            <b>배송지</b> 서울특별시 노원구 하계4동 12-1
                        </div>
                        <hr />
                        <div>
                            <b>홍*동</b> KB국민은행 123456-78-900000
                        </div>
                        <hr />
                        <img
                            src="img/flower.jpg"
                            alt="editProfileImg"
                            class="editProfileImg"
                        />
                        <div class="introductionLetter">최대 50자</div>
                        <div class="btn_container">
                            <button class="btn cancleBtn">취소</button>
                            <button class="btn saveBtn">저장</button>
                        </div>
                    </div>
                </main>
            </div>
            <footer class="footer">footer</footer>
        </div>
    );
};

export default Myprofile;
