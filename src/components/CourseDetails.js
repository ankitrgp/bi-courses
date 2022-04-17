import React from 'react'
import { HeaderText } from '../styledComponents';

const CourseDetails = ({course}) => {
    const {courseName, courseDescription, courseDetailedDescription} = course;
  return (
    <div>
        <HeaderText>{courseName}</HeaderText>
        <div>{courseDescription}</div>
        <div>{courseDetailedDescription}</div>
    </div>

  )
}

export default CourseDetails