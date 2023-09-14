import React from 'react';
import DOMPurify from 'dompurify';
import '../index.css'
const RedditCard = ({ title, text, url, score }) => {
  
  const cleanedHTML = text ? text.replace(/<!--\s*SC_(ON|OFF)\s*-->/g, '') :""
  const sanitizedHTML = DOMPurify.sanitize(cleanedHTML);

  return (
    <article className='card'>
      <h3 className='title'>{title.slice(0,50)}...</h3>
      {
        sanitizedHTML?      <div className='text' dangerouslySetInnerHTML={{ __html: sanitizedHTML }} /> : <p className='text-null'>No Data to show!</p>
      }
  <div className='card-items'>
  <a href={url}>Link</a>
      <p>score: {score}</p>
  </div>
     
    </article>
  );
}

export default RedditCard;
