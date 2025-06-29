export function handleErrors (e) {
 if (e.response.status === 400) {
  if (e.response.data.cedula[0] === "usuario with this cedula already exists.") return "El usuario ya existe."
  return "Los datos ingresados son incorrectos."
 }
}