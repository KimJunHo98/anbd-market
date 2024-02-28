# ANBD 리펙토링

이 프로젝트는 당근, 중고나라 등의 중고거래 웹&앱을 벤치마킹하여 React 프레임워크와 firebase를 이용한 SPA방식 중고 물품을 거래하는 사이트 프로젝트 입니다. 
팀프로젝트로 진행했었지만 cloudtype으로 배포한 서버의 기간이 끝나서 firebase를 활용한 서버리스 방식으로 리펙토링을 했습니다. 
firebase로 Auth 구현(로그인&로그아웃&회원가입), CURD를 구현했습니다.(업로드, 수정, 삭제).
swiper를 사용한 슬라이드 배너, styled-components로 스타일을 작성했으며, 커스텀훅, context를 사용하여 유지보수, 상태관리의 용이성을 높였습니다.
env파일에 노출이 되면 안되는 정보를 작성하여 보호를 했으며 vercel로 배포를 하여 마무리했습니다. 

미리보기 : [https://anbd-market.vercel.app/]

## 사용스택
- node.js
- react.js
- firebase
- vercel
- styled-components
- github

## 프로젝트 실행
- react를 설치합니다. `npx create-react-app 프로젝트이름`
- react-router-dom을 설치합니다. `npm install react-router-dom`
- firebase를 설치합니다. `npm install firebase`
- swiper를 설치합니다. `npm install swiper`
- dayjs를 설치합니다. `npm install dayjs`
- web-vitals를 설치합니다. `npm install web-vitals`
- fontawesome을 설치합니다. `@fortawesome/react-fontawesome`

## 기능 구현
- firebase를 사용한 실시간 CRUD기능 구현
- firebase auth의 createUserWithEmailAndPassword & signInWithEmailAndPassword & signOut 함수를 사용한 로그인 & 로그아웃 & 회원가입 기능
- firebase cloudStorage에 저장된 데이터를 firebase query를 사용한 실시간 게시글 업로드, deleteDoc & updateDoc 함수를 사용한 수정, 삭제 기능
- firebase storage를 사용하여 사진 파일의 url을 저장 & 컴포넌트에서 출력
- 각 카테고리 별로 firebase cloudStorage에 저장된 데이터를 fetch하여 해당 카테고리 상품 출력
- HashRouter를 사용한 컴포넌트 라우팅
- useAuth 커스텀훅을 생성하여 state를 관리하고 auth와 관련된 함수 작성
- useSearchContext, useStateContext 커스텀훅을 생성하여 state 및 함수를 전역으로 관리하고 여러 컴포넌트에 공유
- useFetchProducts, useFetchPickedItems, useUpload 커스텀훅을 생성하여 state 및 함수를 전역으로 관리하고 여러 컴포넌트에 공유
- async/await 함수를 사용하여 데이터를 비동기적으로 가져올 수 있게 했음
- useNavigate를 사용하여 로그인 & 회원가입 시 홈 화면으로 이동, 로그아웃 시 로그인 화면으로 이동
- useMemo를 사용하여 특정 값을 메모이제이션 하여 성능 최적화
- styled-components로 컴포넌트 기반 스타일링
- 검색기능, 찜하기 기능, 판매내역 보기, 물품등록
- firebase의 정보를 암호화 하기 위해 env파일 작성

## 프로젝트를 진행하며 생긴 문제점 & 해결과정

1. firebase의 숙련도 이슈
- 서버리스로 혼자 작업을 하려다 보니 firebase를 사용하게 되었는데 처음 사용하는 것이다 보니까 영상을 보거나 서칭을 하지 않으면 사용하기에 어려움이 있었다.
그래서 최대한 많은 영상과 서칭을 하였고 어떨 때 이런 함수를 사용하고 firebase의 storage나 cloudStorage를 왜 사용하는지 조금이나마 알게 되었고 해당 기능을 사용하기 위한 함수도 비교적 알기쉽게 되어있기 때문에 프로젝트를 진행함에 큰 어려움은 없었다.

2. 닉네임 지정하기
- 보통 회원가입을 생각하면 아이디, 비밀번호, 닉네임이나 계정이름을 지정을 하는데 firebase는 displayName라는 프로퍼티를 사용해서 닉네임을 지정해줄 수 있다. 처음에는 단순히 그냥 input의 value에서 값을 가져와서 사용하고 displayName에 값을 따로 할당하지 않아도 되겠다고 생각 했는데 닉네임 지정이 안 돼서 30분 동안 이것만 생각하니 진행이 안되었었다. 영상을 찾아보니 updateProfile라는 함수를 사용해서 사용자의 정보를 가져오고 사용자가 입력한 value를 displayName에 할당 후 업데이트를 해줘야 했다. 그래서 handleSignup 함수에 업데이트에 대한 로직을 작성하였고 만약 displayName가 빈 값이라면 랜덤한 닉네임을 가질 수 있게 해주었다.

3. state를 배열로 사용
- 데이터를 생성하는 로직까지는 작성했고 해당 데이터를 state에 담고 map함수를 사용하여 렌더링을 해주면 되는데 map함수가 함수가 아니라는 에러메세지가 계속 출력 되었다. 내가 데이터를 처리하는 로직을 잘못 작성했나 싶어서 콘솔로 확인해보니 데이터는 잘 받아왔다. 그래서 에러메세지를 잘 확인해보니 home컴포넌트에 문제가 있는 것을 알았고 코드를 처음부터 다시 천천히 살펴보니 데이터를 받아올 때 map함수를 사용하여 값들을 받아오고 그 값을 state에 넘겨주는데 state의 초기값을 빈 문자열로 지정을 했었다. 이미 배열 처리된 데이터이며 각 요소가 객체인데 빈 문자열로 받아오려니 데이터 형식이 맞지 않는 것이다. 그래서 타입에러가 발생했고 state의 초기값으로 빈 배열을 작성해주니 state에 담긴 값을 map함수로 잘 처리되는 것을 확인할 수 있었다.

## 프로젝트를 진행하며 느낀점
제일 크게 느낀 점은 일단 협업의 필요성과 중요성이였다. 팀으로 프로젝트를 진행했을 때는 백단, 프론트단의 파트가 나뉘어 있었고 또한 모르거나 막힌 부분을 물어볼 동료도 있었는데 혼자 진행을 하려다보니 막히는 부분이 생기면 해결까지 시간이 꽤 걸린다는 것이다. 보통 에러가 발생하면 내가 작성한 코드를 내가 다시 체크하는 것보다 남이 체크해주는 것이 더 빠르다는 말이 있는데 정말 그랬다. 틀린 부분을 찾는 것에 시간이 좀 걸렸고 그만큼 아직 내가 부족하는 뜻일 것이다. firebase의 숙련도 이슈보다는 기초를 조금 더 단단히 다지고 특히 협업의 중요성을 많이 느겼다. 하지만 어찌 되었든 프로젝트를 완료하면 그만큼 뿌듯하고 얻는 것은 분명히 있기 때문에 얻은 지식을 잘 활용하고 기초를 다져서 개발자로서든 퍼블리셔로서든 협업 시에 도움이 될 수 있도록 해야겠다.

