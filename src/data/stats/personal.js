import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1995-11-06T16:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 5,
    link:
      'https://www.google.com/maps/d/edit?mid=1iM1YOnTvF8bCozuFfNglDUeruBhy3j0&usp=sharing',
  },
  {
    key: 'cities',
    label: 'Cities visited',
    value: 38,
    link:
      'https://www.google.com/maps/d/edit?mid=1iM1YOnTvF8bCozuFfNglDUeruBhy3j0&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Yongin-si, Gyeonggi-do, South Korea',
  },
];

export default data;
