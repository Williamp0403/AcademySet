import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function HeaderSecondary () {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-10 bg-zinc-100">
      <nav className="flex items-center justify-between py-8 px-8 sm:px-12">
        <h2 className="font-bold text-xl">AcademySet</h2>
        <button
          onClick={handleRedirect}
          type="button"
          className='flex items-center gap-x-2 px-5 py-2 text-sm sm:text-base rounded-md font-semibold bg-zinc-500 text-white hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer'
        >
          <ArrowBackIcon fontSize="small"/>
          Ir a inicio
        </button>
      </nav>
    </header>
  )
}