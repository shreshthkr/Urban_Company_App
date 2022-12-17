import React from 'react'
import {SimpleGrid, Box, Image, Text,
Heading} from "@chakra-ui/react";


const Cleaning = () => {
  return (
    <div>
         <Box w='100%' h='auto'>
        <Heading fontSize='35px' fontWeight='500'>Cleaning & Pest Control</Heading>
        
       </Box>
       <Box w='95%' h='300px' m='auto'>
        <SimpleGrid 
         w='100%'
         h='300px'
         bgColor='white'
         m='auto'
         mt='40px'
         mb='40px'
         p='5'
         columns={{sm:1, md:2, lg:4}}
        >
         <Box w='280px'  h='300px' cursor='pointer' >
            <Image w='100%' h='60%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg' />
           <Text  mt='20px'>Bathroom and Kitchen Cleaning</Text>
           
         </Box>
         <Box w='280px'  h='350px' cursor='pointer' > 
            <Image w='100%' h='50%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg' />
            <Text  mt='20px'>Full Home Cleaning</Text>
           
         </Box>
         <Box w='280px'  h='350px' cursor='pointer' >
            <Image  w='100%' h='50%'borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg' />
            <Text mt='20px'>Sofa & Carpet Cleaning</Text>
          
         </Box>
         <Box w='280px'  h='400px' cursor='pointer' >
            <Image w='100%' h='44%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg' />
            <Text  mt='20px'>Cockroach, Ant & General Pest Control</Text>
           
         </Box>
        </SimpleGrid>
       </Box>
    </div>
  )
}

export default Cleaning