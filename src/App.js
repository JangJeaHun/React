import React, { useState } from 'react';
import logo from "./logo.svg";

import "./App.css";

function App() {

  let [글제목1,글제목변경1] = useState('남자 코트 추천');
  let [글제목2,글제목변경2] = useState('베리 코트 추천');
  let [글제목3,글제목변경3] = useState('베리 간식 추천');

  let posts = '강남 고기 맛집';
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      
      <div className="list">
        <h3>{ 글제목1 }</h3>
        <p>2월 21일 입니다.</p>
        <hr></hr>
      </div>

      <div className="list">
        <h3>{ 글제목2 }</h3>
        <p>2월 22일 입니다.</p>
        <hr></hr>
      </div>

      <div className="list">
        <h3>{ 글제목3 }</h3>
        <p>2월 23일 입니다.</p>
        <hr></hr>
      </div>


    </div>
  );
}

export default App;
