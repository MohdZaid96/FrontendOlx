import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Select ,Stack} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios';

const Signup = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [location,setLocation]=useState("");
    

const handleSub=async()=>{
    try {
        axios.post(`https://gold-modern-jay.cyclic.app/user`
            
        ,{
            name, email, password,location
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
<Input placeholder='Name' size='md' type='text' onChange={(e)=>setName(e.target.value)} />
<Input placeholder='Username' size='md' type='text' onChange={(e)=>setEmail(e.target.value)} />
<Input placeholder='Password' size='md' type='text' onChange={(e)=>setPassword(e.target.value)}/>
<Input placeholder='Location' size='md' type='text' onChange={(e)=>setLocation(e.target.value)}/>
<Button colorScheme='teal' size='md'onClick={handleSub}>Login</Button>
</Stack>
</div>

)
}

export default Signup