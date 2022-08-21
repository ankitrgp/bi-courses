import React from 'react'
import { COURSE_DETAILS } from '../shared/Constant';
import CommonAccordion from './common-components/Accordion';
import TutorDetails from './TutorDetails';

const AllCourseDetails = ({showCourseDetails}) => {
  return (
    <div>
      <div style={{textAlign: 'left',marginBottom: '20px', fontSize: 'x-large'}}>
        Find below the list of courses we offer, please select the one to view more details.
      </div>
      {
        COURSE_DETAILS.map(courseDetails => {
          const {courseName} = courseDetails;
          return (
            <React.Fragment key={courseName}>
              <CommonAccordion courseDetails= {courseDetails} showCourseView= {showCourseDetails}/>
            </React.Fragment>
          )
        })
      } 
      <TutorDetails></TutorDetails>
       
    </div>
  )
}

export default AllCourseDetails