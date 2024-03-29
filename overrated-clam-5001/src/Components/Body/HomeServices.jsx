import React from "react";
import {SimpleGrid,Heading,Box,Image,Text} from "@chakra-ui/react";
import SimpleSlider from "./Carousel";
import Appliances from "./Appliances";
import SalonAndSpa from "./SalonAndSpa";
import Cleaning from "./Cleaning";
import Luxury from "./Luxury";
import Policies from "./Policies";
import { FaBlackTie } from "react-icons/fa";
const serviceStyle = {
  width:'20% ',
  height: '110px',
  display:'flex',
   flexDirection:'column',
    alignItems:'center',
     justifyContent:'space-evenly',
      cursor:'pointer',
      margin: 'auto',
      
     cursor: 'pointer',
     hover: 'bgColor(gray.300)'

}
const categoryStyle = {
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

  




const HomeServices = () => {
  return (
    <div>
      <Box w='100%' m='auto' mt={{sm:550, md:280, lg:170}}>
        <Heading fontSize='37px' fontWeight='500' letterSpacing='-1px' position='relative'  >Home Services</Heading>
        <br />
        <br />
        <br />
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
            <Box style = {serviceStyle}>
              <Image w='50px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png' />
              <Text w='100px' fontSize='12px' fontWeight='500' fontFamily='sans-serif'>Appliance Repair</Text>
            </Box>
            <Box style = {serviceStyle}>
              <Image w='50px'  src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png' />
              <Text fontSize='12px' w='100px' fontWeight='500' fontFamily='sans-serif'>Home Painting</Text></Box>
            <Box style = {serviceStyle}>
              <Image w='50px'  src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png' />
              <Text fontSize='12px' w='100px' fontWeight='500' fontFamily='sans-serif'>Cleaning & Pest</Text></Box>
            <Box style = {serviceStyle}>
              <Image w='50px'  src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png' />
              <Text fontSize='12px' w='100px' fontWeight='500' fontFamily='sans-serif'>Disinfection</Text></Box>
            <Box style = {serviceStyle}>
              <Image w='50px'  src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png' />
              <Text fontSize='12px' w='100px' fontWeight='500' fontFamily='sans-serif'>Home Repairs</Text></Box>
          </SimpleGrid>


           <Box w='100%' h='13px' mt='70px' mb='70px' bgColor='rgb(242,244,246)'></Box>
           <Box>
        <SimpleSlider />
           </Box>
           <Box w='100%' h='13px' mt='70px' mb='70px' bgColor='rgb(242,244,246)'></Box>
          </Box>
      
           {/* New Category Launches */}
          

       <Box w='100%' h='auto' m='auto'> 
         <Heading>New Category Launches</Heading>
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
          <Box style ={categoryStyle}  >
            <Image w='100%' h='60%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg' />
          
           <Text fontSize='15px' lineHeight='2px' mb='-10px'>Expert Counselling</Text>
            <Text fontSize='12px' color='gray.500' lineHeight='2px'>Advanced Skin Treatments</Text>
          </Box>
          <Box style ={categoryStyle} >
            <Image w='100%' h='60%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg' />
            
            <Text fontSize='15px'>Furniture Making, Upholstery & Polish</Text>
           
          </Box>
          <Box style ={categoryStyle}  >
            <Image w='100%' h='60%' borderRadius='6px' src ='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg' />
           
            <Text fontSize='15px' lineHeight='2px' mb='-10px'>Air Purifier</Text>
            <Text fontSize='12px' color='gray.500' lineHeight='2px'>Flat ₹100 off</Text>
          </Box>
          <Box style ={categoryStyle}  >
            <Image w='100%' h='60%' borderRadius='6px' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg' />
           
            <Text fontSize='15px'>RO Water Purifier</Text>
            
          </Box>
              
        </SimpleGrid>
       </Box>
       <Box w='100%' h='13px' mt='10px' mb='70px' bgColor='rgb(242,244,246)'></Box>

        <Appliances />
        <Box w='100%' h='13px' mt='50px' mb='70px' bgColor='rgb(242,244,246)'></Box>
       <SalonAndSpa />
       <Box w='100%' h='13px' mt='70px' mb='70px' bgColor='rgb(242,244,246)'></Box>
       <Cleaning />
       <Box w='100%' h='13px' mt='70px' mb='70px' bgColor='rgb(242,244,246)'></Box>
        <Luxury />
        <Box w='100%' h='13px' mt='20px' mb='20px' bgColor='rgb(242,244,246)'></Box>
        <Policies />
        <Box w='100%' h='13px' mt='20px' mb='20px' bgColor='rgb(242,244,246)'></Box>
    </div>
  )
}

export default HomeServices
