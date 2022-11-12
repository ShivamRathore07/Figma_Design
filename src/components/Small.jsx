import React from 'react'
import { Image, Flex, Spacer, Text, Box, Heading, Button,Icon,Input,Center } from '@chakra-ui/react'

const Small = ({icon, text, style}) => {
  return (
    <>
    <Flex w={style}bg="white"  border='1px' borderColor='gray.200' borderRadius='10px' alignItems='center' gap='2' justifyContent="space-around" p="0.5vw 1vh 0.5vw 2vh">
     <Icon as={icon}  color="#ed9b59"  w={5} h={5} />
     <Center>
     <Text color="#ed9b59" >{text}</Text>
     </Center>
    </Flex>
      
    </>
  )
}

export default Small
