import React from "react";

const ShowcaseCards = (props) => {
    let cards = props.dataSource.cards;
    return (
        <section className="showcase-cards">
            <div className="showcase-cards__inner">
                <h2>{props.dataSource.title}</h2>
                <div className="showcase-cards__cards">
                        {cards.map((card) => (
                            <div className="showcase-card" key={card.title}>
                                <div className="showcase-card__icon">
                                    <img src={card.icon.sourceUrl} alt={card.icon.altText} />
                                </div>
                                <div className="showcase-card__text">
                                    <h3>{card.title}</h3>
                                    <p>{card.body}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
};

export default ShowcaseCards;
