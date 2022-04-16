import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const styles = {
    accordionStyle:
    { marginBottom:'10px'},
  };

const CommonAccordion = ({courseName, courseDescription, courseDetailedDescription}) => {
  return (
    <div>
        <Accordion sx={styles.accordionStyle}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{courseName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{courseDescription}</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default CommonAccordion