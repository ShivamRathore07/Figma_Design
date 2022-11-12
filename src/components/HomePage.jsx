import React from 'react'
import { Image, Flex, Text, Box, Heading, Button, Icon, Input, Wrap } from '@chakra-ui/react'
import { CiMail, CiLocationOn } from 'react-icons/ci'
import { BsGenderMale, BsCalendarPlus } from 'react-icons/bs'

import Card from './Card'
import Small from './Small'

const HomePage = () => {
	return (
		<>
			<Flex m="0 8vw 0 8vw" >
				<Box className='firstBox' mt="10vh" p="15px" w="48%" border='1px' borderColor='gray' >
					<Text color='#ed9b59' fontWeight='800' fontSize="12px">Because you deserve better!</Text>
					<Heading fontSize="58px">Get noticed for <Text as='span' fontSize="58px" color='#ed9b59'>who</Text> you are, <Text as='span' fontSize="58px" color='#ed9b59'>not what</Text> you look like.</Heading>
					<Text mt="8vh" w="75%">You’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Because you deserve what dating deserves: better.</Text>
					<Flex w="34vw" boxShadow='2xl' bg='white' mt="3vh" borderRadius="50px" p="0.5vw 1vh 0.5vw 2vh" alignItems='center' gap='2' >
						<Icon as={CiMail} w={5} h={5} />
						<Input w="22vw" placeholder='Enter your email' _focus={{ boxShadow: "none" }} border="none" />
						<Button bg='#ed9b59' color="white" borderRadius="50px" w="10vw" _hover={{ background: "#b25e21", color: "white", }}>Get Started</Button>
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
				<Box pos="relative" w="52%" border='1px' borderColor='gray' >
					<Image pos="relative" src='https://www.linkpicture.com/q/image-1_83.png' alt='Dan Abramov' />
					<Flex pos="absolute" left="3" top="69.5vh" border='1px' borderColor='gray'>
						<Box border='1px' borderColor='gray'>
							<Flex gap="1vw" border='1px' borderColor='gray' mb="3vh" >
								<Small icon={BsGenderMale} text="Male" Style={110} />
								<Small icon={BsCalendarPlus} text="30-35 Years" Style={150} BackGround={`#ed9b59`} />
								<Small icon={CiLocationOn} text="New York" Style={120} />
							</Flex>
							<Box border='1px' borderColor='gray'>
								<Box mb="2vh">
									<Card image="https://s3-alpha-sig.figma.com/img/ed4d/a20e/d9a2243ed97ee578510acab3dfe7b66a?Expires=1668988800&Signature=QHFKapZi2vgaX4xvBSOGRatJUInPKGta7pK8vd3nphVX95M6DVcWqMuyQvpclUujzZdPZt1pvUKFwEtAEw1PY-xIZ2SXak2Z2vZ2yJ4cSw~WLJjlbxUwTZuUDkXW2wMFD-tQOcga9l4GNUta6yGvIteDdzJKSGAZlIRI4-wi2pPcqNB1uzwerO5oXFv6sdzpIQmrg1a6tM3S5RfsjbLNHakItEFyODXozPYmM3gi01GEkdtGtCHPIwSjohefzP8hvz4rUSVqYQM9ykyn1v3czYc8w1vd1WbtVAY~7VfX5TDIV7LVoc~LTyKn8RaGgtUOUnQ-1YWAXOgp~Ml3OBUNgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
								</Box>
								<Box ml="2vw">
									<Card image="https://s3-alpha-sig.figma.com/img/54e2/e24d/2e7e8af8ca468a6227d26781fea5432b?Expires=1668988800&Signature=Sfyw9Hik06ztT-sKOMxLXAUXQK6MZeqm3ZQ1qYk3Kwezj5QBqflDPD15Kzm5SCDTohScRiQ6lYoNtK1m2bi3MY2l9ozXPQKMpkUs2GCneaBLNb7apMXvWrbavCGUdqJaD6bokBsjq35cjFD7ZxIfDmc7TkGL9X0IyXA-zaJP7jKtPIuNZ0KMf2KvPIXE35u3UwykdXVmKmwZt0m13IDVqn0Y5p2--Fh0rKhUA5WCU9zaHg2VWrobWNDBmM522XUPmemgRytLUnccFwkSugLy~W6D0GZTaTvIPGqFwSSmE4xTXwYpv7UCpGPxVqKSVhdg8woSxLIQH2WzJx20EwAC-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
								</Box>
							</Box>
						</Box>
						<Box border='1px' borderRadius="10px" bg="white" p="2vh 0 2vh 0" borderColor='gray'>

							 
						</Box>
					</Flex>
				</Box>
			</Flex>
		</>
	)
}

export default HomePage
