import React from 'react'
import {SimpleGrid, Box, Image, Text,
Heading} from "@chakra-ui/react";


const serviceStyle = {
   width:'100% ',
   height: '250px',
   display:'flex',
    flexDirection:'column',
     alignItems:'center',
      justifyContent:'space-evenly',
       cursor:'pointer',
       margin: 'auto',
      cursor: 'pointer',
 
 }


const SalonAndSpa = () => {
  return (
    <div>
         <Box>
        <Heading fontSize='35px' fontWeight='500'>Salon, Spa and Massage services</Heading>
        <Text fontSize='20px' color='gray.500'>Hygienic & Single use products | Low-contact services</Text>
       </Box>
       <Box w='100%' h='auto' m='auto'>
        <SimpleGrid 
        spacing='8'
        w='80%'
        m='auto'
        p='10'
        borderRadius='6px'
        height='auto'
        columns={{sm:2, md:3, lg:4}}
        alignItems='center'
        
        >
         <Box style={serviceStyle} >
            <Image borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg' />
           <Text>Salon Prime</Text>
           <Text fontSize='12px' color='gray.500' mt='-20px'>Free Waxing</Text>
         </Box>
         <Box style={serviceStyle} > 
            <Image borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg' />
            <Text>Salon for Men</Text>
            <Text fontSize='12px' color='gray.500' mt='-20px'>Flat ₹100 off</Text>
         </Box>
         <Box style={serviceStyle} >
            <Image borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png' />
            <Text>Spa for Women</Text>
            <Text fontSize='12px' color='gray.500' mt='-20px'>Free head massage</Text>
         </Box>
         <Box style={serviceStyle} >
            <Image borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg' />
            <Text>Massage for Men</Text>
            <Text fontSize='12px' color='gray.500' mt='-20px'>Starts at ₹499</Text>
         </Box>
        </SimpleGrid>
       </Box>
    </div>
  )
}

export default SalonAndSpa