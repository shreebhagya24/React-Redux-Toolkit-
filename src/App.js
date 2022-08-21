import React from 'react'
import './App.css'
import {useSelector , useDispatch} from 'react-redux';


const App = () => {

  const {c} = useSelector((state) => state.custom);
  const dispatch = useDispatch();
  
  const addBtn = () =>
  {
    dispatch ({
      type : "increment",
    });

  };

  const subBtn = ()=> 
  {
    dispatch ({
    type : "decrement",

  });
  };

  const byValue = () =>
  {
    dispatch ({
      type: "incrementByValue",
      payload: 25,
    });
  };
   
  
  return (
    <div className='container'>
    <h1>This is React Redux</h1>
    <h2>{c}</h2>
    <div className='container1'>
    <button className='btnInc' onClick={addBtn}>Add</button>
    <button className='btnDec' onClick={subBtn}>Subtract</button>
    <button className='btnReset' onClick={byValue}>Increment by 25</button>
    
    </div>
    </div>
  )
}

export default App