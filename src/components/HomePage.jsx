import React from 'react'
import { Image, Flex, Spacer, Text, Box, Heading, Button, Icon, Input, Center } from '@chakra-ui/react'
import { CiMail, CiLocationOn } from 'react-icons/ci'
import { BsGenderMale, BsCalendarPlus } from 'react-icons/bs'

import Card from './Card'
import Small from './Small'

const HomePage = () => {
    return (
        <>
            <Flex flexWrap='wrap' border='1px' borderColor='gray.200' m="0 8vw 0 8vw" >
                <Box className='firstBox' mt="10vh" p="15px" w="50%" border='1px' borderColor='gray.200'>
                    <Text color='#ed9b59' fontWeight='800' fontSize="12px">Because you deserve better!</Text>
                    <Heading fontSize="58px">Get noticed for <Text as='span' fontSize="58px" color='#ed9b59'>who</Text> you are, <Text as='span' fontSize="58px" color='#ed9b59'>not what</Text> you look like.</Heading>

                    <Text mt="8vh" w="75%">You’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Because you deserve what dating deserves: better.</Text>

                    <Flex boxShadow='2xl' rounded='md' bg='white' mt="4vh" border='1px' borderRadius="50px" borderColor='gray.200' p="0.5vw 1vh 0.5vw 2vh" alignItems='center' gap='2' >
                        <Icon as={CiMail} w={5} h={5} />
                        <Input placeholder='Enter your email' />
                        <Button bg='#ed9b59' color="white" borderRadius="50px" w="15vw">Get Started</Button>
                    </Flex>


                    <Flex mt="12vh" gap="10">
                        <Box>
                            <Heading fontSize="50px">15k+</Heading>
                            <Text>Dates and matches made everyday</Text>
                        </Box>
                        <Box>
                            <Heading fontSize="50px" color='#b25e21'>1,456</Heading>
                            <Text>New members signup every day</Text>
                        </Box>
                        <Box>
                            <Heading fontSize="50px">1M+</Heading>
                            <Text>Members from around the world</Text>
                        </Box>
                    </Flex>


                </Box>


                <Box pos="relative" w="50%" border='1px' borderColor='gray.200'>
                    <Image pos="relative" src='https://www.linkpicture.com/q/image-1_83.png' alt='Dan Abramov' />
                    <Box pos="absolute" left="3" top="70vh" >
                        <Small icon={BsGenderMale} text="Male"  style="110" />


                    </Box>
                    <Box pos="absolute" left="8.5vw"  top="70vh" >
                        <Small icon={BsCalendarPlus} text="30-35 Years" style="150" />

                    </Box>
                    <Box pos="absolute" left="20vw" top="70vh" >
                        <Small icon={CiLocationOn} text="New York" style="120"/>

                    </Box>
                    <Box pos="absolute" left="-3" top="80vh" >
                        <Card />

                    </Box>
                    <Box pos="absolute" left="5" mt="1.5vh" top="90vh" >
                        <Card />

                    </Box>
                </Box>

            </Flex>

        </>
    )
}

export default HomePage
