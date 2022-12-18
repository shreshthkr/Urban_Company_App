import React from 'react'
import {Box} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Header from '../Header/HeadingText';
import "./TopSection.modules.css"



const TopSection = () => {
  const myStyle={
    width: "100%",
    height: "550px",
    display: "felx",
    flexDirection: "coloumn",
    alignItems: "center",
    justifyContents: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
  
    backgroundImage:"url(" +
  "https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg"+")",
    size:'2880 × 1104 px',
    bgGradient: "radial(to-t, rgba(0,0,0,.16),rgba(0,0,0,.8) )"
    };
  
  return (
    <Box style={myStyle} >
        <Navbar />
        <Header />
    </Box>
  )
}

export default TopSection;