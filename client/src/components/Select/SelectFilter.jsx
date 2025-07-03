import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export function SelectFilter({ label, value, onChange, options }) {
  return (
    <FormControl size="small" sx={{
      minWidth: 230,
      backgroundColor: '#fff',
      borderRadius: '0.375rem', // Tailwind rounded-md
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      '& .MuiInputLabel-root': {
        color: '#71717a', // similar al placeholder
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#d4d4d8' }, // zinc-300
        '&:hover fieldset': { borderColor: '#a1a1aa' }, // zinc-400
        '&.Mui-focused fieldset': { borderColor: '#0ea5e9' }, // sky-500
        backgroundColor: '#fff',
        color: '#374151', // zinc-700
      },
      '& .MuiSelect-icon': { color: '#71717a' }, // ícono desplegable
    }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map(opt => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

