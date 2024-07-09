import React from 'react'
import Carousel from 'react-multi-carousel';
import { ProjectCard } from "./ProjectCard";

const ProjectCarousel = ({data, responsive, infinite}) => {
  return (<Carousel key="second" responsive={responsive} infinite={infinite} lazyLoad>
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
