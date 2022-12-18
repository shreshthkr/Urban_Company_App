import { useState,useEffect} from 'react'
import{Box,VStack,HStack, Text,Image,Grid, Heading,
} from "@chakra-ui/react";
import {AiFillSafetyCertificate} from "react-icons/ai";
import {FaStar} from "react-icons/fa";
import Packages from '../Cards/Packages';

const categories = [
  {
    id:1,
    imgSrc:"https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1646814042922-25f8f1.jpeg",
    title: "Packages"
 },
 {
   id:2,
   imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631190374864-78f3e8.jpeg",
   title: "Haircut for Men & Kid's"
 },
 {
   id:3,
   imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189933595-01692d.png",
   title: "Hair Color"
 },
 {
   id:4,
   imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189957304-ea2a7b.png",
   title: "Shave/Beard Grooming"
 },
 {
   id:5,
   imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189857376-d49e47.png",
   title: "Detan & Facials"
 },
 {
   id:6,
   imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189905841-237b37.png",
   title: "Massage Therapy"
 }
]

const MenSalon = () => {
  const [data, setData] = useState([]);

   useEffect(() => {
    fetch('http://localhost:8080/mensection')
    .then((res) => res.json())
    .then((res) => setData(res))
    .catch((err) => console.log(err));
   },[])


  return (
    <div>
       {/* Top Section */}
       <Box w='80%' h='400px' m='auto' display='flex' alignItems='center'>
          
            <Box w='50%' h='100%' mt='220px' dispay='flex' justifyContent='center'>
              <VStack alignItems='left' gap='1px'>
               <Box w='90px' h='35px' border='1px' borderColor='gray.300' display='flex' alignItems='center' justifyContent='center' borderRadius='6px' >
                <AiFillSafetyCertificate />
                <Text fontSize='15px' fontWeight='500' >UC Safe</Text>
               </Box>
               <Text fontSize='36px' fontWeight='700' lineHeight='48px' fontFamily='sans-serif,Arial' textAlign='left' >Salon for Men</Text>
               <HStack>
                <FaStar />
                <Text  fontSize='13px' textAlign='left'>4.75 (974k)</Text>
               </HStack>
               
              </VStack>
            </Box>
            {/* Video */}
            <Box w='50%' h='100%' display='flex' alignItems='center' >
                <Image h='250px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_640,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1641208097520-1f177b.png'
                borderRadius='5px'
                />
            </Box>
            </Box>

            <Box w='80%' h='5px' m='auto' mt='-10px' bgColor='gray.300'></Box>
    <Box w='80%' h='200px' margin='auto' mt='40px'>
    <Grid w='80%' h='auto' gridTemplateColumns='repeat(9,1fr)' >
       {categories && categories.map((el) => 
          <Box key={el.id} h='80%' display='flex' flexDirection='column'>
            <Image src={el.imgSrc} w='68%' borderRadius='7px' margin='auto' />
            <Text fontSize='13px' textAlign='center' mt='5px'>{el.title}</Text>
          </Box>
       )}
    </Grid>
    </Box>
    <hr width='80%' margin ='auto' />    
    <Box>
        <Heading textAlign='left' ml='120px' >Packages</Heading>
         <Box mt='50px'>
       
          
           <Packages/>
          
      
            
         </Box> 
       </Box>
    </div>
  )
}

export default MenSalon;





