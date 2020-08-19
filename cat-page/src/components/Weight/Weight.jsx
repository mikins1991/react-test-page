import React from 'react';
import { Box } from "@chakra-ui/core";
import './Weight.scss';

const Weight = ({weight,status}) => {

  return (
    <Box className={"weight weight-" + status}>
      <Box className="weight-quantity">{weight}</Box><br />
      <Box className="weight-measure">кг</Box>
    </Box>
  );
}
export default  Weight