import { useState } from "react"
import { toast } from "sonner"
import { getUsersRequest, registerRequest } from "../api/user"
import { handleErrors } from "../utils/errors"

export function useUser () {
  const [ users, setUsers ] = useState([])
  const [ loading, setLoading ] = useState(true)

  async function getUsers () {
    try {
      const response = await getUsersRequest()
      setUsers(response.data)
    } catch (e) {
      console.log(e)
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
    } catch (e) {
      console.log(e)
      toast.error(handleErrors(e))
    }
  } 

  async function searchUser (data, openModal) {
    try {
      throw new Error('Error personalizado')
    } catch (e) {
      openModal(true)
      console.log(e)
    }
  }

  return {
    users,
    loading,
    getUsers,
    registerUser,
    searchUser
  }
}