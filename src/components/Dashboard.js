import React, {useState} from 'react'
import { Content, Footer, Title, IconContainer, HeaderText } from '../styledComponents'
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import { COURSE_DETAILS, MOBILE_NUMBER, EMAIL_ID } from '../shared/Constant';
import AllCourseDetails from './AllCourseDetails';
import { Routes, Route, useNavigate} from "react-router-dom";
import CourseDetails from './CourseDetails';



const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState({});

  const showCourseDetails = (name) => {
    setSelectedCourse(COURSE_DETAILS.find(ele => ele.courseName === name));
    navigate('/course-details');
  };

  return (
    <>
    <Title> 
      <IconContainer><ModelTrainingIcon /></IconContainer> 
      <HeaderText>Business Intelligence Training Courses</HeaderText>
    </Title>
    <Content>
      <Routes>
        <Route path="/" element={<AllCourseDetails showCourseDetails={showCourseDetails} ></AllCourseDetails>} />
        <Route path="/course-details" element={<CourseDetails course={selectedCourse} />} />
      </Routes>
    </Content>
    <Footer>
      <div className='footer-container'>
        <div>For more details contact us: </div><span>Mobile - {MOBILE_NUMBER}, </span> <span>Email -{EMAIL_ID}</span>
      </div>
    </Footer>
    </>
    
  )
}

export default Dashboard