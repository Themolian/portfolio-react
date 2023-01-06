import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const formatDate = (date) => new Date(date).toLocaleDateString();

const BlogPost = () => {
  const postLocation = useLocation();
  const postSlug = postLocation.pathname.replace("/blog/", "");
  const { loading, error, data } = useQuery(
    loader("../../apollo/post-types/blog.gql"),
    {
      variables: {
        slug: postSlug,
      },
    }
  );
  if (loading) return <div className="loading-screen" />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <article className="blog-content">
      <h2>{data.post.title}</h2>
      <p className="date">{formatDate(data.post.date)}</p>
      <div
        className="blog-content__body"
        dangerouslySetInnerHTML={{ __html: data.post.content }}
      />
      <button>
        <Link className="btn" to="/blog">
          Back to Blog
        </Link>
      </button>
    </article>
  );
};

export default BlogPost;
