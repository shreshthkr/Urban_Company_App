import {React, Link} from 'react';
import './Heading.modules.css'
import {Heading,Text, Box, HStack,Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
  Select,
  Stack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Image,
  Flex} from "@chakra-ui/react";
import {CiLocationOn} from "react-icons/ci"
import {ChevronRightIcon,SearchIcon} from "@chakra-ui/icons"
import WomenSalon from '../../Pages/WomenSalon';
import MenSalon from '../../Pages/MenSalon';
import { Navigate, useNavigate } from "react-router-dom";
  



const Header = () => {
  const navigate = useNavigate();
  const headingStyle={
    w:'55%',
    m:'auto',
    color:'#fff',
    fontSize:'48px',
    fontWeight:'500', 
    letterSpacing:'0.2px',
    zIndex:"2",   
  }
  
  function handleWomenSection(){

    navigate('/womensalon')

  }
  
  function handleMenSection(){

    navigate('/mensalon')

  }


  return (
    <div>
      <Box mt='100px'>
        <Text color='white' display='inline-block' fontSize='10px' zIndex='3' >Home/Delhi-Ncr</Text>
       <br />
       <br />
      <Heading style={headingStyle} >
        Home services, on demand.
      </Heading>
      <Box w='56%' h='60px' m='auto' mt='45px' display='flex' alignItems='center'>
    
       <Popover >
  <PopoverTrigger  >
    <Select placeholder='Delhi NCR' w='20%' h='60px'  backgroundColor='white'></Select>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>
        <Flex>
          <HStack>
          <Text><CiLocationOn /> Current Location </Text>
          </HStack>
           <Text>Detect Using GPS <ChevronRightIcon /></Text>
        </Flex>
      </PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        <Button colorScheme='blue'>Button</Button>
      </PopoverBody>
      <PopoverFooter>This is the footer</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>


<Stack spacing={4} dispay='flex' alignItems='center'>
  <InputGroup  width='590px' ml='20px'>
    <InputLeftElement
      pointerEvents='none'
      mt='12px'
      fontSize='1.3em'
      children={<SearchIcon color='gray.500' />}
    />
    <Input type='text' placeholder='Search for services' backgroundColor='white' h='60px' />
  </InputGroup>
 
  
</Stack>
       </Box>
       <Flex ml='480px' gap='2px' mt='15px'>
  <Text color='white' fontSize='14px' textDecoration='underline' >Women's Therapies,</Text>
  <Text color='white' fontSize='14px' textDecoration='underline' >Salon for Men</Text>
  <Text color='white' fontSize='14px' textDecoration='underline' >Men's Therapies</Text>
   <Text color='white' fontSize='14px' >etc</Text>
  </Flex>

  <Box w='816px' h='150px' m='auto' mt='80px' display='flex' alignItems='center' justifyContent='space-evenly' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;' backgroundColor='white' borderRadius='6px'>
    
   
    <div className='serviceBox' onClick={handleWomenSection}>
      <Image w='35px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png'   />
      
      <Text fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Salon For Women</Text>
    </div>
  
    <div className='serviceBox'  >
      <Image w='35px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png'   />
      
      <Text fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Hair, Skin & Nails</Text>
    </div>
    <div className='serviceBox'  >
      <Image w='35px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png'   />
      
      <Text fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Women's Therapies</Text>
    </div>
    <div className='serviceBox' onClick={handleMenSection}  >
      <Image w='35px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png'   />
      
      <Text fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Salon For Men</Text>
    </div>
    <div className='serviceBox' >
      <Image w='35px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png'   />
      
      <Text fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Men's Therapies</Text>
    </div>
  </Box>
      </Box>
    </div>
  )
}

export default Header




// display='flex' flexDirection='column' alignItems='center' justifyContent='space-evenly' cursor='pointer'