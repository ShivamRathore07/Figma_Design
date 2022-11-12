import React from 'react'
import { Image, Flex, Spacer, Text, Box, Heading, Button } from '@chakra-ui/react'

const Navbar = () => {
	return (
		<>
			<Flex h="50px" border='1px' borderColor='gray.200' minWidth='max-content' alignItems='center' gap='2' justifyContent="space-around" >
				<Flex p='2'alignItems='center' >
				<Image borderRadius='full' boxSize='20px'  src='https://www.linkpicture.com/q/image-1_83.png'  alt='Dan Abramov'/>
					<Heading size='md'>Datify</Heading>
				</Flex>		 
				<Flex ml="5vw" gap="10">
					<Text borderBottomWidth color='#ed9b59'>Home</Text>
					<Text>Members</Text>
					<Text>Blog</Text>
					<Text>Privacy</Text>
					<Text>Contact</Text>
				</Flex>
				<Flex gap='4'  alignItems='center' >
				  <Text >Log in</Text>
					<Spacer/>
					<Button bg='#ed9b59' color="white"borderRadius="50px" w="8vw">Register</Button>
				</Flex>
			</Flex>


			<Box>

				<Box></Box>
				<Box></Box>

			</Box>

		</>
	)
}

export default Navbar
