import React from "react";
import styles from "css/Project.module.css";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import images from "components/ImagesImport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "css/Swiper-bundle.css";
import colors from "components/SkillsColor";
import link from "./Link";

const JsPractice = () => {
    return (
        <>
            <div id="3" className={styles.practice_wrap}>
                <Fade bottom>
                    <div className={styles.fade_column}>
                        <h2>Project</h2>
                        <div className={styles.swiper_wrap}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className={styles.mySwiper}
                            >
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img1}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img2}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img3}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img4}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img5}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img6}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img7}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img8}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img9}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img10}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img11}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img12}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img13}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img14}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img15}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img16}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={images.js_1_img17}
                                        className={styles.js_product}
                                        alt="작업물 앱 사진"
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <div className={styles.project_content}>
                                <div className={styles.content}>
                                    <div>
                                        <span>
                                            <span>
                                                레시피 공유 및 밀키트 판매 앱
                                            </span>
                                            입니다.
                                        </span>
                                    </div>
                                    <div>
                                        <b>[기술]</b>
                                        앱은 자바와 MySQL을 활용해 제작했고, 앱
                                        내 결제는 부트페이를 연동했습니다.
                                        (테스트 결제로 실제 결제가 이뤄지지
                                        않습니다.) 관리자 페이지가 있어 회원
                                        정보 등을 확인할 수 있습니다. 관리자
                                        페이지(웹)는 PHP와 부트스트랩을
                                        이용했습니다.
                                    </div>
                                    <div>
                                        <b>[기능]</b>
                                        사용자 페이지의 경우 회원가입, 로그인,
                                        자동 로그인, 회원정보 수정, 게시글 작성,
                                        게시글 수정, 게시글 삭제, 카테고리별
                                        확인, 검색, 밀키트 구매, 제작할 밀키트
                                        투표, 북마크, 공지사항 확인, 로그아웃이
                                        가능합니다.
                                    </div>
                                    <div>
                                        * 하단의 '피그마' 바로가기 버튼은 해당
                                        앱을 제작할 때 사용했던 피그마 페이지로
                                        이동합니다.
                                    </div>
                                    <div>개발인원: 4명</div>
                                </div>
                                <div className={styles.skill_shortcut}>
                                    <div className={styles.skills}>
                                        <div style={{ color: colors.Java }}>
                                            Java
                                        </div>
                                        <div style={{ color: colors.PHP }}>
                                            PHP
                                        </div>
                                        <div style={{ color: colors.MySQL }}>
                                            MySQL
                                        </div>
                                    </div>
                                    <div className={styles.shortcut}>
                                        <div
                                            onClick={() => {
                                                window.open(link.recipe_github);
                                            }}
                                        >
                                            깃허브
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </div>
                                        <div
                                            onClick={() => {
                                                window.open(link.recipe_figma);
                                            }}
                                        >
                                            피그마
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.swiper_wrap_row}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className={styles.mySwiper_row_black}
                        >
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img1}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img2}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img3}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img4}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img5}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img6}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img7}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img8}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img9}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img10}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img11}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img12}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img13}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_1_2_img14}
                                    className={styles.js_product}
                                    alt="작업물 앱 관리자페이지 사진"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.project_content_row}>
                            <div className={styles.content}>
                                <div>
                                    <span>
                                        위{" "}
                                        <span>
                                            레시피 공유 및 밀키트 판매 앱
                                        </span>
                                        의 <span>관리자 페이지</span>
                                        입니다.
                                    </span>
                                </div>
                                <div>
                                    <b>[기술 및 기능]</b>
                                    관리자 페이지는 PHP와 부트스트랩을 이용해
                                    제작했고, 데이터 시각화 자료는 파이썬을
                                    사용했습니다. 회원관리, 레시피, 공지사항
                                    작성, 공지사항 삭제, 밀키트 목록, 판매
                                    데이터 시각화 자료 확인 등의 기능이
                                    있습니다.
                                </div>
                                <div>
                                    * 하단의 '코랩' 바로가기 버튼은 판매 데이터
                                    시각화 자료를 확인할 수 있는 페이지로
                                    이동합니다.
                                </div>
                                <div>개발인원: 4명</div>
                            </div>
                            <div className={styles.skill_shortcut}>
                                <div className={styles.skills}>
                                    <div style={{ color: colors.PHP }}>PHP</div>
                                    <div style={{ color: colors.Bootstrap }}>
                                        Bootstrap
                                    </div>
                                    <div style={{ color: colors.Python }}>
                                        Python
                                    </div>
                                </div>
                                <div className={styles.shortcut}>
                                    <div
                                        onClick={() => {
                                            window.open(link.recipe_php_github);
                                        }}
                                    >
                                        깃허브
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                    <div
                                        onClick={() => {
                                            window.open(link.colab);
                                        }}
                                    >
                                        코랩
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.swiper_wrap}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className={styles.mySwiper}
                        >
                            <SwiperSlide>
                                <img
                                    src={images.js_2_img1}
                                    className={styles.js_product}
                                    alt="작업물 앱 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_2_img2}
                                    className={styles.js_product}
                                    alt="작업물 앱 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_2_img3}
                                    className={styles.js_product}
                                    alt="작업물 앱 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_2_img4}
                                    className={styles.js_product}
                                    alt="작업물 앱 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_2_img5}
                                    className={styles.js_product}
                                    alt="작업물 앱 사진"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.project_content}>
                            <div className={styles.content}>
                                <div>
                                    <span>
                                        플러터로 제작한{" "}
                                        <span>인터벌 타이머 앱</span> 입니다.
                                    </span>
                                </div>
                                <div>
                                    <b>[기능]</b>
                                    우측 하단의 플로팅 버튼을 통해 시간을 설정할
                                    수 있고, 설정된 시간이 계속 반복됩니다.
                                    시간을 설정하지 않았을 경우, 재생 버튼을
                                    눌렀을 때 경고 문구가 뜹니다. 좌측 상단의
                                    아이콘을 누르면 기본모드와 다크모드를 설정할
                                    수 있습니다.
                                </div>
                                <div>
                                    * 마지막 이미지는 데모버전으로, 웹에서의
                                    모습입니다.
                                </div>
                            </div>
                            <div className={styles.skill_shortcut}>
                                <div className={styles.skills}>
                                    <div style={{ color: colors.Flutter }}>
                                        Flutter
                                    </div>
                                    <div style={{ color: colors.Dart }}>
                                        Dart
                                    </div>
                                </div>
                                <div className={styles.shortcut}>
                                    <div
                                        onClick={() => {
                                            window.open(link.interval_github);
                                        }}
                                    >
                                        깃허브
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                    <div
                                        onClick={() => {
                                            window.open(link.interval_demo);
                                        }}
                                    >
                                        Demo
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.swiper_wrap_row}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className={styles.mySwiper_row}
                        >
                            <SwiperSlide>
                                <img
                                    src={images.js_3_img1}
                                    className={styles.js_product}
                                    alt="작업물 투두리스트 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_3_img2}
                                    className={styles.js_product}
                                    alt="작업물 투두리스트 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_3_img3}
                                    className={styles.js_product}
                                    alt="작업물 투두리스트 사진"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.project_content_row}>
                            <div className={styles.content}>
                                <div>
                                    <span>
                                        바닐라 자바스크립트로 제작한{" "}
                                        <span>투두리스트</span>입니다.
                                    </span>
                                </div>
                                <div>
                                    <b>[기능]</b>
                                    현재 시각을 한 눈에 볼 수 있으며
                                    투두리스트를 작성하기 전, 이름 혹은 닉네임을
                                    설정할 수 있습니다. 리스트를 작성한 후에
                                    옆의 X버튼을 누르면 해당 리스트가
                                    삭제됩니다. 리스트는 로컬 스토리지에
                                    저장되어 브라우저에 재접속 하거나,
                                    새로고침을 해도 남아 있습니다.
                                </div>
                                <div>
                                    * 배경 이미지와 하단의 글귀는 새로고침을 할
                                    때마다 랜덤으로 변경됩니다.
                                </div>
                            </div>
                            <div className={styles.skill_shortcut}>
                                <div className={styles.skills}>
                                    <div style={{ color: colors.JS }}>JS</div>
                                    <div style={{ color: colors.CSS }}>CSS</div>
                                </div>
                                <div className={styles.shortcut}>
                                    <div
                                        onClick={() => {
                                            window.open(link.toDo_github);
                                        }}
                                    >
                                        깃허브
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                    <div
                                        onClick={() => {
                                            window.open(link.toDo_demo);
                                        }}
                                    >
                                        Demo
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.swiper_wrap}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className={`${styles.mySwiper} ${styles.one_img}`}
                        >
                            <SwiperSlide>
                                <img
                                    src={images.js_4_img1}
                                    className={styles.js_product}
                                    alt="포트폴리오 이미지"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.project_content}>
                            <div className={styles.content}>
                                <div>
                                    <span>
                                        <span>개인 웹 포트폴리오</span>이며
                                        모바일과 PC에서 볼 수 있도록 반응형을
                                        고려하여 작업하였습니다. react-scroll,
                                        styled-components, react-reveal 등을
                                        활용했습니다.
                                    </span>
                                </div>
                                <div>
                                    <b>[기능]</b>
                                    이미지는 모바일 화면의 크기일 때 보이는
                                    모습으로, 웹 화면의 사이즈와 달리 상단의
                                    메뉴가 접힌 모습으로 변경됩니다. 변경된
                                    메뉴는 상단바 우측의 아이콘을 통해 펴고 닫을
                                    수 있습니다.각 메뉴를 클릭하면
                                    포트폴리오에서 해당하는 부분으로 이동합니다.
                                    좌측의 아이콘은 화면이 어디에 있든
                                    최상단으로 이동할 수 있습니다.
                                </div>
                                <div>
                                    * 소개글 이후로는 다뤄보고 사용할 수 있는
                                    기술들과 제작한 프로젝트들을 정리했습니다.
                                </div>
                            </div>
                            <div className={styles.skill_shortcut}>
                                <div className={styles.skills}>
                                    <div style={{ color: colors.React }}>
                                        React
                                    </div>
                                    <div style={{ color: colors.CSS }}>CSS</div>
                                </div>
                                <div className={styles.shortcut}>
                                    <div
                                        onClick={() => {
                                            window.open(link.pf_github);
                                        }}
                                    >
                                        깃허브
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.swiper_wrap_row}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className={styles.mySwiper_row_black}
                        >
                            <SwiperSlide>
                                <img
                                    src={images.js_5_img1}
                                    className={styles.js_product}
                                    alt="작업물 날씨API 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_5_img2}
                                    className={styles.js_product}
                                    alt="작업물 날씨API 사진"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={images.js_5_img3}
                                    className={styles.js_product}
                                    alt="작업물 날씨API 사진"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.project_content_row}>
                            <div className={styles.content}>
                                <div>
                                    <span>
                                        공공데이터 API를 사용해{" "}
                                        <span>
                                            서울시 실시간 날씨와 대기오염정보를
                                            확인할 수 있는 웹페이지
                                        </span>
                                        입니다.
                                    </span>
                                </div>
                                <div>
                                    <b>[기능]</b>
                                    정보는 각 행정구별로 확인할 수 있으며,
                                    날씨와 더불어 해당 기온에 맞는 옷 종류를
                                    추천합니다. 또한 비나 눈이 오는 경우에는
                                    우산을, 미세먼지 수치가 높은 경우에는
                                    마스크를 제안합니다. 미세먼지의 수치가 좋은
                                    경우에는 아무것도 뜨지 않습니다.
                                </div>
                                <div>
                                    * 하단에는 API 자료 정보의 출처와 저작권
                                    라이선스, 오류가능성을 표기했습니다.
                                </div>
                            </div>
                            <div className={styles.skill_shortcut}>
                                <div className={styles.skills}>
                                    <div style={{ color: colors.React }}>
                                        React
                                    </div>
                                    <div style={{ color: colors.JS }}>JS</div>
                                    <div style={{ color: colors.CSS }}>CSS</div>
                                </div>
                                <div className={styles.shortcut}>
                                    <div
                                        onClick={() => {
                                            window.open(link.weatherRec_github);
                                        }}
                                    >
                                        깃허브
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                    <div
                                        onClick={() => {
                                            window.open(link.weatherRec_demo);
                                        }}
                                    >
                                        Demo
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default JsPractice;
