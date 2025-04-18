import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '66de686f9a677bd824aca318c28fd50d';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    console.log('Response:', response.data.results);
    

    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie genre:', error);
    return null;
  }
};
