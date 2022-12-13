import React from "react";
import styled from "styled-components";


const Side = () => {

  const Contain = styled.div`
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
  `

  return (
    <Contain>
     <img className='logo' src='img/JustDo1.png' alt='로고'/>
     <img className='menu' src='img/SideCompoenets.png' alt='메뉴'/>
     <img src="img/mypage.png" alt="my"> 마이 페이지</img>
    </Contain>
  )
}


export default Side;