 
 
import React from "react";
import { Box, useTheme } from "@mui/material";

import { ResponsiveLine } from "@nivo/line";

const data = [
    {
      id: "egypt",
      color: "hsl(4, 70%, 50%)",
      data: [
        { x: "USD", y: 15.70 },
        { x: "EUR", y: 18.56 },
        { x: "GBP", y: 21.33 },
        { x: "JPY", y: 0.14 },
      ],
    },
    {
      id: "saudi_arabia",
      color: "hsl(205, 70%, 50%)",
      data: [
        { x: "USD", y: 3.75 },
        { x: "EUR", y: 4.43 },
        { x: "GBP", y: 5.10 },
        { x: "JPY", y: 0.03 },
      ],
    },
    {
      id: "usa",
      color: "hsl(39, 70%, 50%)",
      data: [
        { x: "USD", y: 1 },
        { x: "EUR", y: 1.18 },
        { x: "GBP", y: 1.36 },
        { x: "JPY", y: 0.01 },
      ],
    },
    {
      id: "uk",
      color: "hsl(179, 70%, 50%)",
      data: [
        { x: "USD", y: 0.74 },
        { x: "EUR", y: 0.88 },
        { x: "GBP", y: 1 },
        { x: "JPY", y: 0.01 },
      ],
    },
    {
      id: "sudan",
      color: "hsl(210, 70%, 50%)",
      data: [
        { x: "USD", y: 590 },
        { x: "EUR", y: 700 },
        { x: "GBP", y: 810 },
        { x: "JPY", y: 5.22 },
      ],
    },
    {
      id: "lebanon",
      color: "hsl(270, 70%, 50%)",
      data: [
        { x: "USD", y: 15200 },
        { x: "EUR", y: 18000 },
        { x: "GBP", y: 20750 },
        { x: "JPY", y: 133.45 },
      ],
    },
  ];
  

const Line = ({isDahboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard?  "280px"  :  "75vh" }}>
    <ResponsiveLine
      theme={{
        // @ts-ignore
        textColor: theme.palette.text.primary,
        fontSize: 11,
        axis: {
          domain: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: theme.palette.text.primary,
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.secondary,
            },
          },
        },
        grid: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 0,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
          },
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
          },
          ticks: {
            line: {},
            text: {
              fontSize: 10,
              fill: theme.palette.text.primary,
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: theme.palette.text.primary,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
        tooltip: {
          container: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      data={data}
      curve="catmullRom"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{

        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDahboard? null : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
     
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDahboard? null : "Count",
        legendOffset: -45,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </Box>
  );
};

export default Line;