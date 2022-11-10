import { getRandomColor } from '../script';
import { useState } from 'react';
export const day = new Date();
let timeIntervalId;
const dayToStr = day.toDateString();
const Header = () => {
  const [hourToShow, setHourToShow] = useState();
  let hours = Number(day.getHours());
  let greet;
  let color;
  let image;
  timeIntervalId = setInterval(() => {
    setHourToShow(new Date().toLocaleTimeString());
  }, 1000);
  if (hours >= 0 && hours < 7) {
    greet = 'Good night';
    color = 'lightblue';
    image = 'https://i.scdn.co/image/ab67616d0000b273b8d0c7fe7082be8a563b2618';
  }
  if (hours >= 7 && hours < 12) {
    greet = 'Good morning';
    color = 'orange';
    image =
      'https://img.freepik.com/free-vector/creative-good-morning-lettering-illustration_23-2148236489.jpg?w=2000';
  }
  if (hours >= 12 && hours < 16) {
    greet = 'Good day';
    color = 'lightcoral';
    image = 'https://i.ytimg.com/vi/svWNlwoDEPg/maxresdefault.jpg';
  }
  if (hours >= 16 && hours < 20) {
    greet = 'Good after noon';
    color = 'brown';
    image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJq2zsyDdGEGVRxV2qrmpVh0HuAj_lv-et7Q&usqp=CAU';
  }
  if (hours >= 20 && hours <= 24) {
    greet = 'Good evening';
    color = 'lightblue';
    image =
      'https://goodmorningland.com/wp-content/uploads/2020/04/Best-Good-Evening-Pictures.jpg';
  }
  return (
    <>
      <div className="row  ">
        <img
          className="m-auto"
          style={{ width: 300, height: 150 }}
          src={image}
          alt={`${greet}' image`}
          />
        <h3 style={{ color: getRandomColor() }}> {dayToStr}</h3>{' '}
          <p className='fs-6 text-danger'>{hourToShow}</p>
      
      </div>
      <h1 style={{ color: color }} className="text-center">
        {greet}
      </h1>
    </>
  );
};

export default Header;
