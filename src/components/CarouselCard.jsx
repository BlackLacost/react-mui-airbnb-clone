import { Box, Button, MobileStepper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import SwipeableViews from 'react-swipeable-views'

export const CarouselCard = ({ location }) => {
  const [activeStep, setActiveStep] = useState(0)

  const maxSteps = location.locationImages.length
  const handleNext = () => setActiveStep((curr) => curr + 1)
  const handlePrev = () => setActiveStep((curr) => curr - 1)
  const handleStepChange = (step) => setActiveStep(step)

  return (
    <Card>
      <HeartIconPosition>
        <FaRegHeart size={24} color="#fff" />
      </HeartIconPosition>

      {location.locationImages.length && (
        <SwipeableViews
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
        >
          {location.locationImages.map((step) => (
            <div key={step.id}>
              <LocationImage src={step.url} alt={step.id} />
            </div>
          ))}
        </SwipeableViews>
      )}

      <MobileStepperPosition>
        <MobileStepper
          sx={{
            backgroundColor: 'transparent',
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <ArrowButton
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <MdKeyboardArrowRight />
            </ArrowButton>
          }
          backButton={
            <ArrowButton onClick={handlePrev} disabled={activeStep === 0}>
              <MdKeyboardArrowLeft />
            </ArrowButton>
          }
        />
      </MobileStepperPosition>

      <CardFooter mt={2}>
        <Box>
          <Typography component="h3">{location.location}</Typography>
          <Typography component="h4">{location.days}</Typography>
          <Typography component="h5">{location.price}</Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="h5">
              {location.isNew ? 'New' : location.rating}
            </Typography>
            <AiFillStar size={18} />
          </Box>
        </Box>
      </CardFooter>
    </Card>
  )
}

const Card = styled(Box)({
  flexGrow: 1,
  position: 'relative',
  '& .MuiMobileStepper-root': {
    opacity: 0,
    transition: 'all ease 1000ms',
  },
  '&:hover .MuiMobileStepper-root': {
    opacity: 1,
  },
  '&:hover .MuiMobileStepper-dotActive': {
    backgroundColor: '#fff',
  },
})

const HeartIconPosition = styled(Box)({
  position: 'absolute',
  right: 10,
  top: 10,
  zIndex: 10,
})

const LocationImage = styled((props) => <Box component="img" {...props} />)({
  height: 275,
  display: 'block',
  overflow: 'hidden',
  width: '100%',
  borderRadius: 3,
})

const MobileStepperPosition = styled(Box)({
  position: 'absolute',
  bottom: 100,
  width: '100%',
})

const ArrowButton = (props) => (
  <Button
    size="large"
    sx={{
      minWidth: 'auto',
      p: 1,
      borderRadius: 10,
      color: '#000',
      backgroundColor: '#fff',
      opacity: 0.8,

      '&:hover': {
        opacity: 1,
        backgroundColor: '#fff',
      },
    }}
    {...props}
  >
    {props.children}
  </Button>
)

const CardFooter = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
})
