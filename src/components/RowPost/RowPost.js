import React, {useEffect, useState} from 'react'
import {baseUrl,ACCESS_TOKEN,imageUrl, genreUrl} from '../../utils/api'
import '../RowPost/RowPost.css'
import axios from 'axios'

function RowPost(props) {
  const [movies, setMovie] = useState([])
   let URL = props.genreId ? genreUrl(props.genreId) : `${baseUrl}/trending/all/day?language=en-US`
useEffect(() => {
    axios
      .get(URL, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.error('Error in fetching data', error);
        alert('Error in fetching data');
      });
  }, [URL]); 

  const youtubeVideo={
    height:390,
    width:'100%'
  };

  const movieTrailer = (id) => {
    console.log(id)
  }
  
  return (
    <div className='RowPost'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
         <img onClick={()=>movieTrailer(obj.id)} className={props.small ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}
      </div>
    </div>
  )
}

export default RowPost
