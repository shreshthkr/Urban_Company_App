import React from 'react'
import Slider from "react-slick"
import "./slick.css"; 
import "./slick-theme.css";
import {Box,Image} from "@chakra-ui/react"

const data = 
    [
    { id: 1,
      imgSrc : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1671204380486-358d8b.jpeg'
    },
{
    id: 2,
imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1671204418140-bf6c48.jpeg'
},
{
    id: 3,
imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1671204615350-d43609.jpeg'
},
{
    id: 4,
imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1671204399632-702896.jpeg'
},
{
    id: 5,
imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1671204414074-1ecbc8.jpeg'
},
{
    id: 6,
    imgSrc : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1671204418140-bf6c48.jpeg'
}
]







const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        gap: 25,
        width: '80%',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    
  
         <Slider {...settings} >
              {
                data.map((el)=><Box w='250px' h='180px' borderRadius='5px' mr='20px' cursor={'pointer'}><Image src={el.imgSrc} w='90%' h='100%' /></Box> )
              }
        
        </Slider>
   
  )
}

export default SimpleSlider