/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let logo = "React Blog";
  let [title, setTitle] = useState(["다", "바", "가"]);
  let [like, count] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleSort, setTitleSort] = useState(0);
  let [inputValue, setInputValue] = useState("");
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDay();
  let [dateData, setDateData] = useState([
    `22년 6월 6일`,
    `22년 9월 13일`,
    `22년 12월 8일`,
  ]);

  return (
    // html 아니고 JSX
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button
        onClick={() => {
          setTitle([...title].sort());
        }}
      >
        가나다순 정렬
      </button>
      {title &&
        title.map(function (contents, i) {
          return (
            <div className="list" key={i}>
              <h4
                onClick={() => {
                  modal == false ? setModal(true) : setModal(false);
                  setTitleSort(i);
                }}
              >
                {contents}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...like]; //array나 object 를 다룰 때 원본은 보존하는 것이 좋음
                    copy[i] = copy[i] + 1;
                    count(copy);
                  }}
                >
                  👍
                </span>{" "}
                {like[i]}
              </h4>
              <p>{dateData[i]}</p>
              <button
                onClick={() => {
                  let copy = [...title];
                  copy.splice(i, 1);
                  setTitle(copy);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
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
          console.log(copyLike);
          setTitle(copyTitle);
          count(copyLike);
          setDateData(copyDate);
        }}
      >
        추가
      </button>

      {modal == true ? (
        <Modal
          title={title}
          setTitle={setTitle}
          titleSort={titleSort}
          color="orange"
          dateData={dateData}
        />
      ) : null}

      <Modal2 />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.title[props.titleSort]}</h4>
      <p>{props.dateData[props.titleSort]}</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.title];
          copy[0] = "여자 코트 추천";
          props.setTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    // 부모가 보낸 props를 여기서 받음
    super(props); // 부모가 보낸 props를 여기서 받음
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        안녕 {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}
export default App;
