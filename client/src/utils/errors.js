export function handleErrors(e) {
  
  if (e.response?.status === 400) {
    if (e.response.data?.cedula?.[0] === "usuario with this cedula already exists.") {
      return "El usuario ya existe."
    }
    if (e.response.data?.isbn?.[0] === "libro with this isbn already exists.") {
      return "El ISBN ya existe."
    }
    if (e.response.data?.libro?.[0]) {
      return "EL libro no existe."
    }
    if (e.response.data?.usuario?.[0]) {
      return "EL usuario no existe."
    }
    
    return "Los datos ingresados son incorrectos."
  }

  if (e.response?.status === 404) {
    if (e.response.data?.detail?.[0]) {
      return "El libro no tiene un préstamo activo."
    }
  }

  if (e.response?.status === 500) {
    "Hubo un problema en el servidor. Por favor, intenta de nuevo más tarde."
  }

  if (e.message === "Network Error") {
    return "No se pudo conectar con el servidor. Verifica si el servicio está disponible."
  }

  return "Ocurrió un error inesperado."
}
