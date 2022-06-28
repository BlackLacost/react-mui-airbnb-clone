import { Box, Container } from '@mui/material'
import { styled } from '@mui/system'
import { LocationSearch } from './LocationSearch'
import { Logo } from './Logo'
import { MobileSearch } from './MobileSearch'
import { ProfileSettings } from './ProfileSettings'

const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  minHeight: 90,
  px: 4,
})

const DesktopBox = (props) => (
  <FlexBox
    sx={{
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'space-between',
    }}
  >
    {props.children}
  </FlexBox>
)

const MobileBox = (props) => (
  <FlexBox
    sx={{
      display: { xs: 'flex', md: 'none' },
      justifyContent: 'center',
    }}
  >
    {props.children}
  </FlexBox>
)

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
        <DesktopBox>
          <Logo />
          <LocationSearch />
          <ProfileSettings />
        </DesktopBox>
        <MobileBox>
          <MobileSearch />
        </MobileBox>
      </Container>
    </Box>
  )
}
