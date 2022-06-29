import { Box, Container, CssBaseline } from '@mui/material'
import { Header } from './components/Header'
import { LocationCards } from './components/LocationCards'
import { OptionsTab } from './components/OptionsTab'

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <OptionsTab />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <LocationCards />
        </Container>
      </Box>
    </>
  )
}

export default App
