import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box,useTheme } from '@mui/material'

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
  export default function Bar2({ isDashbord = false }) {
    const theme = useTheme();
  
    return (
        <Box sx={{ height: isDashbord ? "300px" : "75vh" }}>
        <ResponsiveBar
          data={data}
          keys={["dollar", "euro", "pound"]}
          indexBy="country" // Change "year" to "country"
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
                strokeWidth: 1,
              },
            },
            // ... (you can continue adding other theme settings)
          }}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "paired" }}
          defs={[
            // ... (rest of the defs settings)
          ]}
          fill={[
            // ... (rest of the fill settings)
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            // ... (rest of the axisBottom settings)
          }}
          axisLeft={{
            // ... (rest of the axisLeft settings)
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            // ... (rest of the legends settings)
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={function (e) {
            return (
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            );
          }}
        />
      </Box>
    );
  }