import React from 'react'
import R1 from './R1'
import R2 from './R2'
import R3 from './R3'
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box } from '@mui/material';

export default function Dashboard() {
  return (
    <div>
      <Box sx={{textAlign:"right"}}>
      <Button sx={{padding:"2px 8px",textTransform:"capitalize"}} variant="contained" color="primary">
        <DownloadOutlined />
        Download Reports
      </Button>
      </Box>
      <R1/>
      <R2/>
      <R3/>
    </div>
  )
}