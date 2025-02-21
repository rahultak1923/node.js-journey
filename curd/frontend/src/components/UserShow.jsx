import React from 'react'
import { UserData } from '../api/web';
import { useEffect, useState } from 'react';


const UserShow = () => {
     const [data, setData] = useState([]);
    
        useEffect(() => {
            const fetchData = async () => {
               
                    const result = await UserData();
                    console.log("Fetched Data:", result);
                    
                    setData(result.user || [])
                
            };
    
            fetchData();
        }, []);
    
  return (
    <div className="App">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((user, id) => (
                        <h2 key={id}>{user.fullName} - {user.email}</h2>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
  )
}

export default UserShow
