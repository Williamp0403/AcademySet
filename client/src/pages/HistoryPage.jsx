import HistoryIcon from '@mui/icons-material/History';
import { useLoan } from '../context/LoanContext';
import { useEffect } from 'react';

export function HistoryPage () {
  const { loans, loading, getLoan } = useLoan()

  useEffect(() => {
    getLoan()
  }, [])

  return (
    <section className="flex flex-col gap-y-6 sm:gap-y-12 py-4 sm:py-6 px-8 sm:px-12 h-min-[calc(100vh-96px)] mx-auto">
      <div className="flex items-center gap-x-2">
        <HistoryIcon fontSize="large" />
        <h1 className="text-xl sm:text-2xl font-bold">Historial</h1>
      </div>
    </section>
  )
}