import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

export function BasicSelect({ register, errors, categorias = [], defaultValue }) {
  return (
    <FormControl fullWidth error={!!errors}>
      <InputLabel id="categoria-label">Categoría</InputLabel>
      <Select
        labelId="categoria-label"
        id="categoria"
        defaultValue={defaultValue ?? ""}
        {...register("categoria", { required: "La categoría es obligatoria", valueAsNumber: true })}
      >
        <MenuItem value="" disabled>Selecciona una categoría</MenuItem>
        {categorias.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.nombre}
          </MenuItem>
        ))}
      </Select>
      {errors && <FormHelperText>{errors.message}</FormHelperText>}
    </FormControl>
  );
}

