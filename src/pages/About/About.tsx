import React from 'react'
import CountdownText from '../../components/CountdownText'
import CountdownVideo from '../../components/CoundownVideo'
import { Container } from '@mui/material'

const About = () => {
  return (
    <Container sx={{py: 8}}>
    <CountdownText/>
    <CountdownVideo/>
    </Container>
  )
}

export default About