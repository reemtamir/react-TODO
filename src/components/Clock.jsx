import { useState } from 'react';

const Clock = () => {
  let clockIntervalId;
  const [hourToShow, setHourToShow] = useState();
  clockIntervalId = setInterval(() => {
    setHourToShow(new Date().toLocaleTimeString());
  }, 1000);
  return <p className="fs-6 text-danger">{hourToShow}</p>;
};
export default Clock;
