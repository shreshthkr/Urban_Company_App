import React from 'react'
import {SimpleGrid, Box, Image, Text,
Heading} from "@chakra-ui/react";

const appliancesStyle = {
   width:'100% ',
   height: '250px',
   display:'flex',
    flexDirection:'column',
     alignItems:'center',
      justifyContent:'space-around',
       cursor:'pointer',
       margin: 'auto',
      cursor: 'pointer',
 
 }



const Appliances = () => {
  return (
    <div>
       <Box>
        <Heading fontSize='35px' fontWeight='500'>Appliances</Heading>
        <Text fontSize='20px' color='gray.500'>Servicing, Repair, Installation & Uninstallation</Text>
       </Box>
       <Box w='100%' h='auto' m='auto'>
        <SimpleGrid 
          spacing='10'
          w='63%'
          bgColor="white"
          m='auto'
          mb='70px'
          p='8'
          height='auto'
          columns={{sm:1, md:3, lg:3}}
        >
         <Box style={appliancesStyle}>
            <Image borderRadius='5px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png' />
           <Text>Geyser</Text>
           <Text fontSize='12px' mt='-20px' color='gray.500'>Starts at ₹249</Text>
         </Box>
         <Box style={appliancesStyle}> 
            <Image borderRadius='5px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png' />
            <Text>Water Purifier Service</Text>
            <Text fontSize='12px' mt='-20px' color='gray.500'>Up to 45% Off</Text>
         </Box>
         <Box style={appliancesStyle}>
            <Image borderRadius='5px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg' />
            <Text>Air Purifier</Text>
            <Text fontSize='12px' mt='-20px' color='gray.500'>Flat ₹100 off</Text>
         </Box>
        </SimpleGrid>
       </Box>
    </div>
  )
}

export default Appliances