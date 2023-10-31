import React,{useReducer} from 'react'
import Navbar from '../components/Navbar'

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count:state.count +1}
        case 'decrement':
            return {count:state.count-1}
        default:
            return state
    }
}
function Test() {

  const [state, dispatch] = useReducer(reducer, {count:0,username:'kofesto'})

  function increment(){
    dispatch({type:'increment'})
  }

  return (
    <>
    <Navbar/>
    <button onClick={()=>dispatch({type:'decrement'})} >-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    <div>
        <p>{state.username}</p>
    </div>
    </>
  )
}

export default Test