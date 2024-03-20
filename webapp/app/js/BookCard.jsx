const { useState } = React;
import Swal from 'sweetalert2'
import ReactDOM from 'react-dom/client'
import withReactContent from 'sweetalert2-react-content'
import { FaStar, FaGoodreads } from "react-icons/fa";

import { GenreTag } from './GenreTag';


const showDesc = (title, message) => {
  withReactContent(
    Swal.fire({
      title: title,
      text: message,
      icon: "info",
      width: '40rem',
      grow: "fullscreen"
    })
  )
}

export default function BookCard({ title, author_name, avg_rating, genres, description, imageUrl, url }) {
  return (
    <div className="book-card__container">
      <div className="book-card__cover">
        <img className="book-card__cover__image" src={imageUrl} alt={title} />
      </div>

      <div className="book-card__info-section">
        <div className="book-card__info-section__genre-section">
          {genres.map((genre) => (
            <GenreTag genre={genre}/>
          ))}
        </div>
    
            
        <h3 className="book-card__info-section__title">{title}</h3>
        <p className="book-card__info-section__author">{author_name}</p>
        <div className="book-card__info-section__rating">
          <FaStar className='book-card__info-section__rating-icon' />
          <span className='book-card__info-section__rating-icon-rating'>{avg_rating}</span>
          
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaGoodreads className='book-card__info-section__rating-icon'/>
          </a>
        </div>
        <button
          className="book-card__info-section__show-description-btn btn btn-sm"
          onClick={() => showDesc(title, description)}
        >
          Show Description
        </button>
      </div>
    </div>
  );
}
