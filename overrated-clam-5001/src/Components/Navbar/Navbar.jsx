import { ReactNode, useRef, useState } from 'react';
import Logo from "../../Logo/logo.png";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Select,
  option,HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  PinInput, PinInputField
} from '@chakra-ui/react';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const [num, setNum] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef =  useRef()
  const [expand, setExpand] = useState(false)
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [num3, setNum3] = useState("")
  const [num4, setNum4] = useState("")
 
    const OTP =Math.floor(Math.random() * 10000)
   const handleSubmit = () => {
   
      setTimeout(() => {
        alert (`Your One Time Password is: ${OTP}`)
      }, 1000);
      setExpand(true);
   
   }
   
   const Alert =() => {
   
    return alert('Please enter valid mobile no.')
   }

  const handleOtp =() => {
    return alert("Succesfully Logged in")
    setNum1(null)
  }
   
  
  return (
    <>
      <Box bg={useColorModeValue('trasparent')} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}
        w='90%' m='auto'
        >
          <Box h='50px' w='23%' ml='90'><Image src={Logo} w='52%' h='85%' mt='10px' /></Box>

          <Flex>
            <Stack direction={'row'} spacing={7} alignItems='center' justifyContent='space-evenly'>
              
             
              <Text color='white' fontWeight='650' cursor='pointer'>Blog</Text>
              <Text color='white' fontWeight='650' textDecoration='underline' cursor='pointer'>Register As A Professional</Text>
              <Text color='white' fontWeight='650' cursor='pointer'>Help Center</Text>
              
              
         {/* Drawer */}
         <Button ref={btnRef} colorScheme='transparent' onClick={onOpen} bg='transparent'>
       Login/Sign Up
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
       size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Please login to continue</DrawerHeader>

          <DrawerBody mt='30px'>
            <HStack gap={0}>
            <Select w='28%' h='50px'  fontSize='18px' fontWeight='600'>
              <option >+91</option>
              <option>+1</option>
              <option>+65</option>
              <option>+966</option>
              <option>+971</option>
            </Select>
            <NumberInput  h='50px'  >
  <NumberInputField h='50px' w='100%' fontSize='18px'  value={num} fontWeight='600' onChange={(e) => setNum(e.target.value)}/>
  <NumberInputStepper>
   
   </NumberInputStepper>
   </NumberInput>
            </HStack>
            <br />
            <Button w='100%' h='50px' bgColor='rgb(33,33,33)' color='white' onClick={ num.length===10 ?handleSubmit :Alert }>Continue</Button>
             <br />
             <br />  
             <br />  
             <br />  
             <HStack>
             {expand ?
              <Box>
  <PinInput >
    <PinInputField onChange={(e) => setNum1(e.target.value)}/>
    <PinInputField onChange={(e) => setNum2(e.target.value)}/>
    <PinInputField onChange={(e) => setNum3(e.target.value)}/>
    <PinInputField onChange={(e) => setNum4(e.target.value)}/>
  </PinInput>
  <br />
  <br />
  <Button onClick={handleOtp} w='100%' h='50px' bgColor='rgb(33,33,33)' color='white' >Submit OTP</Button>
  </Box>
  : ""  }
</HStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}