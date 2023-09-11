import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Select ,Stack} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const handleSub=async()=>{
        try {
            axios.post(`https://gold-modern-jay.cyclic.app/user`,{
                email,password
            }).then((res)=>{
              
                console.log(res)
            })
        } catch (error) {
            console.log("Failed to fetch data from backend")
            console.log(error)
            
        }

    }
  return (
    <div>
    <Stack size='md' spacing={2}>
    <Input placeholder='Username' size='md' type='text' onChange={(e)=>setEmail(e.target.value)} />
    <Input placeholder='Please provide password here' size='md' type='text' onChange={(e)=>setPassword(e.target.value)}/>
    <Button colorScheme='teal' size='md'onClick={handleSub}>Login</Button>
    </Stack>
    </div>

  )
}

export default Login