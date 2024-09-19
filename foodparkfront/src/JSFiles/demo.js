import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
const demo = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        async function getAllUser(){
            try{
                const user=await axios.get("http://127.0.0.1:8000/api/user/")
                console.log(user.data)
                setUser(user.data)
            }
            catch(err){
                console.log(err)
            }
        }
    })
    return (
    <div>
      
    </div>
  )
}

export default demo
