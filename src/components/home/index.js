import React from 'react'
import Searcharea from '../searcharea'
import History from '../history'

export const Home = () => {
  return (
    <>
      <divContainer>
        <Searcharea />
        <History />
      </divContainer>
      {/* <img src={require('../../media/maincar.png')} style={{paddingBottom: '10px'}}></img> */}
    </>
  )
}