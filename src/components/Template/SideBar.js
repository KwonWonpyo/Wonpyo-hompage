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
      <p>
        4년차 웹 프론트엔드 프로그래머입니다. <br />
        흔한 웹페이지보다는 웹앱이나 클라이언트 앱 개발, 수학적인 로직이 필요한 직무에 익숙합니다. 최근 4년간 근무하던 회사에서 퇴사하여 적극 구인중입니다.
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
