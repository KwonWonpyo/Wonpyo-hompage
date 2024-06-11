import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>권원표</h2>
        <p><a href="mailto:commi1106@naver.com">commi1106@naver.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>저는 4년차 웹 프론트엔드 프로그래머입니다.
        현재는 오피스 솔루션 전문기업 <a href="https://www.tmax.co.kr/tmaxoffice/">TmaxGaia</a>의 연구본부에서 그래픽 관련 레이아웃 및 마우스 이벤트 제어 등을 담당하고 있습니다.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname.includes('/resume') ? <Link to="/about" className="button">자기소개 보기</Link> : <Link to="/resume" className="button">이력서 보기</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Wonpyo Kwon <Link to="/">kwonwonpyo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
