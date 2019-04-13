import React from "react"
import ProjectCard from "./ProjectCard"
import { StaticQuery, graphql } from "gatsby"
import "../styles/projects.css"

const Projects = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              projects {
                title
                description
                image
                githubLink
                deploymentLink
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          {/* {console.log(data)} */}
          {data.site.siteMetadata.projects.map(project => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
              />
            )
          })}
        </div>
      )}
    />
  )
}

export default Projects
