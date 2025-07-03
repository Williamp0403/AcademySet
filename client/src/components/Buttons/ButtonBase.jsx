export function ButtonBase ({ label, action, svg: Icon }) {

  function handleClick () {
    if (action) action()
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center text-sm sm:text-base gap-x-3 bg-sky-500 text-white font-semibold cursor-pointer rounded-md py-2 px-4 hover:bg-sky-600 transition duration-300 ease-in-out"
    >
      <Icon fontSize='small'/>
      {label}
    </button>
  );
}
