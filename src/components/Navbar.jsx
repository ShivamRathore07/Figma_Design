import React from 'react'
import { Image, Flex, Spacer, Text, Heading, Button, Box } from '@chakra-ui/react'
import rabbit from "../Assets/Icon_rabbit.png";
import { GiHamburgerMenu } from 'react-icons/gi'
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'

const Navbar = () => {
	return (
		<>
			<Flex h="50px" border="1px" borderColor="#fef4ea" alignItems='center' gap='2' w={["100%","100%","100%"]} justifyContent={["space-between","space-between","space-around"]} >
				<Flex p='2' alignItems='center' >
					<Image borderRadius='full' boxSize='20px' src={rabbit} alt='Dan Abramov' />
					<Heading size='md'>Datify</Heading>
				</Flex>
				<Flex display={["none", "none", "Flex"]} ml="5vw" gap="10">
					<Text _hover={{ color: "ed9b59", borderBottom: "1px", curser: "pointer" }} >Home</Text>
					<Text _hover={{ color: "ed9b59" }} >Members</Text>
					<Text _hover={{ color: "ed9b59" }} >Blog</Text>
					<Text _hover={{ color: "ed9b59" }} >Privacy</Text>
					<Text _hover={{ color: "ed9b59" }} >Contact</Text>
				</Flex>
				<Flex display={["none", "none", "Flex"]} gap='4' alignItems='center' >
					<Text >Log in</Text>
					<Spacer />
					<Button bg='#ed9b59' color="white" borderRadius="50px" w="8vw" _hover={{ background: "#b25e21", color: "white", }}>Register</Button>
				</Flex>
				<Box  display={["block", "block", "none"]}>
					
					<Menu bg="#ed9b59">
						<MenuButton bg="#ed9b59" _hover={{ background: "#b25e21", color: "white", }} as={Button} rightIcon={<GiHamburgerMenu color="white" /> }>
						 
						</MenuButton>
						<MenuList bg="#fef4ea" >
							<MenuItem  _hover={{ color:"ed9b59" }}>Home</MenuItem>
							<MenuItem  _hover={{ color:"ed9b59" }}>Members</MenuItem>
							<MenuItem  _hover={{ color:"ed9b59" }}>Blog</MenuItem>
							<MenuItem  _hover={{ color:"ed9b59" }}>Privacy</MenuItem>
							<MenuItem  _hover={{ color:"ed9b59" }}>Contact</MenuItem>
						</MenuList>
					</Menu>
				</Box>
			</Flex>
		</>
	)
}

export default Navbar
