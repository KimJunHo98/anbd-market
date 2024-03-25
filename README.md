# ANBD 리펙토링

이 프로젝트는 당근, 중고나라 등의 중고거래 웹&앱을 벤치마킹하여 React 프레임워크와 firebase를 사용하여 REST API를 설계한 중고물품 거래 사이트입니다.
팀프로젝트로 벡과 프론트를 나눠서 진행했고 node.js의 express로 서버를 구성하고 cloudtype으로 서버를 배포했는데 기간이 끝나서 firebase를 활용한 서버리스 방식으로 리펙토링을 했습니다.
firebase로 Auth 구현(로그인&로그아웃&회원가입), CURD를 구현했습니다.(업로드, 수정, 삭제).
swiper를 사용한 슬라이드 배너, styled-components로 스타일을 작성했으며, 커스텀훅, context API를 사용하여 전역상태관리를 하여 유지보수, 상태관리의 용이성을 높였습니다.
env파일에 노출이 되면 안되는 정보를 작성하여 보호를 했으며 vercel로 배포를 하여 마무리했습니다.

미리보기 : [https://anbd-market.vercel.app/]

## 사용스택

-   node.js(npm)
-   firebase
-   react.js
-   react-icons
-   swiper
-   styled-components
-   vercel
-   github

## 개발환경

-   dayjs: "^1.11.10",
-   firebase: "^10.1.0",
-   react: "^18.2.0",
-   react-dom: "^18.2.0",
-   react-icons: "^4.12.0",
-   react-router-dom: "^6.21.1",
-   react-scripts: "5.0.1",
-   styled-components: "^6.1.6",
-   styled-reset: "^4.5.2",
-   swiper: "^10.0.0",
-   web-vitals: "^2.1."4

## 구현 목록

-   MainPage

    -   슬라이드 배너
    -   홈페이지

-   SubPage

    -   전체상품 페이지
    -   업로드 페이지
    -   로그인&회원가입 페이지
    -   카테고리 페이지
    -   상품상세 페이지
    -   판매내역 페이지
    -   찜목록 페이지
    -   프로필 페이지

✔ 업로드시 카테고리별 메인페이지에 상품 분할 출력 <br>
✔ 업로드시 업로드시간, 지난시간 구현 <br>
✔ 배너 자동 슬라이드<br>
✔ 솔드아웃 처리<br>
✔ 검색 필터링 구현<br>
✔ 컴포넌트에 따라 검색 기능 & 헤더 UI 구성 다르게 구현<br>
✔ 찜하기 기능 & 카운트 구현<br>
✔ 카테고리 & 상세카테고리 별 필터링 구현<br>
✔ 로그인 & 회원가입 기능 구현<br>
✔ 슬라이드 사이드 메뉴<br>

## 기능 구현

-   firebase를 사용한 실시간 CRUD기능 구현
-   firebase auth의 createUserWithEmailAndPassword & signInWithEmailAndPassword & signOut 함수를 사용한 로그인 & 로그아웃 & 회원가입 기능
-   firebase cloudStorage에 저장된 데이터를 firebase query를 사용한 실시간 게시글 업로드, deleteDoc & updateDoc 함수를 사용한 수정, 삭제 기능
-   firebase storage를 사용하여 사진 파일의 url을 저장 & 컴포넌트에서 출력
-   각 카테고리 별로 firebase cloudStorage에 저장된 데이터를 fetch하여 해당 카테고리 상품 출력
-   BrowserRouter를 사용한 컴포넌트 라우팅
-   useAuth 커스텀훅을 생성하여 state를 관리하고 auth와 관련된 함수 작성
-   useSearchContext, useStateContext 커스텀훅을 생성하여 state 및 함수를 전역으로 관리하고 여러 컴포넌트에 공유
-   useFetchProducts, useFetchPickedItems, useUpload 커스텀훅을 생성하여 state 및 함수를 전역으로 관리하고 여러 컴포넌트에 공유
-   async/await 함수를 사용하여 데이터를 비동기적으로 가져올 수 있게 했음
-   useNavigate를 사용하여 로그인 & 회원가입 시 홈 화면으로 이동, 로그아웃 시 로그인 화면으로 이동
-   useMemo를 사용하여 특정 값을 메모이제이션 하여 성능 최적화
-   styled-components로 컴포넌트 기반 스타일링
-   검색기능, 찜하기 기능, 판매내역 보기, 물품등록
-   firebase의 정보를 암호화 하기 위해 env파일 작성

## 프로젝트를 진행하며 느낀점

제일 크게 느낀 점은 일단 협업의 필요성과 중요성이였다. 팀으로 프로젝트를 진행했을 때는 벡단, 프론트단의 파트가 나뉘어 있었고 또한 모르거나 막힌 부분을 물어볼 팀원도 있었는데 혼자 진행을 하려다보니 막히는 부분이 생기면 해결까지 시간이 꽤 걸린다는 것이다. 보통 에러가 발생하면 내가 작성한 코드를 내가 다시 체크하는 것보다 남이 체크해주는 것이 더 빠르다는 말이 있는데 정말 그랬다. 틀린 부분을 찾는 것에 시간이 좀 걸렸고 그만큼 아직 내가 부족하는 뜻일 것이다. 기초를 조금 더 단단히 다지고 특히 협업의 중요성을 많이 느겼다. 하지만 어찌 되었든 프로젝트를 완료하면 그만큼 뿌듯하고 얻는 것은 분명히 있기 때문에 얻은 지식을 잘 활용하고 기본기를 탄탄히 하여 팀원들과 효율적인 소통 & 협업을 할 수 있도록 노력해야겠다.
