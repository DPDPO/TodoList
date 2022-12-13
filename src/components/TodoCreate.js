import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: white;

  z-index: 5;
  cursor: pointer;
  width: 70px;
  height: 70px;
  display: block;
  margin-left: 150px;
  margin-bottom: 50px;
  font-size: 50px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: black;
  border-radius: 50%;
  border: 3px solid black;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;




const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  .inButton{
    width: 50px;
    height: 30px;
    margin-top: 10px;
    margin-right:20px;
    margin-bottom: -30px;
    background-color: white;
    border-radius: 10px;
  }
  /* transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      transition: all 2s;
    `} */
`;

const InsertForm = styled.form`
  /* background: #f8f9fa; */
  padding-left: 32px;
  padding-top: 20px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);

  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    nextId.current += 1;
    setOpen(false);
    setValue('');
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="할 일을 입력 해주세요."
            />
            <button className='inButton'>입력</button>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        {/* <MdAdd /> */}+
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
