import {
    Box,
    chakra,
    Container,
    Stack,
    Flex,
    Text,
    Link,
    SimpleGrid,
    useColorModeValue,
    VisuallyHidden,Image
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube,FaFacebookF, FaPinterestP } from 'react-icons/fa';
  import { ReactNode } from 'react';
  import {GrLinkedin} from "react-icons/gr"
  import Logo from "../../Logo/logo.png"  
  import Apple from "../../AppBadges/Apple.jpg"
  import PlayStore from "../../AppBadges/PlayStore.jpg"
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box h="auto"
      bgColor='black'
       >
        <Box w='auto' h='auto' bgColor='black'>
            <Stack
            spacing='10'
            w='60%'
            m='auto'
            p='8'
            display="flex"
            direction={{sm:'column',md: "column", lg: 'row'}}
            height='auto'
            textColor='gray'
            fontWeight={600}
                 >

             <Link href={'#'}>About Us</Link>
             <Link href={'#'}>UC Impact</Link>
             <Link href={'#'}>Terms& Condition</Link>
             <Link href={'#'}>Privacy Policy</Link>
             <Link href={'#'}>Blog</Link>
             <Link href={'#'}> Careers</Link>
             <Link href={'#'}>ContactUs</Link>
            </Stack>
        </Box>
        <hr />
        <Box w='ato' h='100px' display='flex' flexDirection='column' alignItems='left' ml='50px'>
            <Text textColor='white' textAlign='left' fontWeight={600} mb='3px'>Serving in</Text>
            <Text textColor='gray' fontWeight={600} textAlign='left' mb='3px'>USA</Text>
            <Stack direction={{base: "row", md: "row", sm: "column"}} textColor='gray' fontWeight={600} gap='10px' wrap='wrap' >
             <Link href={'#'}>Austin</Link>
             <Link href={'#'}>Dallas</Link>
             <Link href={'#'}>New York City</Link>
            
            </Stack>
        </Box>
        <Box  w='auto' h='auto' display='flex' flexDirection='column' alignItems='left' ml='50px' flexWrap='wrap'>
            <Text textColor='gray' textAlign='left'>IND</Text>
            <Stack direction={{sm:'column',md: "column", lg: 'row'}} column={{sm:1, md:2, lg:8}} gap='10px' fontWeight={600} textColor='gray'>
           
             <Link href={'#'}>Kolkata</Link>
             <Link href={'#'}>Mumbai</Link>
             <Link href={'#'}>Patna</Link>
             <Link href={'#'}>Delhi NCR</Link>
             <Link href={'#'}>Visakhapatnam</Link>
             <Link href={'#'}>Surat</Link>
             <Link href={'#'}>Warangal</Link>
             
            
            </Stack>
        </Box>
        <hr color='gray'/>
        <Container
         bgColor='black'
          as={Stack}
          maxW={'7xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Image src={Logo} w='140px'/>
          <Text fontSize='12px' color='white' w='400px' ml='120px'>© 2014-22 UrbanClap Technologies India Pvt. Ltd.</Text>
          <Stack mr='-100px' direction={'row'} spacing={4}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter color='white' />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebookF color='white' />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram color='white' />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube  color='white'/>
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'#'}>
              <GrLinkedin color='white' />
            </SocialButton>
            <SocialButton >
                <FaPinterestP color='white' />
            </SocialButton>
          </Stack>
          <Stack >
            <Flex w='25%' ml='80px'>
            <Image src={PlayStore} mr='10px'/>
            <Image src={Apple}/>
            </Flex>
          </Stack>
        </Container>
      </Box>
    );
  }