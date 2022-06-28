import { Box, Grid } from '@mui/material'
import { locations } from 'src/data/mock-data'

export const LocationCards = () => {
  if (!locations.length) return null

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {locations.map((location) => (
          <Grid key={location.id} xs={12} sm={6} md={4} lg={3}>
            {location.location}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
