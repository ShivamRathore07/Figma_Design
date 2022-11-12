import React from 'react'
import { Image, Flex, Spacer, Text, Box, Heading, Button,Icon,Input,Center } from '@chakra-ui/react'

const Card = () => {
  return (
    <> 
      <Flex w="300px" bg='white'   borderRadius='10px' alignItems='center' gap='2' justifyContent="space-around" p="0.5vw 1vh 0.5vw 2vh" >
      <Image   borderRadius='10px' h="8vh" w="5vw" pos="relative" src='https://www.linkpicture.com/q/image-1_83.png'  alt='Dan Abramov'/>
      <Box>
        <Heading fontSize="12px" >Angela Taylor</Heading>
        <Text fontSize="10px">Cincinati, OH</Text>
      </Box>
      <Button bg='#ed9b59' color="white"borderRadius="10px" w="5vw">Select</Button>
    
      </Flex>
      
      
    </>
  )
}
export default Card
