import React from 'react'
import Carousel from 'react-multi-carousel';
import { ProjectCard } from "./ProjectCard";

const ProjectCarousel = ({data, responsive}) => {
  return (<Carousel key="second" responsive={responsive} infinite={true} lazyLoad>
            {
                data.map((project, index) => (
                    <div className="card-container" key={index}>

                        <ProjectCard
                            
                            {...project}
                        />
                    </div>
                ))
            }
            </Carousel>
   
  )
}

export default ProjectCarousel
