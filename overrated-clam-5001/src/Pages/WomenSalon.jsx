import { useState,useEffect} from 'react'
import{Box, Stack, VStack,HStack, Text,Image,Grid,
  GridItem,
} from "@chakra-ui/react";
import {AiFillSafetyCertificate} from "react-icons/ai";
import {FaStar} from "react-icons/fa";
import { BestSeller } from '../Cards/WomensSection';

  
const Packages = [
  {
   id:1,
   imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1670408542539-09e49b.jpeg",
   title: "Bestseller packages"
},
{
  id:2,
  imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1670408528573-96acc2.jpeg",
  title: "Make your package"
},
{
  id:3,
  imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1670408503770-537dc1.jpeg",
  title: "Waxing"
},
{
  id:4,
  imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1670316502389-7dc62c.jpeg",
  title: "Facial & cleanups"
},
{
  id:5,
  imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1670316517769-3717f6.jpeg",
  title: "Manicure"
},
{
  id:6,
  imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1670316525244-ecbda9.jpeg",
  title: "Pedicure"
},
{
  id:7,
  imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1670316528704-87f59b.jpeg",
  title: "Threading & face wax"
},
{
  id:8,
  imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1670316498745-cfa588.jpeg",
  title: "Bleach & detan"
},
{
  id:9,
  imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1670316506140-48e235.jpeg",
  title: "Hair care"
}
];

const WomenSalon = () => {
  const [data, setData] = useState([]);
   

   useEffect(() => {
   fetch('http://localhost:8080/BestSeller')
   .then((res) => res.json())
   .then((res) => setData(res))
   .catch((err) => console.log(err));
   },[]);
 
 






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
               <Text fontSize='36px' fontWeight='700' lineHeight='48px' fontFamily='sans-serif,Arial' textAlign='left' >Salon Prime</Text>
               <HStack>
                <FaStar />
                <Text  fontSize='13px' textAlign='left'>4.76 (978k)</Text>
               </HStack>
               
              </VStack>
            </Box>
            {/* Video */}
            <Box w='50%' h='100%' display='flex' alignItems='center' >
                <Image h='250px' src='https://cdn.zoutons.com/images/originals/stores/urbancompany1_1649305261.png'
                borderRadius='5px'
                />
            </Box>
            
           
        
       </Box>
    <Box w='80%' h='5px' m='auto' mt='-10px' bgColor='gray.300'></Box>
    <Box w='80%' h='200px' margin='auto' mt='40px'>
    <Grid w='80%' h='auto' gridTemplateColumns='repeat(9,1fr)' >
       {Packages && Packages.map((el) => 
          <Box key={el.id} h='80%' display='flex' flexDirection='column'>
            <Image src={el.imgSrc} w='68%' borderRadius='7px' margin='auto' />
            <Text fontSize='13px' textAlign='center' mt='5px'>{el.title}</Text>
          </Box>
       )}
    </Grid>
    </Box>
    <hr width='80%' margin ='auto' />
    {/* Packages Section */}
                                                {/* Bestseller Packages */}
       
       <Box>
        <Text>Bestseller packages</Text>
         <Box>
          {
            data?.map((list) => (
           <BestSeller
           Highlight= {list.Highlight}
           service= {list.service}
           rating= {list.rating}
           TotalRating= {list.TotalRating}
           price= {list.price}
           Timing= {list.Timing}
           Detail1= {list.Detail1}
           Detail2= {list.Detail2}
           Detail3={list.Detail3}
           key={list.rating}
           />
            ))
          }
            
         </Box> 
       </Box>
    
       




    </div>
  )
}

export default WomenSalon;