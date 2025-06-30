import axios from './axios.js'

export const getUsersRequest = () => axios.get('/usuarios')

export const registerRequest = (data) => axios.post('/usuarios/', data)

export const searchUserRequest = (cedula) => axios.get(`/usuarios/buscar-por-cedula/?cedula=${cedula}`)

