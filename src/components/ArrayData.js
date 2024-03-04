import images from "components/ImagesImport";
import link from "components/Link";
import img1 from "img/ex/공모전_상장.png";
import img2 from "img/ex/ankkoMenu.png";
import img3 from "img/ex/ankkoDetailPage.png";

const ProjectData = [
    {
        title: "레시피 공유 및 밀키트\n판매 어플리케이션",
        info: "게시글 관련 기능과 유저간의 공유가 가능한 안드로이드 어플리케이션",
        detail_sum: "자바와 PHP로 제작한 레시피 공유 및 밀키트 판매 앱입니다.",
        detail_info:
            "앱은 자바와 MySQL을 활용해 제작했고, 앱 내 결제는 부트페이를 연동했습니다. (테스트 결제로 실제 결제가 이뤄지지 않습니다.) 관리자 페이지가 있어 회원 정보 등을 확인할 수 있습니다. 관리자 페이지(웹)는 PHP와 부트스트랩을 이용했습니다.\n사용자 페이지의 경우 회원가입, 로그인, 자동 로그인, 회원정보 수정, 게시글 작성, 게시글 수정, 게시글 삭제, 카테고리별 확인, 검색, 밀키트 구매, 제작할 밀키트 투표, 북마크, 공지사항 확인, 로그아웃이 가능합니다.",
        img: "https://source.unsplash.com/5YM26lUicfU",
        rep_img: images.cookkit,
        github: link.recipe_github,
        demo: null,
        figma: link.recipe_figma,
        colab: null,
    },
    {
        title: "레시피 공유 및 밀키트\n판매 어플리케이션 관리자 페이지",
        info: "위 어플리케이션의 관리자 페이지",
        detail_sum:
            "레시피 공유 및 밀키트 판매 어플리케이션의 관리자 페이지로, PHP와 부트스트랩을 이용해 제작했고, 데이터 시각화 자료는 파이썬을 사용했습니다.",
        detail_info:
            "회원관리, 레시피, 공지사항 작성, 공지사항 삭제, 밀키트 목록, 판매 데이터 시각화 자료 확인 등의 기능이 있습니다.",
        img: "https://source.unsplash.com/random/?black-abstract",
        rep_img: images.cookkitAdmin,
        github: link.recipe_php_github,
        demo: null,
        figma: null,
        colab: link.colab,
    },
    {
        title: "인터벌 타이머",
        info: "지정한 시간만큼 계속 반복하는 타이머",
        detail_sum: "플러터로 제작한 인터벌 타이머 앱 입니다.",
        detail_info:
            "우측 하단의 플로팅 버튼을 통해 시간을 설정할 수 있고, 설정된 시간이 계속 반복됩니다. 시간을 설정하지 않았을 경우, 재생 버튼을 눌렀을 때 경고 문구가 뜹니다. 좌측 상단의 아이콘을 누르면 기본모드와 다크모드를 설정할 수 있습니다.",
        img: "https://source.unsplash.com/random/?nebula",
        rep_img: images.timer,
        github: link.interval_github,
        demo: link.interval_demo,
        figma: null,
        colab: null,
    },
    {
        title: "투두리스트",
        info: "배경 이미지와 하단의 글귀가 새로고침 시에 랜덤으로 변경되는 투두리스트",
        detail_sum: "바닐라 자바스크립트로 제작한 투두리스트입니다.",
        detail_info:
            "현재 시각을 한 눈에 볼 수 있으며 투두리스트를 작성하기 전, 이름 혹은 닉네임을 설정할 수 있습니다. 리스트를 작성한 후에 옆의 X버튼을 누르면 해당 리스트가 삭제됩니다. 리스트는 로컬 스토리지에 저장되어 브라우저에 재접속 하거나, 새로고침을 해도 남아 있습니다. 배경 이미지와 하단의 글귀는 새로고침을 할 때마다 랜덤으로 변경됩니다.",
        img: "https://source.unsplash.com/XaVNix5mpDQ",
        rep_img: images.toDo,
        github: link.toDo_github,
        demo: link.toDo_demo,
        figma: null,
        colab: null,
    },
    {
        title: "개인 웹 포트폴리오",
        info: "현재 화면의 포트폴리오",
        detail_sum: "개인 웹 포트폴리오이며 반응형을 고려하여 작업하였습니다.",
        detail_info:
            "이미지는 모바일 화면의 크기일 때 보이는 모습으로, 웹 화면의 사이즈와 달리 상단의 메뉴가 접힌 모습으로 변경됩니다. 변경된 메뉴는 상단바 우측의 아이콘을 통해 펴고 닫을 수 있습니다.각 메뉴를 클릭하면 포트폴리오에서 해당하는 부분으로 이동합니다. 좌측의 아이콘은 화면이 어디에 있든 최상단으로 이동할 수 있습니다. 사용할 수 있는 기술들과 제작한 프로젝트들을 정리했습니다.",
        img: "https://source.unsplash.com/kCo-zEqc9IY",
        rep_img: images.cookkit,
        github: link.pf_github,
        demo: null,
        figma: null,
        colab: null,
    },
    {
        title: `서울시 실시간 날씨\n& 대기오염정보`,
        info: "공공데이터 API 사용,\n행정구별 날씨와 해당 기온에 맞는 옷 종류 제안하는 웹 페이지",
        detail_sum: [
            `공공데이터 API를 사용해`,
            <>&nbsp;</>,
            <u>서울시 실시간 날씨와 대기오염정보</u>,
            `를 확인할 수 있는 웹페이지입니다.`,
        ],
        detail_info:
            "정보는 각 행정구별로 확인할 수 있으며, 날씨와 더불어 해당 기온에 맞는 옷 종류를 추천합니다. 또한 비나 눈이 오는 경우에는 우산을, 미세먼지 수치가 높은 경우에는 마스크를 제안합니다. 미세먼지의 수치가 좋은 경우에는 아무것도 뜨지 않습니다.",
        img: "https://source.unsplash.com/ExJRuwczytw",
        rep_img: images.weather,
        github: link.weatherRec_github,
        demo: link.weatherRec_demo,
        figma: null,
        colab: null,
    },
];

const ExperienceData = [
    {
        kind: "award",
        title: "레시피 공유 및 밀키트 판매 어플리케이션",
        platform: "한국정보통신보안윤리학회",
        project: "레시피 공유 및 밀키트 판매 어플리케이션",
        backImg: "https://source.unsplash.com/1rBg5YSi00c",
        img: img1,
        date: 2022,
        contrib: "김주미, 권희선, 이다혜, 이지은(4명)",
        content:
            "한국정보통신보안윤리학회 주관 공모전 제6회 산업혁명 인재양성 공유·협업페스티발에 졸업작품 '레시피 공유 및 밀키트 판매 앱'을 출품해 캡스톤경진실적물/기타 부문에서 우수상을 수상했습니다.",
        content2: null,
        url1: null,
        url2: null,
        url3: null,
        stroke: "#8E97F0",
    },
    {
        kind: "cooperation",
        title: "앙꼬 상품 메뉴판(일러스트)",
        platform: "ankko",
        project: "메뉴판 일러스트",
        backImg: "https://source.unsplash.com/5TK1F5VfdIk",
        img: img2,
        date: 2023,
        contrib: "김주미(1명)",
        content: [
            "식품 브랜드 ",
            <b>앙꼬</b>,
            "와 작업한 메뉴판입니다. 각 메뉴의 일러스트는 실제 이미지와 근접하도록 직접 그렸으며, 각 제품에 간단한 설명을 더해 쉬운 파악이 가능하도록 제작했습니다.",
        ],
        content2: null,
        url1: null,
        url2: null,
        url3: link.menu_pdf,
        stroke: "#E0C7F2",
    },
    {
        kind: "cooperation",
        title: "앙꼬 상품 온라인몰 상세페이지",
        platform: "ankko",
        project: "온라인몰 상세페이지",
        backImg: "https://source.unsplash.com/SAQl58G-RYs",
        img: img3,
        date: 2023,
        contrib: "김주미(1명)",
        // content:
        //     "식품 브랜드 '앙꼬'와의 두 번째 작업으로, 판매 제품인 도라야끼의 상세 페이지와 제품 기한카드를 제작했습니다. 상세 페이지에는 제품의 종류 및 맛 설명, 다른 브랜드와의 차별화 등을 담았습니다. 기한카드는 상반기와 하반기 제품으로 나뉘어 있으며, 판매 제품들의 소비기한과 보관 방법을 작성했습니다. \n\n전체 이미지는 아래 링크인 사용처 혹은 피그마에서 확인하실 수 있습니다.",

        content: [
            "식품 브랜드 ",
            <b>앙꼬</b>,
            "와의 두 번째 작업으로, 판매 제품인 도라야끼의 상세 페이지와 제품 기한카드를 제작했습니다. 상세 페이지에는 제품의 종류 및 맛 설명, 다른 브랜드와의 차별화 등을 담았습니다. 기한카드는 상반기와 하반기 제품으로 나뉘어 있으며, 판매 제품들의 소비기한과 보관 방법을 작성했습니다.",
        ],
        content2: [
            "전문은 아래 링크인 ",
            <b>사용처</b>,
            " 혹은 ",
            <b>피그마</b>,
            "에서 확인하실 수 있습니다.",
        ],
        url1: link.outsource_use,
        url2: link.outsource_figma,
        url3: null,
        stroke: "#868FAD",
    },
];

export { ProjectData, ExperienceData };
