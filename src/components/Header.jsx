import { Box, Container } from '@mui/material'
import { LocationSearch } from './LocationSearch'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            minHeight: 70,
            px: 4,
          }}
        >
          <Logo />
          <LocationSearch />
        </Box>
      </Container>
    </Box>
  )
}
