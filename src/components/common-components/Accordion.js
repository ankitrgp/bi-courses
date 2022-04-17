import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';


const styles = {
    accordionStyle:
    { marginBottom:'10px',
    textAlign: 'left'},
    link: 
    { color: "blue",
    cursor: 'pointer'}
  };

const CommonAccordion = ({courseDetails, showCourseView}) => {
    const {courseName, courseDescription, courseDetailedDescription} = courseDetails;
    
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
                    <Typography>{courseDescription} <br/>
                    </Typography>
                    <Button onClick={()=> showCourseView(courseName)}>Click me!</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CommonAccordion