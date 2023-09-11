import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Select ,Stack} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios';

const PostClassifieds = () => {
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("");
    const [image,setImage]=useState("");
    const [location,setLocation]=useState("");
    const [postedAt,setPostedAt]=useState("");
    const [price,setPrice]=useState("");
    
    const  handleSub=()=>{
        const obj={
            name,description,category,image,location,postedAt,price
        }
        try {
          axios.post(`https://gold-modern-jay.cyclic.app/product`,{
            obj
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
    <Stack size='md' spacing={4}>
    <Input placeholder='Name' size='md' type='text' onChange={(e)=>setName(e.target.value)} />
    <Input placeholder='Description' size='md' type='text' onChange={(e)=>setDescription(e.target.value)}/>
    <Select placeholder='Category' onChange={(e)=>setCategory(e.target.value)}>
        <option value='Clothing'>Clothing</option>
        <option value='Electronics'>Electronics</option>
        <option value='Furniture'>Furniture</option>
        <option value='Other'>Other</option>
    </Select>
    <Input placeholder='Image URL' size='md' type='text' onChange={(e)=>setImage(e.target.value)}/>
    <Input placeholder='Location' size='md' type='text' onChange={(e)=>setLocation(e.target.value)}/>
    <Input placeholder='Date' size='md' type='date'onChange={(e)=>setPostedAt(e.target.value)}/>
    <Input placeholder='Price' size='md' type='text'onChange={(e)=>setPrice(e.target.value)}/>
    <Button colorScheme='teal' size='md'onClick={handleSub}>Button</Button>
    </Stack>
    
    </div>
  )
}

export default PostClassifieds

