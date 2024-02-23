import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={
// @ts-ignore
      expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={
// @ts-ignore
      expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={
// @ts-ignore
      expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for the whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={
// @ts-ignore
      expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Additional Accordions */}
      <Accordion expanded={
// @ts-ignore
      expanded === 'panel5'} onChange={handleChange('panel5')}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel5bh-content"
    id="panel5bh-header"
  >
    <Typography sx={{ width: '33%', flexShrink: 0 }}>Technology</Typography>
    <Typography sx={{ color: 'text.secondary' }}>Latest trends and innovations</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Explore the latest technology trends and innovations in this accordion.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion expanded={
// @ts-ignore
expanded === 'panel6'} onChange={handleChange('panel6')}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel6bh-content"
    id="panel6bh-header"
  >
    <Typography sx={{ width: '33%', flexShrink: 0 }}>FAQs</Typography>
    <Typography sx={{ color: 'text.secondary' }}>Commonly asked questions</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Find answers to commonly asked questions in this accordion.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion expanded={
// @ts-ignore
expanded === 'panel7'} onChange={handleChange('panel7')}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel7bh-content"
    id="panel7bh-header"
  >
    <Typography sx={{ width: '33%', flexShrink: 0 }}>Community</Typography>
    <Typography sx={{ color: 'text.secondary' }}>Engage with our community</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Join and engage with our vibrant community in this accordion.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion expanded={
// @ts-ignore
expanded === 'panel8'} onChange={handleChange('panel8')}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel8bh-content"
    id="panel8bh-header"
  >
    <Typography sx={{ width: '33%', flexShrink: 0 }}>Tips & Tricks</Typography>
    <Typography sx={{ color: 'text.secondary' }}>Maximize your productivity</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Discover useful tips and tricks to maximize your productivity.
    </Typography>
  </AccordionDetails>
      </Accordion>
    </div>
  );
}