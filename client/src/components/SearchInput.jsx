import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export function SearchInput({ value, onChange, placeholder = 'Buscar...', className = '' }) {
  return (
    <div className={`flex w-full md:max-w-72 items-center gap-2 px-3 py-2 rounded-md shadow-sm border border-zinc-300 bg-white focus-within:ring-2 focus-within:ring-sky-400 transition ${className}`}>
      <SearchOutlinedIcon className="text-zinc-500" fontSize="small" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-sm text-zinc-700 placeholder-zinc-400"
      />
    </div>
  );
}
