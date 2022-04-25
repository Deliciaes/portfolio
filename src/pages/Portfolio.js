
import React, { useState, useEffect } from 'react';
import client from '../contentful';

const Portfolio = () => {
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
    <div className="Portfolio">
            {posts && posts.map((post, i) =>{
              console.log(post.fields.description.content);
                return(
                    <div key={i}>
                        <h2>{post.fields.title}</h2>
                        <p>{post.fields.gitHub}</p>
                        <p></p>
                    </div>
                )
            })}
      </div>
      </>
  )
}


export default Portfolio;