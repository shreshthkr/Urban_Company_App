import React, { useState,useEffect, } from 'react'
import {Box, Flex,List,
    ListItem,
    ListIcon,
    OrderedList,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    UnorderedList,Text,HStack,Button, Input} from "@chakra-ui/react";
import {RiFileMarkFill} from "react-icons/ri"
import {BsStarFill} from "react-icons/bs"
import axios from "axios";
import {useParams} from "react-router-dom";


const Packages = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
     fetch('http://localhost:8080/mensection')
     .then((res) => res.json())
     .then((res) => setData(res))
     .catch((err) => console.log(err));
    },[])

   const increment = () => {
    setCount(count+1)
   }
  const decrement = () => {
    setCount(count-1)
  }

     const addToCart = (el) => {
        setCart([...cart, el])
     }
     console.log(cart);

     const cartItems = cart.map((el) => (
        <Box key={el.id}>
            <Text>{el.service}</Text>
            <Text>Price: {el.price}</Text> 
            <Button disabled={count==1} onClick={decrement}>-</Button>
            <Button>{count}</Button>
            <Button disabled={count==3} onClick={increment}>+</Button>
            <hr />
            <br />
        </Box>
     ))

     const total = () => {
        let totalVal = 0;
        for(let i=0; i<cart.length;i++){
            totalVal = totalVal + ((cart[i].price)*count)
        }
        setCartTotal(totalVal)
     }

     useEffect(() => {
        total();
     },[cart])
      
  return (
    <div> 
          <Box display='flex'>
        <Box   >
        {data?.map((el) =>
        <Box  ml='120px' display='flex' flexDirection='column'  mb='20px' >
        
    <Box width='43%' display='flex'  >
      <Flex w='43%' >
       <Box>
        
        <Box w='85px' display='flex' alignItems='center' justifyContent='space-around'>
        <RiFileMarkFill color='green' />
        <Text fontSize='13px' color='green' fontWeight='600'>{el.Highlight}</Text>
        </Box>
        <Text w='280px' align='left' ml='3px' fontSize='18px' fontWeight='600' letterSpacing='-0.5px' mt='5px' mb='5px'>{el.service}</Text>
        <Flex w='150px' gap='5px' align='center'>
        <BsStarFill color='gray.500'/>
        <Text fontSize='12px' color='gray.500'>{el.rating} {el.TotalRating}</Text>
        </Flex>
      
        <HStack  w='160px' gap='20px'>
            <Text fontSize='13px' fontWeight='medium'>{el.price}</Text>
            <UnorderedList>
                <ListItem  fontSize='13px' fontWeight='medium'>{el.Timing}</ListItem>
            </UnorderedList>
        </HStack>
       
       </Box>
       <Box display='block' alignItems='right'>
       
       
        <Button ml='280px' mt='41px' color='purple.400' bgColor='white' border='1px' borderColor='gray.300'
        onClick={() => addToCart(el) }
        >Add</Button>
      
        
       </Box>
      </Flex>
    </Box>
    <Box w='40%' h='1px' mt='25px' border='1px' borderColor='gray.300'></Box>
    <Box>
       
       
        <Flex mt='20px'>
    <UnorderedList align='left'>
        <ListItem>{el.Detail1}</ListItem>
        <ListItem>{el.Detail2}</ListItem>
        <ListItem>{el.Detail3}</ListItem>
    </UnorderedList>
    </Flex>
    <Button alignItems='left' display='block' mt='20px' mb='20px' bgColor='white' border='1px solid gray'>Edit your package</Button>
    </Box>
    <hr  width='50%' margin-left='120px' />
   
  </Box>
  )}
 
  </Box>
  <Box ml='100px' h='auto' w='500px' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' >
      <Box mt='20px'>
          {cartItems}
          <hr />
      </Box>
      <Box>
        <Text>Total: ₹{cartTotal}</Text>
        <br />
        <Button onClick={onOpen}>Checkout</Button>
        <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Proceed To Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder='Enter Name' mb='15px' />
            <Input placeholder='Enter mobile no.'  mb='15px'/>
            <Input placeholder='Enter Adddress' />
          </ModalBody>
          <ModalFooter display='flex' justifyContent='space-around'>
            <Text fontWeight='600'>Total: ₹{cartTotal}</Text>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
               Checkout
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
  </Box>
  </Box>
  </div>
  )
}

export default Packages