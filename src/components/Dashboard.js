import React from 'react'
import { Content, Footer, Title, IconContainer, HeaderText } from '../styledComponents'
import ContactUs from './ContactUs'
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import CommonAccordion from './common-components/Accordion';
import { COURSE_DETAILS } from '../shared/Constant';


const Dashboard = () => {
  return (
    <>
    <Title> 
      <IconContainer><ModelTrainingIcon /></IconContainer> 
      <HeaderText>Business Intelligence Training Courses</HeaderText>
    </Title>
    <Content>
      {
        COURSE_DETAILS.map(courseDetails => {
          const {courseName} = courseDetails;
          return (
            <React.Fragment key={courseName}>
              <CommonAccordion {...courseDetails}/>
            </React.Fragment>
          )
        })
      }
      
      <div className='course-details'>
      <div>Courses Available</div>
        <div className='course-list'>
            <ol>
                <li>JAVA</li>
                <li>JS</li>
                <li>PYTHON</li>
                <li>KOTLIN</li>
            </ol>
        </div>
      </div>
        
        <ContactUs> </ContactUs>
    </Content>
    <Footer>
      <div className='footer-container'>
        <span>For more details contact us: </span><span>Mobile - 8637263314</span> <span>Email - ankit@gmail.com</span>
      </div>
    </Footer>
    </>
    
  )
}

export default Dashboard