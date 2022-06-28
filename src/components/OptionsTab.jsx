import { Box, Button, Container, Tab, Tabs, tabsClasses } from '@mui/material'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { locationsTab } from 'src/data/mock-data'

export const OptionsTab = () => {
  const [value, setValue] = useState(0)

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: 'center',
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => (
            <Tab key={tab.id} icon={tab.icon} label={tab.label} />
          ))}
        </Tabs>
        <Button
          sx={{
            display: { xs: 'none', md: 'flex' },
            border: '1px solid #ddd',
            minWidth: 90,
            justifyContent: 'space-between',
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            px: 2,
            color: 'theme.palette.text.primary',
          }}
        >
          <FaFilter /> Filters
        </Button>
      </Box>
    </Container>
  )
}
