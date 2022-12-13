import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: -25px;
    color: #868e96;
    font-size: 15px;
  }
  padding-top: 40px;
  padding-left: 32px;
  padding-right: 10px;
  padding-bottom: 24px;
 h4{
  font-size: 20px;
 }
 h6:after{
        content: "";
        display: block;
        width: 355px;
        border-bottom: 1px solid black;
        margin: -10px -10px;
 }
 .logo{
  margin-top: -40px;
  margin-bottom: -30px;
  margin-left: -10px;
  height: 70px;
  width: 200px;
 }
 .menu{
  margin-top: -40px;
  margin-left: 125px;
  width: 30px;
  height: 20px;

 }
  `;



function TodoHead() {

  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });



 return (
  <>
    <TodoHeadBlock>
        <Link to='/'><img className='logo' src='img/JustDo1.png' alt='로고'/></Link>
        <Link to='/side'><img className='menu' src='img/SideCompoenets.png' alt='메뉴'/></Link>
        <h4>{dateString}</h4>
        <div className="day">{dayName}</div>
      <h6></h6>
    </TodoHeadBlock>
  </>
  );
}




export default TodoHead;

