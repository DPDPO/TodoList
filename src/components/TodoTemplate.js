import React from "react";
import styled from "styled-components";

const Todolist = styled.div`
  width: 400px;
  height: 600px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;

`


// const TodoTem = () => {
//   return <Todolist></Todolist>
// }

function TodoTemplate({ children }) {
    
    return (
      <>
        <Todolist>{children}</Todolist>
      </>
    )
  }

export default TodoTemplate

{/* <Link to='/'><img className='logo' src='img/JustDo1.png' alt='로고'/></Link>
<Link to='/side'><img className='menu' src='img/SideCompoenets.png' alt='메뉴'/></Link>  */}