import { Box, Container } from '@mui/material'
import { LocationSearch } from './LocationSearch'
import { Logo } from './Logo'
import { ProfileSettings } from './ProfileSettings'

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 90,
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
          <ProfileSettings />
        </Box>
      </Container>
    </Box>
  )
}
