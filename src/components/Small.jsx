import React from 'react'
import {  Flex,Text , Icon, Center } from '@chakra-ui/react'

const Small = ({ icon, text, Style, BackGround }) => {
    return (
        <>
            <Flex w={Style} bg={BackGround ? BackGround : "white"} borderRadius='10px' alignItems='center' gap='2' justifyContent="space-around" p="0.5vw 1vh 0.5vw 2vh">
                <Icon as={icon} color={BackGround ? "white" : "#ed9b59"} w={5} h={5} />
                <Center>
                    <Text color={BackGround ? "white" : "#ed9b59"} >{text}</Text>
                </Center>
            </Flex>

        </>
    )
}

export default Small
