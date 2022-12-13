import React from 'react';
import TodoHead from './components/TodoHead'
import TodoTemplate from './components/TodoTemplate';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { createGlobalStyle } from "styled-components";
import { TodoProvider } from './TodoContext';
import { BrowserRouter , Routes , Route   } from 'react-router-dom';
import Side from './page/Side'


const GlobalStyle = createGlobalStyle`
body{
 background-color: gray;
}
`


function App() {
  return (
<>
<BrowserRouter>
  <TodoProvider>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoHead>
      <Routes>
         <Route path='/' element={<App/>} />
         <Route path='/side' element={<Side/>} />
      </Routes>
      </TodoHead>
      <TodoList/>
      <TodoCreate/>
    </TodoTemplate>
  </TodoProvider>
</BrowserRouter>
</>
  );
}
 
export default App;