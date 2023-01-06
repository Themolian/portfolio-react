import * as React from "react";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const ContactPage = () => {
  const { loading, error, data } = useQuery(
    loader("../apollo/pages/contact.gql")
  );
  if (loading) return <div className="loading-screen" />;
  if (error) return <p>Error: {error.message}</p>;

  if (!loading && !error) {
    const platformsTitle = data.page.contactPage.platforms.title;
    const platforms = data.page.contactPage.platforms.platformList;

    return (
      <div className="platforms">
        <h3>{platformsTitle}</h3>
        {platforms.map((platform) => (
          <div className="platform">
            <div className="platform__icon">
              <img src={platform.icon.sourceUrl} alt={platform.icon.altText} />
            </div>
            <div className="platform__link">
              <a href={platform.link.url}>{platform.link.title}</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ContactPage;
