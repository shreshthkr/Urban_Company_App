import React from 'react'
import {Box, Text,Image,SimpleGrid, Heading } from "@chakra-ui/react";

const BoxStyle = {
    width: "90%",
    height:"auto",
    margin:'auto',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

}

const luxury = [
    {
        id:1,
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png",
        title: "Salon Luxe"
    },
    {
        id:2,
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png",
        title: "Salon for Men Royale"
    },
    {
        id:3,
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png",
        title: "Spa Luxe"
    },
    {
        id:3,
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png",
        title: "Massage Therapy for Men Royale"
    }
]

const Luxury = () => {
  return (
    <div>
        <Box style={BoxStyle}>
          <Heading>UC Luxury Experience</Heading>
          <Text>Top Professionals | Best Brands | Premium Experience</Text>
        
        <Box w='100%' h='auto' mt='40px' >
            <SimpleGrid
             w='90%'
             h='250px'
             m='auto' 
            columns={[1, 2, 4]}
            gap='20px'
            >
                {
                    luxury.map((el) =>
                    <Box key={el.id}>
                    <Image src={el.img} borderRadius='6px' mb='15px' />
                    <Text>{el.title}</Text>
                 </Box>
                    )
                }
            
            </SimpleGrid>
        </Box>
        </Box>
    </div>
  )
}

export default Luxury