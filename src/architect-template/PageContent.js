import React from 'react'
import About from './About'
import ContactSection from './ContactSection'
import Imagelocation from './Imagelocation'
import ProjectSection from './ProjectSection'

function PageContent() {
  return (
    <>
        {/* Page content */}
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
         <ProjectSection></ProjectSection>   
         <About></About> 
         <ContactSection></ContactSection>
         <Imagelocation></Imagelocation>
        </div>
    </>
  )
}

export default PageContent