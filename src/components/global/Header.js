import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Link, useLocation } from "react-router-dom";

import Hero from "../global/Hero";

const Header = () => {
    const currentLocation = useLocation();
    let pageSlug = currentLocation.pathname;
    if(pageSlug.includes("/blog/")) {
        pageSlug = pageSlug.replace("/blog/", "");
    }
    const { loading, error, data } = useQuery(loader('../../apollo/global/header.gql'), {
        variables: {
            slug: pageSlug
        }
    });
    let logo;
    let headerClass = '';
    if(loading) {
        headerClass = " hidden";
    }
    if(error) {
        console.log(`There is an error: ${error.message}`);
    }
    if(!loading && !error) {
        logo = data.mediaItems.nodes[0].sourceUrl;
        if(data.nodeByUri) {
            //Blog Page Header
            if(data.nodeByUri.pageForPosts && data.nodeByUri.pageForPosts.isPostsPage === true) {
                // console.log(data.nodeByUri.pageForPosts);
                return (
                    <div className="blog-header">
                        <header className={`header${headerClass}`}>
                            <div className="header-inner">
                                <Link className="header-logo" to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                                <nav className="header-navigation">
                                    <ul>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                        <Hero 
                        title={data.nodeByUri.pageForPosts.heroSettings.title} 
                        subtitle={data.nodeByUri.pageForPosts.heroSettings.subtitle} 
                        image={data.nodeByUri.pageForPosts.featuredImage.node.sourceUrl} 
                        altText={data.nodeByUri.pageForPosts.featuredImage.node.altText}
                        responsiveImage={data.nodeByUri.pageForPosts.featuredImage.node.srcSet}
                        />
                    </div>
                )
            } else if(data.nodeByUri.isFrontPage === true) {
                //Homepage Header
                return (
                    <div className="top-content">
                        <div className="hero-image">
                            <img src={data.nodeByUri.featuredImage.node.sourceUrl} alt={data.nodeByUri.featuredImage.node.altText} />
                        </div>
                        <header className={`header header--homepage${headerClass}`}>
                            <div className="header-inner">
                                <Link className="header-logo" to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                                <nav className="header-navigation">
                                    <ul>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                        <Hero 
                        isHomepage 
                        title={data.nodeByUri.homepageSettings.heroTitle} 
                        button={data.nodeByUri.homepageSettings.heroButton}
                        />
                    </div>
                )
            } else {
                //Normal Header
                return (
                    <header className={`header${headerClass}`}>
                        <div className="header-inner">
                            <Link className="header-logo" to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                            <nav className="header-navigation">
                                <ul>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                )
            }
        }
    }
}

export default Header