import { toast } from "sonner"
import { getLoandRequest, loanRequest } from "../api/loan"
import { handleErrors } from "../utils/errors"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function useLoan () {
  const [ loans, setLoans ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const navigate = useNavigate()

  async function getLoan () {
    try {
      const response = await getLoandRequest()      
      setLoans(response.data)
    } catch (e) {
      console.log(e)
      toast.error(handleErrors(e))
    } finally {
      setLoading(false)
    }
  }

  async function loan (data, handleClose) {
    try {
      const response = await loanRequest(data, handleClose)
      handleClose()
      toast.success('Préstamo realizado exitosamente.')
      navigate('/')
    } catch (e) {
      console.log(e)
      toast.error(handleErrors(e))
    }
  }

  return {
    loans,
    loading,
    loan,
    getLoan
  }
}
