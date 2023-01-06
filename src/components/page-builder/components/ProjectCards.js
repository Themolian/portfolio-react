import React from "react";

const ProjectCards = (props) => {
  const projects = props.dataSource.projects;
  // console.log(projects);
  return (
    <section className="project-cards project-cards--component">
      <div className="project-cards__inner">
        <h2>{props.dataSource.title}</h2>
        <div className="project-cards__cards">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card__company">
                <img
                  src={project.projects.companyLogo.sourceUrl}
                  alt={project.projects.companyLogo.altText}
                />
              </div>
              <div className="project-card__client">
                <img
                  src={project.projects.clientLogo.sourceUrl}
                  alt={project.projects.clientLogo.altText}
                />
              </div>
              <div className="project-card__image">
                <img
                  src={project.featuredImage.node.sourceUrl}
                  alt={project.featuredImage.node.altText}
                />
              </div>
              <div className="project-card__text">
                <h3>{project.projects.title}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: project.projects.body }}
                ></div>
                <button className="button">
                  <a
                    href={project.projects.button.url}
                    className="btn btn--white"
                    target="__blank"
                  >
                    {project.projects.button.title}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        <button>
          <a href="/projects" className="btn">
            All Projects
          </a>
        </button>
      </div>
    </section>
  );
};

export default ProjectCards;
