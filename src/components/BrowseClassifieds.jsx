import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup,Button,Image,Text } from '@chakra-ui/react'
import axios from 'axios';
const BrowseClassifieds = () => {
  const [data, setData]  = useState([]);
  const [loading, setLoading] = useState(true)

    

    useEffect(async()=>{
      try {
          axios.get(`https://gold-modern-jay.cyclic.app/product`).then((res)=>{
              setData(res.data)
              setLoading(false)
              console.log(res)
          })
      } catch (error) {
          console.log("Failed to fetch data from backend")
          console.log(error)
          
      }
  }, [])

  return (
    <div>
    
    <div className='card'>
    {loading && <Text> Loading... </Text>}
    {data?.map((elem)=><Card maxW='sm'>
    <CardBody>
      <Image
        src={elem.image}
        alt={elem.name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{elem.name}</Heading>
        <Text>{elem.category}
        </Text>
        <Text>{elem.description}
        </Text>
        <Text>{elem.location}
        </Text>
        <Text>Posted On:{elem.postedAt}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          Rs.{elem.price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Edit
        </Button>
        <Button variant='solid' colorScheme='blue'>
          Delete
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>)
    }

    </div>
    </div>
  )
}

export default BrowseClassifieds