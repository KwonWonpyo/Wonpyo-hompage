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
  '안녕하세요',
  '새로운 일은 언제나 환영합니다',
  '안테나 공학과 관련된 일도 가능합니다',
  '좋은 포지션을 제안해주셔서 감사합니다',
  'Hi',
  'Thanks for visiting me',
  'please feel free to contact me',
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
