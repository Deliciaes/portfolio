import PortfolioCard from "../components/Portfolio";
import Navigation from "../components/Navigation";
import React, { useState, useEffect } from "react";
import client from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Portfolio = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        client,
        order: "-sys.createdAt",
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);

  return (
    <>
      <Navigation />

      {posts &&
        posts.map((post, i) => {
          return (
            <PortfolioCard
              key={i}
              title={post.fields.title}
              description={
                post && documentToReactComponents(post.fields.description)
              }
              github={post.fields.gitHub}
              demo={post.fields.demo}
              stack={post.fields.stack}
              image={post.fields.image.fields.file.url}
              imageAlt={post.fields.image.fields.description}
            />
          );
        })}
    </>
  );
};

export default Portfolio;
