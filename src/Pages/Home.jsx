import React from 'react'
import DataCities from '../Data/dataCities'
import {Footer} from '../Components/Footer'
import {Home2} from '../Components/Carousel/Home2'
import Arrow from '../Components/Carousel/Arrow'

export default function Home() {
  return (
  <>
      <DataCities/>
      <Home2/>
      <Arrow/>
      <Footer/>
  </>
  )
}
