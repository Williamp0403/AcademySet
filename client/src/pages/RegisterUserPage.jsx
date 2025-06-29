import { Input } from "../components/Input"
import { useForm } from "react-hook-form"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../schemas/user.schema";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export function RegisterUserPage () {
  const { registerUser } = useUser()
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(UserSchema)
  })

  const handleRedirect = () => {
    navigate('/');
  };

  const onSubmit = handleSubmit(async data => {
    await registerUser(data)
  })

  return (
    <section className="flex justify-center items-center px-8 h-screen mx-auto">
      <div className="max-w-md w-full p-8 flex flex-col items-center gap-y-2 bg-zinc-300 rounded-xl">
        <h2 className="text-lg sm:text-xl font-bold">Registrar Usuario</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-2 sm:gap-y-4">
          <Input 
            label="Nombre" 
            type="text"
            name="nombre"
            register={register}
            errors={errors.nombre}
            svg={PersonOutlineOutlinedIcon}
          />
          <Input 
            label="Apellido" 
            type="text"
            name="apellido"
            register={register}
            errors={errors.apellido}
            svg={PeopleOutlineOutlinedIcon}
          />
          <Input 
            label="Cédula" 
            type="text"
            name="cedula"
            register={register}
            errors={errors.cedula}
            svg={BadgeOutlinedIcon}
          />
          <Input 
            label="Correo Electrónico"
            type="text"
            name="correo"
            register={register}
            errors={errors.correo} 
            svg={EmailOutlinedIcon}
          />
          <div className="flex justify-around">
            <button
              type="button"
              onClick={handleRedirect}
              className='flex items-center gap-x-1 px-3 py-2 text-sm sm:text-base rounded-md font-semibold bg-zinc-500 text-white hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer'
            >
              <ArrowBackIcon fontSize="small"/>
              Ir atrás
            </button>
            <button
              type='submit'
              disabled={isSubmitting}
              className='px-3 py-2 text-sm sm:text-base rounded-md font-semibold bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out cursor-pointer'
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}