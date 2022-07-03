import React from 'react'

const NewsItem = ({ title, author, url, image, description, publishedAt }) => {
  return (
    <a className='news-item' rel='noreferrer' target="_blank" href={url}>
      <li>
      <p style={{backgroundColor:'rgba(9, 35, 69, 0.452)', color:'white'}}>
        {title}</p>
      <p className='author'> {author}</p>

      <img src={image} alt={title} />
      <p className='published'> {publishedAt}</p>
      <p>{description}</p>


    </li></a>
  )
}



export default NewsItem