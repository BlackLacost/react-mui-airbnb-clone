import { Box, Grid } from '@mui/material'
import { locations } from 'src/data/mock-data'
import { CarouselCard } from './CarouselCard'

export const LocationCards = () => {
  if (!locations.length) return null

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {locations.map((location) => (
          <Grid key={location.id} item xs={12} sm={6} md={4} lg={3}>
            <CarouselCard location={location} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
