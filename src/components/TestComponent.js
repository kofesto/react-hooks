import {useContext} from 'react';
import { AppContext } from '../context/AppContext';

function TestComponent() {

  const {username, setUsername} = useContext(AppContext)
  function changeUser(){
    setUsername('Code master')
  }
  return (
    <div>
        <h2>Hello, {username} </h2>
        <button onClick={changeUser}>Change username</button>
    </div>
  )
}

export default TestComponent