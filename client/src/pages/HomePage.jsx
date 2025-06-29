import { useState } from "react";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form"
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchUserSchema } from "../schemas/user.schema";
import { useUser } from "../context/UserContext";
import { ModalNotUser } from "../components/Modals/ModalNotUser";

export function HomePage () {
  const { searchUser } = useUser()
  const [modalOpen, setModalOpen] = useState(false)
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(SearchUserSchema)
  })
  
  const onSubmit = handleSubmit(async data => {
    await searchUser(data, setModalOpen)
  })

  return (
    <section className="flex justify-center items-center px-8 h-[calc(100vh-92px)] mx-auto">
      <ModalNotUser open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="max-w-md w-full p-8 flex flex-col items-center gap-y-5 bg-zinc-300 rounded-xl">
        <h2 className="text-xl font-bold">Prestar Libros</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
          <Input 
            label='Cédula' 
            type="text"
            name="cedula"
            register={register}
            errors={errors.cedula}
            svg={BadgeOutlinedIcon}/>
          <button
            disabled={isSubmitting}
            className='px-4 py-2 text-sm sm:text-base rounded-md font-semibold bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out cursor-pointer'
            type='submit'
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}