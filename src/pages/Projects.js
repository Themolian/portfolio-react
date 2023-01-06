import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const Projects = () => {
  const { loading, error, data } = useQuery(loader("../apollo/projects.gql"));
  if (loading) return <div className="loading-screen" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="projects-header">
      <h2>{data.page.template.projectsPage.heading}</h2>
      <p>{data.page.template.projectsPage.subheading}</p>
      <div className="project-cards__cards">
        {data.projects.nodes.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card__company">
              <img
                src={project.projects.companyLogo.sourceUrl}
                alt={project.projects.companyLogo.altText}
              />
            </div>
            <div className="project-card__image">
              <img src={project.featuredImage.node.sourceUrl} srcSet={project.featuredImage.node.srcSet} alt={project.featuredImage.node.altText}/>
            </div>
            <div className="project-card__client">
              <img
                src={project.projects.clientLogo.sourceUrl}
                alt={project.projects.clientLogo.altText}
              />
            </div>
            <div className="project-card__overlay">
              <div className="project-card__text">
                <h3>{project.projects.title}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: project.projects.body }}
                />
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
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
