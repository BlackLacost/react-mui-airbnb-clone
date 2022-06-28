import { Box, CssBaseline } from '@mui/material'
import './App.css'
import { Header } from './components/Header'
import { OptionsTab } from './components/OptionsTab'

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
        <OptionsTab />
      </Box>
    </>
  )
}

export default App
