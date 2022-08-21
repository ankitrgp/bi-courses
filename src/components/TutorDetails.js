import React from 'react'

const TutorDetails = (props) => {
    const {children} = props;
  return (
    <>
        <div style={{marginTop: '30px', marginBottom: '30px', fontSize: 'large'}}>Know your Tutor</div>
        <div>Name: Sandeep Pathak</div>
        <div>Designation: Project Manager at US based MNC</div>
        <div>Experience: Over a decade of work experience in the field of Business Intelligence with various tool.</div>
        {children}
    </>
  )
}

export default TutorDetails