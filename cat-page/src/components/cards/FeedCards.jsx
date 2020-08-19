import React,{useState,useEffect} from 'react';
import {  Flex,Box } from "@chakra-ui/core";
import Card from './Card'
import {FeedData} from '../dataCard'
import Footer from '../Footer/Footer'

function FeedCards() {
  const [cardData, setCardData] = useState([])

  useEffect(() => {
    if (!FeedData.length) return
    setCardData(FeedData)
  }, [])

  const changeCard = (id) => {
    setCardData(FeedData.map(el=>{
      if(el.id === id){
        switch (el.status) {
          case `default`:
            el.status = 'active'
            return el
          case `disabled`:
            return el
          case `active`:
            el.status = 'default'
            return el
          default:
            return el
        }
      }
      return el
    })) 
  }

  return (

    <Flex className='feedCards'  >
      {cardData.map(item =>(
        <Box key={item.id} >
        <Card {...item} onCardClick={(id)=>changeCard(id)}/>
        <Footer {...item} onCardClick={(id)=>changeCard(id)}/>
        </Box>
      ))}
    </Flex>

  );
}
export default  FeedCards
