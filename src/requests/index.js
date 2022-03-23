import axios from 'axios'
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  
  });
  export const AuthUsersApi = axios.create({
    baseURL:'http://localhost:8080'
  })

  export default api