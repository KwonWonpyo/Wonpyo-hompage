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
      <p>안녕하세요. 만들기를 좋아하는 권원표입니다. 저는 <a href="http://mad.postech.ac.kr/">POSTECH MADs Lab</a>에서 석사 과정을 마치고
        현재는 오피스 솔루션 전문기업 <a href="https://www.tmax.co.kr/tmaxoffice/">TmaxOffice</a>에서 전문연구요원으로 군복무 중입니다.
        TmaxOffice에서는 웹 프론트엔드 개발 및 C++ 레이아웃 엔진 개발로 제품 개발에 참여하고 있습니다.
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
