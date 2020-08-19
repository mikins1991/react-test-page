import React from 'react';
import { Text,Box } from "@chakra-ui/core";
import './App.scss';
import FeedCards from '../cards/FeedCards';

function App() {
  return (
    <Box className='app' >
        <Text fontSize="2rem" color="white" textAlign='center' fontFamily='Exo2.0-Thin.otr'>Ты сегодня покормил кота?</Text>
        <FeedCards/>
      </Box>
  );
}

export default App;
