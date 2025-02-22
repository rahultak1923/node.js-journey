import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CreateComponent from './components/CreateComponent'

function App() {
  // const [user, setUser] = useState([])

  // useEffect(()=>{
  //   axios.get('/user')
  //   .then((response)=>{
  //     setUser(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // },[])

  return (
    <>
      <h1 className='my-3 mx-4 mb-4'>Create a User </h1>
      <CreateComponent/>

      
    </>
  )
}

export default App
