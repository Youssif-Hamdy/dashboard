import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { geo } from "./World";
import { data } from "./Data";
import Geo from "./Geo";

export default function Geography() {
    const theme = useTheme();
  return (
    <Box>

      <Geo />
    </Box>
  )
}
