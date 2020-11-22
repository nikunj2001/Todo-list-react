import React from 'react';
import './App.css';
import Todolist from './components/todolist'
import Nav from './components/nav'
function App() { 
  return(
    <>
    <Nav/>
    
    <div className='container mt-5'>
      <Todolist/>
    </div>
    </>

)
}

export default App;
