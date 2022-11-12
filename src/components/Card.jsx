import React from 'react'
import { Image, Flex, Text, Box, Heading, Button } from '@chakra-ui/react'

const Card = ({image}) => {
  return (
    <> 
      <Flex w={["140px","200px", "290px"]} bg='white'   borderRadius='10px' alignItems='center' gap='2' justifyContent="space-around" p="0.5vw 1vh 0.5vw 1vh" >
      <Image   borderRadius='10px' h={["4vh","7vh","10vh"]}w={["5vw","7vw","5.5vw"]} pos="relative" src={image}  alt='Dan Abramov'/>
      <Box>
        <Heading fontSize={["8px","10px","12px"]} >Angela Taylor</Heading>
        <Text fontSize={["6px","8px","10px"]}>Cincinati, OH</Text>
      </Box>
      <Button bg='#ed9b59' color="white"borderRadius="10px" h={["2vh","4vh","5vh"]} fontSize={["5px","12px","16px"]} w={["2.5vw","4.5vw","5vw"]} _hover={{background: "#b25e21",color: "white",}}>Select</Button>
    
      </Flex>
      
      
    </>
  )
}
export default Card
