import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Wonpyo Kwon's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p> 제 홈페이지에 오신 여러분을 환영합니다. </p>
        </div>
      </header>
      <p>이 홈페이지는 저를 소개하기 위해 React를 활용해 만들었으며 저를 알고 싶다면 <Link to="/about">자기 소개</Link>를 확인해주세요. </p>
      <p>
        또는 {' '}
        <Link to="/resume">이력서</Link>, {' '}
        <Link to="/projects">개인 프로젝트</Link>, {' '}
        <Link to="/stats">홈페이지 통계</Link>도 확인하실 수 있습니다.
      </p>
      <p> Source available <a href="https://github.com/KwonWonpyo/Wonpyo-hompage">here</a>.</p>
    </article>
  </Main>
);

export default Index;
