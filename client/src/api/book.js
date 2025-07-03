import axios from './axios.js'

export const getBooksRequest = () => axios.get('/libros')

export const getCategories = () => axios.get('/libros/categorias')

export const addBookRequest = (data) => axios.post('/libros/', data)

export const editBookRequest = (id, data) => axios.put(`/libros/${id}/`, data)