import { Box, Button, Link, Stack } from '@mui/material'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'

export const ProfileSettings = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href="#">Become A Host</Link>
      <Stack>
        <Button>
          <BsGlobe size={24}></BsGlobe>
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: '1px solid #ddd',
          }}
        >
          <Stack>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  )
}
