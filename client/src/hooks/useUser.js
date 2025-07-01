import { useState } from "react"
import { toast } from "sonner"
import { getUsersRequest, registerRequest, searchUserRequest } from "../api/user"
import { handleErrors } from "../utils/errors"

export function useUser () {
  const [ users, setUsers ] = useState([])
  const [ user, setUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  async function getUsers () {
    try {
      const response = await getUsersRequest()
      setUsers(response.data)
    } catch (e) {
      console.log(e)
      toast.error(handleErrors(e))
    } finally {
      setLoading(false)
    }
  }

  async function registerUser (data, handleClose) {
    try {
      const response = await registerRequest(data)
      setUsers(prevUsers => [...prevUsers, response.data])
      if (handleClose) handleClose()
      toast.success("Usuario registrado exitosamente.")
      return response.data
    } catch (e) {
      console.log(e)
      toast.error(handleErrors(e))
    }
  } 

  async function searchUser (data, openModal) {
    try {
      const { cedula } = data
      const response = await searchUserRequest(cedula)
      setUser(response.data)
      return true
    } catch (e) {
      openModal(true)
      console.log(e)
      return false
    }
  }

  return {
    users,
    user,
    loading,
    setUser,
    getUsers,
    registerUser,
    searchUser
  }
}