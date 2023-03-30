import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://sportscore1.p.rapidapi.com',
  withCredentials: false,
  headers: {
    'X-RapidAPI-Key': 'f1eb668eafmshb27b9c52fdc7262p1ad120jsn5cb836d4837d',
    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default {
  getData() {
    return apiClient.get('/sports/1/teams', { params: {page: '1'}})
  },

  getItem(id) {
    return apiClient.get('/teams/'+id)
  },
  // getItem(id) {
  //   return apiClient.get(`/dogs/${id}`)
  // },
}


// const apiClient = axios.create({
  //   baseURL: 'http://localhost:3000',
  //   withCredentials: false,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // })