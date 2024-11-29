export const baseUrl='https://api.themoviedb.org/3'
export const ACCESS_TOKEN=process.env.REACT_APP_ACCESS_TOKEN
export const imageUrl='https://image.tmdb.org/t/p/original/'
export const genreUrl=(genreId)=>
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`
