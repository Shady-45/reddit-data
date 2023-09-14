import React from 'react'
import RedditCard from './RedditCard'
import '../index.css'

const CardContainer = (redditData) => {

  return (
   <>
   <main className='card-container'>
   {

redditData && redditData?.children.map((item,index)=>{
    return(
        <RedditCard key={index} title={item?.data?.title} text={item?.data?.selftext_html} url={item?.data?.url} score={item?.data?.score} />
    )
})
}
   </main>
  </>
  )
}

export default CardContainer