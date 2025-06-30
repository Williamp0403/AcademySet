import axios from './axios.js'

export const getBooksRequest = () => axios.get('/libros')

export const addBookRequest = (data) => axios.post('/libros/', data)