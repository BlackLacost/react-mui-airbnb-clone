import { Box, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import { FaAirbnb } from 'react-icons/fa'

export const Logo = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
        airBnB
      </Typography>
    </Box>
  )
}
