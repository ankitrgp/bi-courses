import React from 'react'
import { HeaderText, Section, ListRow } from '../styledComponents';
import { useEffect } from 'react';

const CourseDetails = ({course, navigateHome}) => {
  console.log(course)
  
  const { courseName, courseDescription, courseDetailedDescription, courseDuration, dayWiseContent} = course;

  useEffect(()=>{
    !courseName && navigateHome();
  })
  
  return (
    <>
    <div style={{textAlign:'left'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <HeaderText>{courseName}</HeaderText>
          <button onClick={navigateHome}>Back</button>
        </div>
        <Section>Duration - {courseDuration}</Section>
        <Section>{courseDetailedDescription}</Section>
        <Section>
          {
          dayWiseContent ?
          <div>
            <div style={{marginBottom: '30px', fontSize: 'large'}}> Course Curriculum Day Wise </div>
            { 
            dayWiseContent.map((ele)=>{
              const {day, topic} = ele;
              return (
                <li key={topic}>
                <ListRow>
                  <span style={{marginRight: '30px'}}>Day - {day}</span>
                  <span>{topic}</span>
                </ListRow>
              </li>) 
            })
            }
          </div> : <div style={{marginBottom: '30px', fontSize: 'large'}}> Course Curriculum will be updated soon for this course.</div>
          }
        </Section>
    </div>
    </>
  )
}

export default CourseDetails