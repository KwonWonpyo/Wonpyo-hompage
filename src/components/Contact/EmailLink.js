import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Validates the first half of an email address.
// const validateText = (text) => {
//   // NOTE: Passes RFC 5322 but not tested on google's standard.
//   // eslint-disable-next-line no-useless-escape
//   const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
//   return re.test(text) || text.length === 0;
// };

const messages = [
  '제 홈페이지에 방문해주셔서 감사합니다. 이 사이트가 마음에 드셨으면 좋겠습니다.',
  '새로운 일은 언제나 환영입니다. 게임 개발, 안테나 개발, 클라이언트 개발 등 다양한 직무에 도전해보고 싶습니다.',
  'Thanks for visiting me. I hope you liked my website.',
  'I am Looking for a new job. Please feel free to contact me.',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  // const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      if (loopMessage) {
        updateIter(0);
        updateChar(0);
      } else {
        // setIsActive(false);
      }
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, delay);

  return (
    <div
      className="inline-container"
      style={{ fontSize: '20pt', height: '20vh' }}
      // onMouseEnter={() => setIsActive(false)}
      // onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <p>{message}</p>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: true,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;
