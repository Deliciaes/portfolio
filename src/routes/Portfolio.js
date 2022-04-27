import PortfolioCard from '../components/Portfolio';
import Navigation from "../components/Navigation";
import React, { useState, useEffect } from 'react';
import client from '../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Portfolio = () => {


    const [posts, setPosts] = useState(null);

useEffect(() => {
  client.getEntries({
      client
  }).then((entries) =>{
      setPosts(entries.items)
  });

}, [])


return(
  <>
  <Navigation/>

   <div className="mainContent">
  <div className="Portfolio">
          {posts && posts.map((post, i) => {
              return(
                        <PortfolioCard
                        key={i}
                        title={post.fields.title}
                        description={post && documentToReactComponents(post.fields.description)}
                        github={post.fields.gitHub}
                        demo={post.fields.demo}
                        stack={post.fields.stack}
                        />
              )
          })}
    </div>
    </div>
    </>

  )
  
}

export default Portfolio;