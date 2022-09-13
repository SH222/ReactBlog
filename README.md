# React로 blog 만들기

[coding apple](https://codingapple.com/course/react-basic/) React 기초부터 쇼핑몰 프로젝트까지!  
<br/><br/>

# ▶ Blog 기능

<br/>

### 1. 좋아요 버튼

- 좋아요 카운트는 계속 변경되기 때문에 useState() 사용

```
let [like, count] = useState(0);
```

```
<span onClick={() => count(like + 1)}>👍</span> {like}
```

<br/>

### 2. 버튼 클릭 시 가나다 순서대로 정렬

- sort() 함수 사용

```
let [title, updateTitle] = useState(["다", "바", "가"]);
```

```
      <button
        onClick={() => {
          updateTitle([...title].sort());
        }}
      >
```

<br/>

### 3. 글 제목 누르면 modal 창 생성, 한 번 더 클릭 시 modal창 사라짐

- 글 제목에 onClick() 이벤트 리스터를 넣고
- 삼항연산자를 이용해 state 변경

```
  let [modal, setModal] = useState(false);

```

```
      <div className="list">
        <h4
          onClick={() => {
            modal == false ? setModal(true) : setModal(false);
          }}
        >
          {title[2]}
        </h4>
        <p>08월 23일 발행</p>
      </div>
      {modal == true ? <Modal /> : null}
```

<br/>

### 4. 좋아요 버튼 클릭 시 1씩 증가

- 글마다 다르게 카운트 되도록 해야 함

```
  let [title, setTitle] = useState(["다", "바", "가"]);
  let [like, count] = useState([0, 0, 0]);
```

```
<span
  onClick={() => {
    let copy = [...like];
    copy[i] = copy[i] + 1;
    count(copy);
  }}
>
  👍
</span>{" "}
{like[i]}
```

- [i]를 이용해 클릭한 좋아요 버튼이 어느 글에 있는 것인지 알려줌

### 5. modal창에 클릭한 글의 상세 내용 표기

- props 사용

```
      {modal == true ? (
        <Modal
          title={title}
          setTitle={setTitle}
          titleSort={titleSort}
          color="red"
        />
      ) : null}
```

```
function Modal(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.title[props.titleSort]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.title];
          copy[0] = "여자 코트 추천";
          props.setTitle(copy);
        }}
      >
        글수정
        {console.log(props.i)}
      </button>
    </div>
  );
}
```

### 6. 글 추가 기능

- input에 작성된 내용을 useState 함수를 이용하여 state에 저장
- 추가 button을 누르면 title에 저장된 input값을 넣어 새 글 생성

```
  let [inputValue, setInputValue] = useState("");
```

```
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          let copyTitle = [...title];
          let copyLike = [...like];
          let copyDate = [...dateData];
          inputValue == ""
            ? alert("내용을 작성해주세요")
            : copyTitle.unshift(inputValue);
          copyLike.unshift(0);
          copyDate.unshift(`${year}년 ${month + 1}월 ${day}일`);
          setTitle(copyTitle);
          count(copyLike);
          setDateData(copyDate);
        }}
      >
        추가
      </button>
```

### 7. 글 삭제

- 글 제목 state를 가져와서 복사본을 만든 후 splice()를 이용하여 현재 index 값에 해당하는 글 하나를 삭제
- 삭제한 값을 title state에 다시 넣음

```
      <button
        onClick={() => {
          let copy = [...title];
          copy.splice(i, 1);
          setTitle(copy);
        }}
      >
        삭제
      </button>
```

### 8. (응용) 글에 아무 것도 입력 안하고 발행 버튼 누르는 것 막기

- 유저의 의도치 않은 행동을 막아야 안전한 사이트가 됨

```
  inputValue == ""
    ? alert("내용을 작성해주세요")
    : copyTitle.unshift(inputValue);
```

- 글 추가 버튼에 input 값에 저장된 것이 없으면 alert()이 뜨도록 함.
- 삼항연산자 사용

### 9. (응용) 글을 하나 추가하면 좋아요 갯수도 개별적으로 적용되게 하기

```
  let [like, count] = useState([0, 0, 0]);
```

```
  let copyLike = [...like];
  copyLike.unshift(0);
```

- 추가 버튼 클릭 시 좋아요 state의 맨 앞에 0 추가

### 10. (응용) 날짜 데이터 활용

- 새로운 글 작성 시 작성한 날짜 자동 입력

```
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDay();
  let [dateData, setDateData] = useState([
    `22년 6월 6일`,
    `22년 9월 13일`,
    `22년 12월 8일`,
  ]);
```

```
      <button
        onClick={(e) => {
          let copyTitle = [...title];
          let copyLike = [...like];
          let copyDate = [...dateData];
          inputValue == ""
            ? alert("내용을 작성해주세요")
            : copyTitle.unshift(inputValue);
          copyLike.unshift(0);
          copyDate.unshift(`${year}년 ${month + 1}월 ${day}일`);
          console.log(copyLike);
          setTitle(copyTitle);
          count(copyLike);
          setDateData(copyDate);
        }}
      >
        추가
      </button>
```

- date()를 이용하여 현재 날짜와 시간을 받아오고
- 추가 버튼 클릭 시 배열의 맨 앞에 추가하여 출력

<br/><br/>

# ▶ 내용 정리

## React를 사용하는 이유

1. Single Page Application 만들 때 사용<br>
   -> 새로고침 없이 부드럽게 페이지 이동
2. html 재사용 편리
3. 같은 문법으로 앱 개발 가능
   <br/><br/>

## React 레이아웃 만들 때 쓰는 JSX 문법 3

1. html에 class 넣을 땐 className (class는 js의 예약어)
2. html에서 변수를 사용할 때는 {} 중괄호 (데이터 바인딩)
3. html에 style 속성 넣을 때는 style={{color:'blue', fontSize:'30px'}}
   <br/><br/>

## **useState**

- 중요한 데이터는 변수 말고 state에 (자로를 잠깐 저장할 때에는 변수)
- 변수가 있는데 굳이 state를 쓰는 이유<br>
  -> 값이 바뀌면 html이 자동으로 재랜더링 됨
- state는 언제 써야 하는가? <br>
  -> 변동 시 자동으로 html에 반영되게 만들고 싶을 때

++ Destructuring 문법

- 왼쪽과 오른쪽의 형태 맞춤

```
let [a, c] = [1, 2];
```

<br/>

## onClick

- 이벤트 리스너에는 아무 값이나 넣을 수 없고 함수를 만들어서 함수 이름을 넣어줄 수 있음
- 함수 식 자체도 가능
- onclick = {} 중괄호 안에는 **함수**를 넣어야 함

```
onClick={function(){console.log(1)}}
onClick={()=>{console.log(1)}}
```

<br/>

## state 변경하는 방법

- 이벤트 리스너 안에서 state 값으로 변경하는게 아니라 state 변경 함수를 사용해야 함

```
state변경함수(새로운state값)
```

- state는 변수 = 변수 + 1 처럼 등호로 변경하는 것이 불가능함
- 값이 바뀔 수는 있으나 html에 반영되지 않음
- 사용할 함수명의 파라미터 자리에 변경될 식을 넣어줌

```
<span onClick={() => count(like + 1)}>👍</span> {like}
```

- 함수명은 선언 시 정함

```
let [like, count] = useState(0);
```

<br/>

## Array, object

- array나 object는 원본을 보존하는 것이 좋음

```
      <button
        onClick={() => {
          let copy = [...title]; //[...]
          copy[0] = "여자 코트 추천";
          updateTitle(copy);
        }}
      >
```

<br/>

## **Component**

- 많은 div 들을 한 단어로 줄일 수 있음
- **컴포넌트 만드는 방법 3**

  1. function 만들고 (여기서 func의 위치는 메인 func 밖)
  2. return() 안에 html 담기
  3. 사용할 func에 <함수명/> 써서 사용

- 컴포넌트를 만드는 문법 (참고)

  - 변수를 먼저 선언하고 함수 만듦
  - const를 사용하는 이유 -> Modal=123;처럼 실수했을 때 에러메세지 출력

  ```
  const Modal = () => {
  	return {
  		<div></div>
  	}
  }
  ```

- return() 안에 html 병렬 기입하고 싶다면 <></>로 묶어주기
- 컴포넌트를 가져다 쓸 때는 <함수명></함수명>, <함수명/> 둘 다 가능

- 컴포넌트로 만들면 좋은 것들

  1. 반복적인 html
  2. 큰 페이지
  3. 자주 변경되는 것들

- 컴포넌트의 단점
  - state를 가져다 쓸 때 문제 생김
  - 사용할 state가 다른 function에 있어서 ㅇㅇ
- 리액트에서 대문자로 시작하는 코드가 있다면 컴포넌트라고 봐도 됨
  <br/> <br/> \***\*state는 state를 사용하는 컴포넌트들 중 최상위 컴포넌트에서 만들어야 함**
  <br/><br/>

## **동적인 ui 만드는 3step**

1. html css로 미리 디자인 완성
2. ui의 현재 상태를 state로 저장
3. state에 따라 ui가 어떻게 보일지 조건문 등으로 작성
   <br/><br/>

## if 조건문 대신 삼항연산자

- {} html 코드에서 {} 중괄호 부분은 js 코드를 적는 부분
- {} 안에는 if, for 등의 조건문을 적을 수 없음
  <br/><br/>

## map()

- 반복문 없이 html 반복 생성
- {} 중괄호 안에서는 반복문 사용 불가능하기 때문에 map() 사용

**map() 함수**

- 왼쪽 array 자료만큼 내부 코드 반복 실행
- return 오른쪽에 있는 걸 array에 담아줌
- 유용한 파라미터 두 개 사용 가능

```
{[1, 2, 3].map(function () {
        return <div>안녕</div>;
})}
```

- 실제 글 갯수만큼 html 생성하는 방법  
  -> array 자리에 글 제목 배열을 넣음
- 글 제목 제대로 출력하는 방법  
  -> 변수는 map() 앞의 배열을 갖고 있기 때문에 임의로 매개변수명 지정해서 자리에 넣어줌
- function에서 두 번째 파라미터는 반복문 돌 때마다 0부터 1씩 증가하는 정수

```
{title.map(function (contents) { // 매개변수에 i 추가
        return (
          <div className="list">
            <h4>{contents}</h4> // title[i]
            <p>08월 23일 발행</p>
          </div>
        );
})}
```

<br/><br/>

## props

- 자식이 부모의 state를 사용할 수 있음
- 자식 컴포넌트에서 부모 컴포넌트의 state를 사용해야 할 때
- 부모 컴포넌트는 자식 컴포넌트에세 state를 전송해 줄 수 있음

**props 사용법 2 step**

- 부모 -> 자식 state 전송하는 법

1. <자식컴포넌트작명={state이름}>
2. props 파라미터 등록 후 props.작명 으로 사용

```
    // 부모 컴포넌트
    // title={title}로 보냄
      {modal == true ? <Modal title={title} /> : null}

```

```
    // 자식 컴포넌트
    // {props.titlt} 로 사용
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

<br/><br/>

## input, button 태그를 이용한 새로운 글 추가

- input 값을 가져오기 위해 e.target.value 사용
- 파라미터 e는 이벤트 객체, 이벤트에 관련된 여러 기능이 담겨 있음
- e.target (이벤트가 발생한 곳)
- e.target.value (input에 입력한 값)
- 이벤트 버블링을 막고 싶다면 e.stopPropagetion() 사용

```
    <span
      onClick={(e) => { // e 추가
        e.stopPropagation(); // 추가
        let copy = [...like];
        copy[i] = copy[i] + 1;
        count(copy);
      }}
    >
      👍
    </span>{" "}
```

- 유저가 입력한 input값은 보통 변수나 state에 저장한 후 필요한 곳에 사용
- (참고) state를 변경하는 것은 처리 속도가 느려서 다음 라인부터 실행되기도 함
