import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box, useTheme } from "@mui/material";
import Piie from './Piie';
export default function Pie() {
    const theme = useTheme();
    return (
      <Box>
        <Piie />
      </Box>
       
 
  )
}
