import React from 'react';
import { Text, Link } from "@chakra-ui/core";
import './Footer.scss'

function Footer({description,status,composition,id,onCardClick}) {

  const footerDescription = () => {
    switch (status) {
      case `default`:
        return (<Text className='footer' fontFamily='Roboto Condensed'>Чего сидишь? Порадуй котэ, <Link className=' footer-link' onClick={() => onCardClick(id)}>купи</Link></Text>)
      case `disabled`:
        return (<Text className='footer footer-disabled' fontFamily='Roboto Condensed'>Печалька, {composition} закончился</Text>)
      case `active`:
        return (<Text className='footer' color="white" fontFamily='Roboto Condensed' textAlign='center'>{description}</Text>)
      default:
        return
    }
  }
  return (
        footerDescription()
  );
}
export default  Footer
