import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { AccordionContainer } from '../../styledComponents';



const styles = {
    accordionStyle:
    { marginBottom:'10px',
    textAlign: 'left'},
    link: 
    { color: "blue",
    cursor: 'pointer'}
  };

const CommonAccordion = ({courseDetails, showCourseView}) => {
    const {courseId, courseName, courseDescription, courseDetailedDescription} = courseDetails;
    
    return (
        <AccordionContainer>
            <Accordion sx={styles.accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{courseName}</Typography>
                   
                </AccordionSummary>
                <AccordionDetails>
                    {courseDescription}
                    <div className='button-container' style={{ display:'flex', justifyContent:'flex-end'}}>
                        <Button variant="text" onClick={()=> showCourseView(courseId)}>View Details</Button>
                    </div>  
                </AccordionDetails>
            </Accordion>
        </AccordionContainer>
    )
}

export default CommonAccordion