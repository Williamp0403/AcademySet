import { Input } from "../components/Input"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../schemas/user.schema";
import { useUser } from "../context/UserContext";

export function RegisterUserPage () {
  const { registerUser, setUser } = useUser()
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(UserSchema)
  })
  
  const onSubmit = handleSubmit(async data => {
    const newUser = await registerUser(data)
    if (newUser) {
      setUser(newUser)
      navigate("/prestamo-libro")
    }
  })

  return (
    <section className="flex justify-center items-center px-8 h-[calc(100vh-104px)] mx-auto">
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
          <button
            type='submit'
            disabled={isSubmitting}
            className='px-3 py-2 text-sm sm:text-base rounded-md font-semibold bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out cursor-pointer'
          >
            Registrar
          </button>
        </form>
      </div>
    </section>
  )
}