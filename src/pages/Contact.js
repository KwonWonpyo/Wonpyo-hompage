import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael D'Angelo via email @ michael.l.dangelo@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>전문연구요원 복무중이지만 좋은 포지션을 제안해주셔서 언제나 감사합니다</p>
        {/* <EmailLink /> */}
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
