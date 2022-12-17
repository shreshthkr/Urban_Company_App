import React from "react";
import {Box, Flex,List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,Text,HStack,Button} from "@chakra-ui/react";
import {RiFileMarkFill} from "react-icons/ri"
import {BsStarFill} from "react-icons/bs"
export function BestSeller(props) {
  
 const {Highlight,service,rating,TotalRating,price,Timing,
Detail1, Detail2,Detail3
} = props
   
return(
    <>
      <Box ml='120px'  mb='20px'>
        <Box width='43%' display='flex'  >
          <Flex w='43%' >
           <Box>
            <Box w='85px' display='flex' alignItems='center' justifyContent='space-around'>
            <RiFileMarkFill color='green' />
            <Text fontSize='13px' color='green' fontWeight='600'>{Highlight}</Text>
            </Box>
            <Text align='left' ml='3px' fontSize='18px' fontWeight='600' letterSpacing='-0.5px' mt='5px' mb='5px'>{service}</Text>
            <Flex w='150px' gap='5px' align='center'>
            <BsStarFill color='gray.500'/>
            <Text fontSize='12px' color='gray.500'>{rating} {TotalRating}</Text>
            </Flex>
          
            <HStack  w='160px' gap='20px'>
                <Text fontSize='13px' fontWeight='medium'>{price}</Text>
                <UnorderedList>
                    <ListItem  fontSize='13px' fontWeight='medium'>{Timing}</ListItem>
                </UnorderedList>
            </HStack>
           
           </Box>
           <Box display='block' alignItems='right'>
            <Button ml='280px' mt='41px' color='purple.400' bgColor='white' border='1px' borderColor='gray.300'>Add</Button>
           </Box>
          </Flex>
        </Box>
        <Box w='40%' h='1px' mt='25px' border='1px' borderColor='gray.300'></Box>
        <Box>
           
           
            <Flex mt='20px'>
        <UnorderedList align='left'>
            <ListItem>{Detail1}</ListItem>
            <ListItem>{Detail2}</ListItem>
            <ListItem>{Detail3}</ListItem>
        </UnorderedList>
        </Flex>
        <Button alignItems='left' display='block' mt='20px' mb='20px' bgColor='white' border='1px solid gray'>Edit your package</Button>
        </Box>
        <hr  width='50%' margin-left='120px' />
      </Box>
     
    </>
)

}

