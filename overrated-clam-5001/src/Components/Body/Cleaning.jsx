import React from 'react'
import {SimpleGrid, Box, Image, Text,
Heading} from "@chakra-ui/react";

const cleaningStyle = {
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
 

const Cleaning = () => {
  return (
    <div>
         <Box  w='100%' m='auto' mt={{sm:550, md:280, lg:170}}>
        <Heading fontSize='37px' fontWeight='500' letterSpacing='-1px' position='relative'>Cleaning & Pest Control</Heading>
        
      
     
        <SimpleGrid 
         spacing='10'
         w='80%'
         bgColor="white"
         m='auto'
         mb='70px'
         p='8'
         height='auto'
         columns={{sm:2, md:3, lg:4}} 
        >
         <Box style={cleaningStyle} >
            <Image w='100%' h='50%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg' />
           <Text  mt='20px'>Bathroom and Kitchen Cleaning</Text>
           
         </Box>
         <Box style={cleaningStyle} > 
            <Image w='100%' h='50%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg' />
            <Text  mt='20px'>Full Home Cleaning</Text>
           
         </Box>
         <Box style={cleaningStyle} >
            <Image  w='100%' h='50%'borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg' />
            <Text mt='20px'>Sofa & Carpet Cleaning</Text>
          
         </Box>
         <Box style={cleaningStyle} >
            <Image w='100%' h='44%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg' />
            <Text  mt='20px'>Cockroach, Ant & General Pest Control</Text>
           
         </Box>
        </SimpleGrid>
       </Box>
    </div>
  )
}

export default Cleaning