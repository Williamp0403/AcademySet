import { useState } from "react"
import { addBookRequest, getBooksRequest } from "../api/book"

export function useBook () {
  const [ books, setBooks ] = useState([])
  const [ loading, setLoading ] = useState(true)
  
  async function getBooks () {
    try {
      const response = await getBooksRequest()
      console.log(response)
      setBooks(response.data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return {
    books,
    loading,
    getBooks
  }
}