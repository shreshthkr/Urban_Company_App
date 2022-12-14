import React from 'react'
import {Box, Image} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";





const Header = () => {
  const myStyle={
    width: "100%",
    height: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage:"url(" +
  "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/6/2/w1200X800/Urban_Company.jpeg"+")",
    width:'100%',
    height:'500px',
    };
  
  return (
    <div style={myStyle}>
        <Navbar />
    </div>
  )
}

export default Header;



// img = https://images.newindianexpress.com/uploads/user/imagelibrary/2021/6/2/w1200X800/Urban_Company.jpeg