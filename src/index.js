const axios = require('axios');
const config = require('./config')

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account


  const discoverMovie = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.api_key}`
    return axios(url).then(response => response)
    
  }
  // always executed






const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.api_key}`
  return axios(url).then(response => response.data)
}
  


const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${config.api_key}`
  // code here
return axios.get(url)
  .then(response => response)
   .catch (function (error){
     return error.response.status
   })
  }
  
 

  

//   // handle error


// discoverMovie()
// getMovieById(500)
getMovieByIdFailure()


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}