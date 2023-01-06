import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { Link } from "react-router-dom";

const formatDate = (date) => new Date(date).toLocaleDateString();

const Blog = () => {
  const { loading, error, data } = useQuery(
    loader("../../apollo/post-types/blogs.gql")
  );
  if (loading) return <div className="loading-screen" />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="blog-posts">
      {data.posts.nodes.map((post) => (
        <article className="blog-post" key={post.id}>
          <Link to={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p className="date">{formatDate(post.date)}</p>
          <div
            className="excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
          <button>
            <Link className="btn" to={`/blog/${post.slug}`}>
              Read More
            </Link>
          </button>
        </article>
      ))}
    </div>
  );
};

export default Blog;
