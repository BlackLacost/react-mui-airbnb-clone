import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import { IoSearchCircleSharp } from 'react-icons/io5'

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week' },
  { id: 3, text: 'Add guest', withIcon: true },
]

export const LocationSearch = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        ml: 15,
      }}
      elevation={3}
    >
      <Stack
        sx={{
          borderRadius: 20,
          pl: 2,
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => (
          <Button key={choice.id}>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.primary,
                fontWeight: 'bold',
                mr: 1,
              }}
            >
              {choice.text}
            </Typography>
            {choice.withIcon && (
              <IoSearchCircleSharp color={pink[500]} size={40} />
            )}
          </Button>
        ))}
      </Stack>
    </Paper>
  )
}
