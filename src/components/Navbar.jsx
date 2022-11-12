import React from 'react'
import { Image, Flex, Spacer, Text, Box, Heading, Button } from '@chakra-ui/react'

const Navbar = () => {
	return (
		<>
			<Flex h="50px" minWidth='max-content' alignItems='center' gap='2' justifyContent="space-around" >
				<Flex p='2' alignItems='center' >
					<Image borderRadius='full' boxSize='20px' src='https://www.linkpicture.com/q/image-1_83.png' alt='Dan Abramov' />
					<Heading size='md'>Datify</Heading>
				</Flex>
				<Flex ml="5vw" gap="10">
					<Text _hover={{ color: "ed9b59", borderBottom:"1px", curser:"pointer"}} >Home</Text>
					<Text _hover={{ color: "ed9b59"}} >Members</Text>
					<Text _hover={{ color: "ed9b59"}} >Blog</Text>
					<Text _hover={{ color: "ed9b59"}} >Privacy</Text>
					<Text _hover={{ color: "ed9b59"}} >Contact</Text>
				</Flex>
				<Flex gap='4' alignItems='center' >
					<Text >Log in</Text>
					<Spacer />
					<Button bg='#ed9b59' color="white" borderRadius="50px" w="8vw" _hover={{background: "#b25e21",color: "white",}}>Register</Button>
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
