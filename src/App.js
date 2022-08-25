/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let logo = "React Blog";
  let [title, updateTitle] = useState(["글 제목 1", "글 제목 2", "글 제목 3"]);
  let [like, count] = useState(0);

  return (
    // html 아니고 JSX
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button
        onClick={() =>
          updateTitle(["여자 코트 추천", "글 제목 2", "글 제목 3"])
        }
      >
        글 수정
      </button>
      <div className="list">
        <h4>
          {title[0]}
          <span onClick={() => count(like + 1)}>👍</span> {like}
        </h4>
        <p>08월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>08월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>08월 23일 발행</p>
      </div>
    </div>
  );
}

export default App;
