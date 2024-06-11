import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  });

  return (
    <Main
      title="About"
      description="Learn about Wonpyo Kwon"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/about">About Me</Link></h2>
            <p>저를 간단하게 소개합니다.</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default About;
