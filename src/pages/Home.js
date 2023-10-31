import React,{useContext} from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/AppContext'

function Home() {

  const {username} = useContext(AppContext)
  return (
    <>
    <Navbar/>
    <div>
        <h2>This is the home page</h2>
        <h4>Hello, {username} from context</h4>
    </div>
    </>
  )
}

export default Home