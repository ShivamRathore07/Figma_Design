import React from 'react'
import { Image, Flex, Text, Box, Heading, Button } from '@chakra-ui/react'

const Card = ({image}) => {
  return (
    <> 
      <Flex w="290px" bg='white'   borderRadius='10px' alignItems='center' gap='2' justifyContent="space-around" p="0.5vw 1vh 0.5vw 1vh" >
      <Image   borderRadius='10px' h="10vh" w="5.5vw" pos="relative" src={image}  alt='Dan Abramov'/>
      <Box>
        <Heading fontSize="12px" >Angela Taylor</Heading>
        <Text fontSize="10px">Cincinati, OH</Text>
      </Box>
      <Button bg='#ed9b59' color="white"borderRadius="10px" w="5vw" _hover={{background: "#b25e21",color: "white",}}>Select</Button>
    
      </Flex>
      
      
    </>
  )
}
export default Card
