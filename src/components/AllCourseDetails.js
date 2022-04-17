import React from 'react'
import { COURSE_DETAILS } from '../shared/Constant';
import CommonAccordion from './common-components/Accordion';


const AllCourseDetails = ({showCourseDetails}) => {
  return (
    <div>
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
    </div>
  )
}

export default AllCourseDetails