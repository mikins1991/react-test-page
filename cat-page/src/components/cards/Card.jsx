import React,{ useState }  from 'react';
import { Box, Image } from "@chakra-ui/core";
import './Card.scss';
import Weight from '../Weight/Weight'
import Info from '../Info/Info'
import catImg from './Cat.png';

const Card = ({id,name,composition,quantity,present,weight,status,onCardClick}) => {
    const [hoverCard, setHoverCard] = useState(false)

    const onCardHover = (event) => {
        if(status!=='active')return
        setHoverCard(event)
    }

  return (
    <Box 
        className={"card-border card-border-" + status} 
        onClick={() => onCardClick(id)}
        onMouseEnter={() => onCardHover(true)}
        onMouseLeave={() => onCardHover(false)}
        >
        <Box className={"card card-" + status}>
            <Info name={name} composition={composition} quantity={quantity} present={present} status={status} hoverCard={hoverCard}/>
            <Image src={catImg} alt="Cat" position='absolute' bottom='0'/>
            <Weight weight={weight} status={status}/>
        </Box>
    </Box>
  );
}
export default  Card
