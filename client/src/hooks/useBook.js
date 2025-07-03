import { useState } from "react"
import { addBookRequest, editBookRequest, getBooksRequest, getCategories } from "../api/book"
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

  async function editBook (id, data, handleClose) {
    try {
      const response = await editBookRequest(id, data);
      console.log(response)
      const updatedBook = response.data;

      setBooks(prevBooks => {
        const index = prevBooks.findIndex(book => book.id === updatedBook.id)
        if (index === -1) return prevBooks

        const updatedList = [...prevBooks]
        updatedList[index] = updatedBook
        return updatedList
      })

      handleClose()
      toast.success('Libro editado exitosamente.');
    } catch (e) {
      console.log(e);
      toast.error(handleErrors(e));
    }
  }

  return {
    books,
    categories,
    loading,
    setBooks,
    getBooksAndCategories,
    addBook,
    editBook
  }
}