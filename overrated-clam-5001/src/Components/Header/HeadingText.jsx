import {React} from 'react';
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
  Portal,
  Stack,
  InputGroup,
  InputLeftElement,
  Image,
  Flex,
  SimpleGrid} from "@chakra-ui/react";
import {CiLocationOn} from "react-icons/ci"
import {ChevronRightIcon,SearchIcon} from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom";
 import {AiFillCaretDown} from "react-icons/ai" 
const boxStyle ={

}


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
      <Box w='100%' h='60px' m='auto' mt='45px' display='flex' alignItems='center' justifyContent='center'>
    
       <Popover >
  <PopoverTrigger  >
    <Box  w='150px' h='60px'  backgroundColor='white' display='flex' alignItems='center' justifyContent='space-evenly'  borderRadius='6px'>
      <Image w='25%' borderRadius='4px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png' alt='India'/>
     <Text fontWeight='600'>Delhi NCR</Text> 
     <AiFillCaretDown />

       </Box>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>
        <Flex>
          <HStack  w='130px'>
          <CiLocationOn />
          <Text fontSize='13px'> Current Location </Text>
          </HStack>
           <Text fontSize='13px' color='blue'>Detect Using GPS <ChevronRightIcon /></Text>
        </Flex>
      </PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      </PopoverBody>
      <PopoverFooter>
        <Input placeholder='Search for Society/Apartment' />
      </PopoverFooter>
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
       <Box w='100%' h='auto' display='flex' alignItems='center' justifyContent='center'>
       <Box  w='420px' display='flex'   gap='3px'  >
  <Text color='white' fontSize='14px' textDecoration='underline' >Women's Therapies,</Text>
  <Text color='white' fontSize='14px' textDecoration='underline' >Salon for Men</Text>
  <Text color='white' fontSize='14px' textDecoration='underline' >Men's Therapies</Text>
   <Text color='white' fontSize='14px' >etc</Text>
   </Box>
  </Box>
<Box mt='70px' 
      mb={{sm:200, md:250,lg:70}}>
  <SimpleGrid 
 spacing='8'
 w='61%'
 boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
 bgColor="white"
 m='auto'
 p='10'
 borderRadius='6px'
 height='auto'
 columns={{sm:2, md:3, lg:5}}
 alignItems='center'
  >
    
   
    <Box className='serviceBox' onClick={handleWomenSection}>
      <Image w='38px' mb='-20px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png'   />
      
      <Text fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Salon For Women</Text>
    </Box>
  
    <Box className='serviceBox'  >
      <Image w='38px' mb='-20px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png'   />
      
      <Text fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Hair, Skin & Nails</Text>
    </Box>
    <Box className='serviceBox'  >
      <Image w='38px' mb='-20px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png'   />
      
      <Text w='80px' fontSize='12px'  fontWeight='500' fontFamily='sans-serif' >Women's Therapies</Text>
    </Box>
    <Box className='serviceBox' onClick={handleMenSection}  >
      <Image w='38px' mb='-20px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png'   />
      
      <Text  fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Salon For Men</Text>
    </Box>
    <Box className='serviceBox' >
      <Image w='38px' mb='-20px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png'   />
      
      <Text fontSize='12px' fontWeight='500' fontFamily='sans-serif' >Men's Therapies</Text>
    </Box>
  </SimpleGrid>
  </Box>
      </Box>
    </div>
  )
}

export default Header




// display='flex' flexDirection='column' alignItems='center' justifyContent='space-evenly' cursor='pointer'