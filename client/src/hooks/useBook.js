import { useState } from "react"
import { addBookRequest, getBooksRequest, getCategories } from "../api/book"
import { toast } from "sonner"
import { handleErrors } from "../utils/errors"

export function useBook () {
  const [ books, setBooks ] = useState([])
  const [ categories, setCategories ] = useState([])
  const [ loading, setLoading ] = useState(true)
  
 async function getBooksAndCategories () {
    try {
      const [booksResponse, categoriesResponse] = await Promise.all([
        getBooksRequest(),
        getCategories()
      ])
      setBooks(booksResponse.data)
      setCategories(categoriesResponse.data)
    } catch (e) {
      console.log(e)
      toast.error(handleErrors(e))
    } finally {
      setLoading(false)
    }
  }

  async function addBook (data, handleClose) {
    try {
      const response = await addBookRequest(data)
      setBooks(prevBooks => [...prevBooks, response.data])
      handleClose()
      toast.success('Libro agregado correctamente.')
    } catch (e) {
      console.log(e)
      toast.error(handleErrors(e))
    }
  }

  return {
    books,
    categories,
    loading,
    getBooksAndCategories,
    addBook
  }
}