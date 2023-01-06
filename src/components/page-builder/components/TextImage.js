import React from 'react'

const TextImage = (props) => {
    const sectionImage = props.dataSource.image.sourceUrl;
    // console.log(props.dataSource);
    return (
        <section className="text-image">
            <div className="text-image__inner">
                <h2>{props.dataSource.title}</h2>
                <div className="text-image__content">
                    <div className="text-image__text">
                        <div dangerouslySetInnerHTML={{__html: props.dataSource.body}} />
                    </div>
                    <img className="text-image__image" src={sectionImage} alt={props.dataSource.image.altText} loading="lazy" />
                </div>
            </div>
        </section>
    )
}

export default TextImage