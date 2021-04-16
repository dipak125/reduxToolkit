
import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { doIncrement,doDecrement } from "./redux";


const App=()=>{
   const state=useSelector(state=>state);
   const {value}=state;
   const dispatch=useDispatch();
   return(
     <>
      <h1>counter:{value}</h1>
      <button onClick={()=>dispatch(doIncrement())}>click to increment</button>
      <button onClick={()=>dispatch(doDecrement())}>click to decrerment</button>
     </>
   )
}

export default App;