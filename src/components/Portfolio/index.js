import './portfolio.css';
import React, { useState, useEffect } from 'react';
import Navigation from "../Navigation";
import client from '../../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const PortfolioCard = (props) => {

        const [posts, setPosts] = useState(null);

        // client.getEntry('1JoklmU9f3A9imHLWXOckg').then(function (entry) {
        //   // logs the entry metadata
        //   console.log(entry.fields);
        // });
      
      
        useEffect(() => {
          client.getEntries({
              client
          }).then((entries) =>{
              setPosts(entries.items)
      
             //console.log(entries);
      
          });
      }, [])
      
      
        return(
          <>
           <Navigation/>
           <div className="mainContent">
          <div className="Portfolio">
                  {posts && posts.map((post, i) =>{
                    console.log(post.fields.description.content);
                      return(
                          <div className="project" key={i}>
                              <h2>{post.fields.title}</h2>
                              <div className="projectLinks">
                              <a href={post.fields.gitHub}>GitHub</a>
                              <a href={post.fields.demo}>Demo</a>
                              </div>
                              <div>
                              {post && documentToReactComponents(post.fields.description)}
                              </div>
                              <p>Stack: {post.fields.stack}</p>
                          </div>
                      )
                  })}
            </div>
            </div>
            </>
    )
};

export default PortfolioCard;