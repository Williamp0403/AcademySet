import axios from "./axios"

export const getLoandRequest = () => axios.get('/prestamos')

export const loanRequest = (data) => axios.post('/prestamos/', data)

export const returnBookRequest = (id) => axios.post(`/prestamos/devolver/${id}/`)