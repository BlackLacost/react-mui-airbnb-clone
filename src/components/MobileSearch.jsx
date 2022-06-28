import { IconButton, InputBase, Paper } from '@mui/material'
import { FaSearch } from 'react-icons/fa'
import { VscSettings } from 'react-icons/vsc'

export const MobileSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '90vw',
        p: '2px 4px',
        border: '1px solid #ccc',
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ p: '10px' }}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ flex: 1, ml: 1 }} placeholder="Where to?" />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <VscSettings />
      </IconButton>
    </Paper>
  )
}
