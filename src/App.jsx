import { Box, CssBaseline } from '@mui/material'
import './App.css'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Header />
      </Box>
    </>
  )
}

export default App
