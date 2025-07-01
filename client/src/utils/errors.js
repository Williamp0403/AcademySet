export function handleErrors(e) {
  
  if (e.response?.status === 400) {
    if (e.response.data?.cedula?.[0] === "usuario with this cedula already exists.") {
      return "El usuario ya existe."
    }
    return "Los datos ingresados son incorrectos."
  }

  if (e.message === "Network Error") {
    return "No se pudo conectar con el servidor. Verifica si el servicio está disponible."
  }

  return "Ocurrió un error inesperado."
}
