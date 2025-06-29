import { Box, TextField } from '@mui/material';

export function Input({ label, type, name, register, errors, svg: Icon }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
      <Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField
        error={!!errors}
        id="input-with-sx"
        label={label}
        type={type}
        name={name}
        {...register(name)}
        helperText={errors?.message}
        variant="standard"
        fullWidth
      />
    </Box>
  );
}
