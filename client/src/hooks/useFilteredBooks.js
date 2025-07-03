import { useMemo } from 'react';

export function useFilteredBooks(books, searchTerm, selectedCategory, availability) {
  return useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return books.filter(book => {
      const matchesSearch = !term || book.titulo.toLowerCase().includes(term);
      const matchesCategory = !selectedCategory || book.categoria_nombre === selectedCategory;
      const matchesAvailability = !availability || (
        availability === 'available' ? book.disponible : !book.disponible
      );

      return matchesSearch && matchesCategory && matchesAvailability;
    });
  }, [books, searchTerm, selectedCategory, availability]);
}