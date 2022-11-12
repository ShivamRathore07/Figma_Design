import React from 'react'
import { Image, Flex, Text, Box, Heading, Button, Icon, Input } from '@chakra-ui/react'
import { CiMail, CiLocationOn } from 'react-icons/ci'
import { BsGenderMale, BsCalendarPlus } from 'react-icons/bs'
import moon from "../Assets/moon.png";
import star from "../Assets/star.png";



import Card from './Card'
import Small from './Small'

const HomePage = () => {
	return (
		<>
			<Flex direction={['column', 'column', 'row']} m="0 8vw 0 8vw" >
				<Box className='firstBox' mt="10vh" p="15px" w={['100%', '100%', '49%']}   >
					<Text color='#ed9b59' fontWeight='800' fontSize="12px">Because you deserve better!</Text>
					<Heading fontSize={['25px', '40px', '58px']}>Get noticed for <Text as='span' fontSize={['25px', '40px', '58px']} color='#ed9b59'>who</Text> you are, <Text as='span' fontSize={['25px', '40px', '58px']} color='#ed9b59'>not what</Text> you look like.</Heading>
					<Text mt="8vh" w="75%">You’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Because you deserve what dating deserves: better.</Text>
					<Flex w={['74vw', '55vw', '34vw']} boxShadow='2xl' bg='white' mt="3vh" borderRadius="50px" p="0.5vw 1vh 0.5vw 2vh" alignItems='center' gap='2' >
						<Icon as={CiMail} w={[5, 6, 5]} h={[5, 6, 5]} />
						<Input w={['50vw', '40vw', "22vw"]} placeholder='Enter your email' _focus={{ boxShadow: "none" }} border="none" />
						<Button bg='#ed9b59' color="white" borderRadius="50px" fontSize={['11px', '13px', '16px']} w={['30vw', '25vw', "10vw"]} _hover={{ background: "#b25e21", color: "white", }}>Get Started</Button>
					</Flex>
					<Flex direction={['column', 'column', 'row']} alignItems="center" mt="12vh" gap="10">
						<Box>
							<Heading textAlign={['center', 'center', '']} fontSize={['25px', '40px', '50px']}>15k+</Heading>
							<Text textAlign={['center', 'center', '']} >Dates and matches made everyday</Text>
						</Box>
						<Box>
							<Heading textAlign={['center', 'center', '']} fontSize={['25px', '40px', '50px']} color='#b25e21'>1,456</Heading>
							<Text textAlign={['center', 'center', '']} >New members signup every day</Text>
						</Box>
						<Box>
							<Heading textAlign={['center', 'center', '']} fontSize={['25px', '40px', '50px']}>1M+</Heading>
							<Text textAlign={['center', 'center', '']} >Members from around the world</Text>
						</Box>
					</Flex>
				</Box>


				<Box pos="relative" w={['100%', '100%', '51%']}   >
					<Image pos="relative" src='https://www.linkpicture.com/q/image-1_83.png' alt='Dan Abramov' />

					<Box pos="absolute" left={['0vw', '1.7vw', "1vw"]} top={['35vh', '52vh', "69.5vh"]}  >
						<Flex gap="1vw" mb="3vh" >
							<Small icon={BsGenderMale} text="Male" Style={["65px", "80px", "90px"]} />
							<Small icon={BsCalendarPlus} text="30-35 Years" Style={130} BackGround={`#ed9b59`} />
							<Small icon={CiLocationOn} text="New York" Style={110} />
						</Flex>

						<Flex gap="3">
							<Box  >
								<Box mb="2vh">
									<Card image="https://s3-alpha-sig.figma.com/img/ed4d/a20e/d9a2243ed97ee578510acab3dfe7b66a?Expires=1668988800&Signature=QHFKapZi2vgaX4xvBSOGRatJUInPKGta7pK8vd3nphVX95M6DVcWqMuyQvpclUujzZdPZt1pvUKFwEtAEw1PY-xIZ2SXak2Z2vZ2yJ4cSw~WLJjlbxUwTZuUDkXW2wMFD-tQOcga9l4GNUta6yGvIteDdzJKSGAZlIRI4-wi2pPcqNB1uzwerO5oXFv6sdzpIQmrg1a6tM3S5RfsjbLNHakItEFyODXozPYmM3gi01GEkdtGtCHPIwSjohefzP8hvz4rUSVqYQM9ykyn1v3czYc8w1vd1WbtVAY~7VfX5TDIV7LVoc~LTyKn8RaGgtUOUnQ-1YWAXOgp~Ml3OBUNgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
								</Box>
								<Box ml="2vw">
									<Card image="https://s3-alpha-sig.figma.com/img/54e2/e24d/2e7e8af8ca468a6227d26781fea5432b?Expires=1668988800&Signature=Sfyw9Hik06ztT-sKOMxLXAUXQK6MZeqm3ZQ1qYk3Kwezj5QBqflDPD15Kzm5SCDTohScRiQ6lYoNtK1m2bi3MY2l9ozXPQKMpkUs2GCneaBLNb7apMXvWrbavCGUdqJaD6bokBsjq35cjFD7ZxIfDmc7TkGL9X0IyXA-zaJP7jKtPIuNZ0KMf2KvPIXE35u3UwykdXVmKmwZt0m13IDVqn0Y5p2--Fh0rKhUA5WCU9zaHg2VWrobWNDBmM522XUPmemgRytLUnccFwkSugLy~W6D0GZTaTvIPGqFwSSmE4xTXwYpv7UCpGPxVqKSVhdg8woSxLIQH2WzJx20EwAC-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
								</Box>
							</Box>


							<Box position="relative" borderRadius="10px" w={['41vw', '40vw', "22vw"]} bg="#f8ebeb" >
								<Flex position="relative">
									<Image pos="absolute" h={["40px", "50px", "100px"]} left={["12vh", "15vh", "25vh"]} src={star} alt='Dan Abramov' />
									<Image pos="absolute" h={["35px", "50px", "100px"]} left={["6vh", "5vh", "8vh"]} top={["5vh", "6vh", "11vh"]} src={moon} alt='Dan Abramov' />
								</Flex>
								<Box position="absolute" left="3" top={["2vh", "2.5vh", "5vh"]}>
									<Text fontSize={["8px", "11px", "11px"]} >CARD NUMBER</Text>
									<Text fontSize={["8px", "16px", "16px"]} fontWeight="800">3829 4820 4629 5025</Text>
									<Flex w={["35vw", "35vw", "20vw"]} mt={["1vh", "2vh", "7vh"]} justifyContent="space-between" >
										<Box>
											<Text fontSize={["8px", "11px", "11px"]} >CARD HOLDER NAME</Text>
											<Text fontSize={["8px", "16px", "16px"]} fontWeight="800">Anita Rose</Text>
										</Box>
										<Box>
											<Text fontSize={["8px", "11px", "11px"]} >VAID/THUR</Text>
											<Text fontSize={["8px", "16px", "16px"]} fontWeight="800">09/17</Text>
										</Box>
									</Flex>
								</Box>
							</Box>
						</Flex>
					</Box>

				</Box>
			</Flex>
		</>
	)
}

export default HomePage
