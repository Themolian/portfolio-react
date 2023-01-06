import React from "react";

const Hero = (props) => {
  if (props.isHomepage) {
    return (
      <section className="hero--homepage">
        <div className="hero-inner">
          <div dangerouslySetInnerHTML={{ __html: props.title }} />
          <button>
            <a className="btn btn--white" href={props.button.url}>
              {props.button.title}
            </a>
          </button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="hero">
        <div className="hero-inner">
          <h1>{props.title}</h1>
          <h3 className="subtitle">{props.subtitle}</h3>
        </div>
        <div className="hero-image">
          <img
            src={props.image}
            srcSet={props.responsiveImage}
            alt={props.altText}
          />
        </div>
      </section>
    );
  }
};

export default Hero;
