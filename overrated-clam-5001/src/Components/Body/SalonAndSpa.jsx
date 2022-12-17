import React from 'react'
import {SimpleGrid, Box, Image, Text,
Heading} from "@chakra-ui/react";


const SalonAndSpa = () => {
  return (
    <div>
         <Box>
        <Heading fontSize='35px' fontWeight='500'>Salon, Spa and Massage services</Heading>
        <Text fontSize='20px' color='gray.500'>Hygienic & Single use products | Low-contact services</Text>
       </Box>
       <Box w='95%' h='auto' m='auto'>
        <SimpleGrid 
         w='100%'
         h='200px'
         bgColor='white'
         m='auto'
         mt='40px'
         mb='40px'
         p='5'
         columns={{sm:2, md:3, lg:4}}
        >
         <Box w='280px'  h='400px' cursor='pointer' >
            <Image borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg' />
           <Text>Salon Prime</Text>
           <Text fontSize='12px' color='gray.500'>Free Waxing</Text>
         </Box>
         <Box w='280px'  h='400px' cursor='pointer' > 
            <Image borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg' />
            <Text>Salon for Men</Text>
            <Text fontSize='12px' color='gray.500'>Flat ₹100 off</Text>
         </Box>
         <Box w='280px'  h='400px' cursor='pointer' >
            <Image borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png' />
            <Text>Spa for Women</Text>
            <Text fontSize='12px' color='gray.500'>Free head massage</Text>
         </Box>
         <Box w='280px'  h='400px' cursor='pointer' >
            <Image borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg' />
            <Text>Massage for Men</Text>
            <Text fontSize='12px' color='gray.500'>Starts at ₹499</Text>
         </Box>
        </SimpleGrid>
       </Box>
    </div>
  )
}

export default SalonAndSpa