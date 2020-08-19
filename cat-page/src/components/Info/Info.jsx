import React from 'react';
import {  Text, Box, Flex} from "@chakra-ui/core";

const fontStyle= {
    header:{
        fontSize:'1.2rem',
        fontFamily:'Roboto Condensed'
    },
    name:{
        fontWeight:'600',
        my:'0',
        fontFamily:'Roboto Condensed'
    },
    footer:{
        fontSize:'0.9rem',
        fontFamily:'Roboto Condensed'
    }
}

const Info = ({name,composition,quantity,present,status, hoverCard}) => {

    const cardHeader = ()=> {
        if(status==='active'){
            switch (hoverCard) {
                case false:
                    return (<Text  {...fontStyle.header}>Сказачное заморское яство</Text>)
                case true:
                    return (<Text  {...fontStyle.header} color='#c9296c'>Котэ не одобряет?</Text>)
                default:
                    return 
              }
        }
        return (<Text  fontSize='1.2rem' fontFamily='Roboto Condensed'>Сказачное заморское яство</Text>)
    }

  return (
    <Box ml='3rem' fontFamily='Exo2.0-Thin.otr'> 
        {cardHeader()}
        <Text fontSize='2.5rem' {...fontStyle.name}>{name}</Text>
        <Text  fontSize='1.6rem' {...fontStyle.name}>{composition}</Text>
        <Flex m='0.5rem 0 0'>
            <Text {...fontStyle.footer}  fontWeight='600' m='0.5rem 0.2rem 0 0' >
                {quantity } 
            </Text>
            <Text  {...fontStyle.footer} m='0.5rem 0 0'>
                порций
            </Text> 
        </Flex>
        <Flex m='0'>
            <Text  {...fontStyle.footer} fontWeight='600' m='0 0.2rem 0 0' >
            {(present===1)?'':present}
            </Text>
            <Text  {...fontStyle.footer} m='0'>
            {(present===1)?'мышь':(present<5)?'мыши':'мышей'} в подарок
            </Text> 
        </Flex>
      
    </Box>
  );
}
export default  Info
