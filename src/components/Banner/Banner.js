import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './Banner.css'
import { ACCESS_TOKEN, baseUrl, imageUrl} from '../../utils/api'


function Banner() {
  const [movie, setmovie] = useState()
  useEffect(() => {
    axios.get(`${baseUrl}/trending/movie/day?language=en-US` , {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: 'application/json',
      },}).then((Response)=>{
        const movie=Response.data.results
        if (movie.length>0){
          const randomIndex=Math.floor(Math.random()*movie.length)
          setmovie(movie[randomIndex]);
        }
    })
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title: ""}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview: ""}</h1>
      </div>
      <div className="fade_buttom"></div>
    </div>
  )
}

export default Banner
