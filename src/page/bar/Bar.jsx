import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react';
import Bar2 from './Bar2';
const data = [
    {
      country: 'Egypt',
      dollar: 15.75, // Replace with actual exchange rates
      euro: 18.50,
      pound: 1.00,
    },
    {
      country: 'UAE',
      dollar: 3.67,
      euro: 4.20,
      pound: 0.23,
    },
    {
      country: 'Turkey',
      dollar: 13.10,
      euro: 15.25,
      pound: 0.82,
    },
    {
      country: 'Mexico',
      dollar: 20.00,
      euro: 23.50,
      pound: 1.27,
    },
  ];
export default function Bar() {
    const theme=useTheme()
  return (
  <Bar2/>
  )
}
