import postapi from '../services/postapi'
import React, { useState } from 'react'

const ShowComponents = () => {
    const [user, setUser]= useState({});

    const fetchUser = async()=>{
       setUser ( await postapi.getPosts());
    }
    fetchUser();
    console.log(user);
  return (
    <div>
      fdsfds
    </div>
  )
}

export default ShowComponents
